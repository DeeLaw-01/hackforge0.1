import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'

import Placeholder1 from '../../assets/placeholder1.jpg'
import Placeholder2 from '../../assets/placeholder2.jpg'
import Placeholder3 from '../../assets/placeholder3.jpg'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  return (
    <div
      key={card.id}
      className='group relative h-[450px] w-[250px] md:h-[450px] md:w-[450px] overflow-hidden bg-gray-800 cursor-pointer'
      onClick={() => {
        navigate(`/quiz/${card.id}`)
      }}
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
        <p className='p-8 text-6xl font-medium uppercase text-white '>
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

export const cards = [
  {
    url: Placeholder1,
    title: 'General Knowledge',
    service: 'Test your general knowledge',
    id: 11
  },
  {
    url: Placeholder2,
    title: 'Books',
    service: 'How well do you know entertainment?',
    id: 12
  },
  {
    url: Placeholder3,
    title: 'Film',
    service: 'Are you a film nerd?',
    id: 13
  },
  {
    url: Placeholder1,
    title: 'Music',
    service: 'Music lover?',
    id: 14
  },
  {
    url: Placeholder2,
    title: 'Theatres',
    service: 'Why art thou not clicking on me?',
    id: 15
  },
  {
    url: Placeholder3,
    title: 'Television',
    service: "WHAT'S IN THE BOX!?",
    id: 16
  },
  {
    url: Placeholder1,
    title: 'Video Games',
    service: 'How do you do fellow kids?',
    id: 17
  },
  {
    url: Placeholder2,
    title: 'Board Games',
    service: 'I play ludo too!',
    id: 18
  },
  {
    url: Placeholder1,
    title: 'Nature',
    service: 'Chemistry? yeah right..',
    id: 19
  },
  {
    url: Placeholder1,
    title: 'Computers',
    service: 'Beep Boop!',
    id: 20
  },
  {
    url: Placeholder2,
    title: 'Mathematics',
    service: 'We get it, nerd',
    id: 21
  },
  {
    url: Placeholder1,
    title: 'Mythology',
    service: 'Mummies!',
    id: 22
  },
  {
    url: Placeholder2,
    title: 'Sports',
    service: 'Mr Muscle man wants to do a test?',
    id: 23
  },
  {
    url: Placeholder1,
    title: 'Geography',
    service: 'Landmarks?',
    id: 24
  },
  {
    url: Placeholder2,
    title: 'History',
    service: 'You remember the dates?',
    id: 25
  },
  {
    url: Placeholder1,
    title: 'politics',
    service: 'You have weird interests',
    id: 26
  },
  {
    url: Placeholder2,
    title: 'Art',
    service: "Leonardo Da Vinci would've liked you",
    id: 27
  },
  {
    url: Placeholder1,
    title: 'Celebrities',
    service: 'Wow, get a better hobby',
    id: 28
  },
  {
    url: Placeholder2,
    title: 'Animals',
    service: "Who doesn't love them?",
    id: 29
  }
]

export default Example
