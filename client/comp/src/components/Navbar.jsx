'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../assets/logo.png'

export default function Component () {
  const navigate = useNavigate()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = window.scrollY / scrollHeight
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About us', href: '/about' },
    { name: 'Pricing', href: '#' },
    { name: 'Careers', href: '#' }
  ]

  const NavLinks = () => (
    <>
      {navItems.map(item => (
        <a
          key={item.name}
          href={item.href}
          className='text-white hover:text-gray-200 transition-colors'
        >
          {item.name}
        </a>
      ))}
    </>
  )

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, ${Math.min(
            0.8 + scrollProgress,
            1
          )}) 0%, rgba(0, 0, 0, ${Math.max(scrollProgress - 0.2, 0)}))`
        }}
        className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-16 md:h-20'
      >
        <div className='text-white text-xl font-bold'>
          <Link to='/home'>Placeholder</Link>
        </div>
        {/* <img
          src={logo}
          className='rounded-full hover:scale-[1.01] cursor-pointer transition-transform size-[90px] md:size-[110px] -ml-5'
        /> */}
        {isMobile ? (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className='text-white focus:outline-none'
          >
            <Menu size={24} />
          </button>
        ) : (
          <div className='flex items-center space-x-6'>
            <NavLinks />
            <button
              className='text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition-colors'
              onClick={() => {
                navigate('/auth')
              }}
            >
              Sign in
            </button>
            <button className='bg-cta-primary text-white px-4 py-2 rounded-md hover:scale-[1.01] transition-all ease-in-out animate-text '>
              Schedule a Demo
            </button>
          </div>
        )}
      </motion.nav>

      {isMobile && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isSidebarOpen ? 0 : '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className='fixed inset-y-0 right-0 w-64 bg-black z-50 p-4 flex flex-col'
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className='self-end text-white mb-8 focus:outline-none'
          >
            <X size={24} />
          </button>
          <div className='flex flex-col space-y-4'>
            <NavLinks />
            <button className='text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition-colors'>
              Sign in
            </button>

            <button className='bg-cta-primary text-white px-4 py-2 rounded-md hover:scale-[1.01] transition-all ease-in-out animate-text '>
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      )}
    </>
  )
}
