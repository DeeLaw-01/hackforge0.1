import axios from 'axios'

export default function AboutUs () {
  const handleGetUsers = async () => {
    try {
      const response = await axios.get('localhost:4000/users')
      console.log('Got response!', response.data)
    } catch (error) {
      console.error('Error fetching users', error)
    } finally {
      console.log('Done fetching users')
    }
  }

  return (
    <>
      <div className='bg-white text-black'>This is the about us page</div>
      <button onClick={handleGetUsers()}>CLICK ME TO GET USERS</button>
    </>
  )
}
