import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Allow Cross-Origin Requests from localhost
// TODO: Append the client's URL to the origin array
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173']
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

app.get('/', (req, res) => {
  res.send('Server is running!')
})

// Use environment variable for port or fallback to 4000 for local testing
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
