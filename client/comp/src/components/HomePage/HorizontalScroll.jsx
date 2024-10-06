import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'

import Placeholder1 from '../../assets/placeholder1.jpg'
import Placeholder2 from '../../assets/placeholder2.jpg'
import Placeholder3 from '../../assets/placeholder3.jpg'

const Example = () => {
  return (
    <div className='bg-gray-900'>
      <div className='flex h-48 items-center justify-center'>
        <div>
          <p className=' text-white pl-2 text-6xl md:text-6xl  mt-10 font-semibold'>
            What Do We Do?
          </p>

          <p className='mt-4 text-slate-300 text-center font-bold '>
            <span className='text-slate-200'>Everything. </span>
            <span className='text-slate-400 base'>Yes, even that</span>
          </p>
        </div>
      </div>
      <HorizontalScrollCarousel />
    </div>
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

  return (
    <section ref={targetRef} className='relative h-[300vh] '>
      <div className='sticky md:-mt-24 top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-4'>
          {cards.map(card => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className='group relative h-[450px] w-[250px] md:h-[450px] md:w-[450px] overflow-hidden bg-gray-800 cursor-pointer'
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute bg-black w-full h-full opacity-60 group-hover:opacity-30 transition-opacity duration-75 ease-in-out' />

      <div className='absolute z-10 flex items-center align-middle justify-center flex-col'>
        <p className='p-8 text-6xl font-medium uppercase text-white backdrop-blur-lg'>
          {card.title}
        </p>
        <div className='text-xl text-white '>
          <p>{card.service}</p>
        </div>
      </div>
      <span className='absolute text-white bottom-4 right-6 group-hover:bottom-8 group-hover:right-4 transition-all '>
        <CiLocationArrow1 size={32} />
      </span>
    </div>
  )
}

export default Example

const cards = [
  {
    url: Placeholder1,
    title: 'Title 1',
    service: 'Service',
    id: 1
  },
  {
    url: Placeholder2,
    title: 'Title 2',
    service: 'Service',
    id: 2
  },
  {
    url: Placeholder3,
    title: 'Title 3',
    service: 'Service',
    id: 3
  },
  {
    url: Placeholder1,
    title: 'Title 4',
    service: 'Service',
    id: 4
  },
  {
    url: Placeholder2,
    title: 'Title 5',
    service: 'Service',
    id: 5
  },
  {
    url: Placeholder3,
    title: 'Title 6',
    service: 'Service',
    id: 6
  },
  {
    url: Placeholder1,
    title: 'Title 7',
    service: 'Service',
    id: 7
  }
]
