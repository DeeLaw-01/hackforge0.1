import { Loader2 } from 'lucide-react'

const Loader = ({ color = '#3B8FC2', size = 25 }) => {
  return (
    <>
      <Loader2 size={size} color={color} className='animate-spin' />
    </>
  )
}

export default Loader
