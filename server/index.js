import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config() // This line should load environment variables from the .env file.
//Test comment
const app = express()
app.use(express.json()) // This line should allow the server to parse JSON request bodies.

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Allow Cross-Origin Requests from frontend
app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:5173',
      'https://hackforge-01.vercel.app',
      'https://hackforge-01-7fo2v819z-deelaw-01s-projects.vercel.app'
    ]
  })
)

const db = mongoose.connection

//Set Console Logs for Development

db.once('open', () => {
  console.log('MongoDB connected')
})

db.on('error', error => {
  console.log(error)
})

db.on('disconnected', () => {
  console.log('MongoDB disconnected')
})
// ! GET ALL USERS
// Define the User Schema
const UserSchema = mongoose.Schema({
  email: String,
  password: String
})
// Create the User Modal
const UserModal = mongoose.model('users', UserSchema)

// Create Endpoint for getting all users
app.get('/users', (req, res) => {
  UserModal.find({})
    .then(function (users) {
      res.json(users)
    })
    .catch(function (err) {
      res.json(err)
    })
})
// ! REGISTERATION
// Define the Auth Schema for storing email and password
const AuthSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String }
})

// Create the Auth model for the "Auth" collection
const AuthModal = mongoose.model('auths', AuthSchema)

// Create Endpoint to handle user registration (storing email and password)
app.post('/register', async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    // Create and save the new user
    const newUser = new AuthModal({ email, password, firstName, lastName })
    await newUser.save()
    return res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error('Error registering user:', error)
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email is already registered' })
    }
    return res.status(500).json({ message: 'Internal server error' })
  }
})

// ! LOGIN

// Create Endpoint to handle user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    // Find the user by email and password
    const user = await AuthModal.findOne({ email, password })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    res.json({ user: user })
  } catch (error) {
    console.error('Error logging in user:', error)
    return res.status(500).json({ message: 'Internal server error ' + error })
  }
})

app.get('/', (req, res) => {
  res.send('Server is running!')
})

// Use environment variable for port or fallback to 4000 for local testing
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
