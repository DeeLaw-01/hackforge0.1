import axios from 'axios'

export default function AboutUs () {
  const handleGetUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/users`)
      console.log('Got response!', response)
    } catch (error) {
      console.error('Error fetching users', error)
    } finally {
      console.log('Done fetching users')
    }
  }

  return (
    <>
      <section className='mt-20'>
        <div className='bg-white text-black'>This is the about us page</div>
        <button onClick={handleGetUsers}>CLICK ME TO GET USERS</button>
      </section>
    </>
  )
}
