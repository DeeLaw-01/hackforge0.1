import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import placeholder1 from '../../assets/placeholder1.jpg'
import placeholder2 from '../../assets/placeholder2.jpg'
import placeholder3 from '../../assets/placeholder3.jpg'

const carouselItems = [
  {
    image: placeholder1,
    title: 'Say farewell to dead branches',
    subtitle: 'Find reliable tree services in your area',
    buttonText: 'Tree services',
    duration: 5000
  },
  {
    image: placeholder2,
    title: 'Discover local flavors',
    subtitle: 'Explore top-rated restaurants near you',
    buttonText: 'Find restaurants',
    duration: 4000
  },
  {
    image: placeholder3,
    title: 'Home improvement made easy',
    subtitle: 'Connect with skilled contractors for your next project',
    buttonText: 'Home services',
    duration: 6000
  }
]

export default function Carousel () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length)
    setProgress(0)
  }, [])

  const goToSlide = index => {
    setCurrentIndex(index)
    setProgress(0)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          goToNext()
          return 0
        }
        return prevProgress + (100 / carouselItems[currentIndex].duration) * 100
      })
    }, 100)

    return () => clearInterval(timer)
  }, [currentIndex, goToNext])

  return (
    <div className='relative w-full h-[600px] overflow-hidden'>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='absolute inset-0'
        >
          <div className='relative w-full h-full'>
            <img
              src={carouselItems[currentIndex].image}
              alt={carouselItems[currentIndex].title}
              className='w-full h-full object-cover object-center'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-br from-black to-transparent bg-opacity-60' />
          <div className='absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8'>
            <div className='max-w-lg md:ml-14'>
              <h1 className=' text-4xl md:text-6xl font-bold text-white mb-4'>
                {carouselItems[currentIndex].title}
              </h1>
              <p className='text-2xl text-white mb-6'>
                {carouselItems[currentIndex].subtitle}
              </p>
              <button className='bg-cta-secondary text-white px-6 py-2 rounded-md hover:scale-[1.01] transition-all ease-in-out animate-text'>
                {carouselItems[currentIndex].buttonText}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className='absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4'>
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className='w-16 h-1 bg-white bg-opacity-50 rounded-full overflow-hidden'
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className='h-full bg-white transition-all duration-100'
              style={{
                width: index === currentIndex ? `${progress}%` : '0%'
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
