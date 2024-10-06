import React, { useState, useEffect } from 'react'
import { z } from 'zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import placeholder1 from '../../assets/placeholder1.jpg'
import placeholder2 from '../../assets/placeholder2.jpg'
import placeholder3 from '../../assets/placeholder3.jpg'
import useAuthStore from '../../../UserAuthStore'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader.jsx'

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required')
})

const backgroundImages = [placeholder1, placeholder2, placeholder3]

export default function AuthPage () {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const setUser = useAuthStore(state => state.login)
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema)
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex(prevIndex => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(intervalId)
  }, [])

  const validateUser = async data => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/login`,
        {
          email: data.email,
          password: data.password
        }
      )
      console.log(response.data.user)
      setUser(response.data.user)
      return true
    } catch (error) {
      console.error('Error logging in user:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async data => {
    console.log(isLogin ? 'Login data:' : 'Register data:', data)
    if (isLogin) {
      if (!(await validateUser(data))) {
        // TODO: Show error here somehow. Toast maybe?
        return
      }
      navigate('/')
      return
    }
    try {
      setIsLoading(true)
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/register`,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password
        }
      )
      console.log('Registered!', response)
    } catch (error) {
      console.error('Error registering user', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex min-h-screen bg-gray-900'>
      <div className='flex-1 flex flex-col items-center justify-center p-8'>
        <div className='w-full max-w-md space-y-8'>
          {/* Logo placeholder */}
          <div className='flex justify-center mb-8'>
            <div className='w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center'>
              <span className='text-white text-2xl font-bold'>A</span>
            </div>
          </div>
          <div>
            <h2 className='text-4xl font-bold text-white mb-2'>
              {isLogin ? 'Welcome back' : 'Create new account'}
              <span className='text-blue-400'>.</span>
            </h2>
            <p className='text-gray-400 text-sm tracking-wide'>
              {isLogin ? 'Log in to your account' : 'Start for free'}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {!isLogin && (
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='firstName' className='sr-only'>
                    First name
                  </Label>
                  <Input
                    id='firstName'
                    placeholder='First name'
                    {...register('firstName')}
                    className='bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg'
                  />
                  {errors.firstName && (
                    <p className='mt-1 text-xs text-red-500'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor='lastName' className='sr-only'>
                    Last name
                  </Label>
                  <Input
                    id='lastName'
                    placeholder='Last name'
                    {...register('lastName')}
                    className='bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg'
                  />
                  {errors.lastName && (
                    <p className='mt-1 text-xs text-red-500'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            <div>
              <Label htmlFor='email' className='sr-only'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='Email'
                {...register('email')}
                className='bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg'
              />
              {errors.email && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor='password' className='sr-only'>
                Password
              </Label>
              <div className='relative'>
                <Input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  {...register('password')}
                  className='bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-lg'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400'
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className='flex items-center justify-between'>
              <Button
                type='button'
                variant='ghost'
                className='text-gray-400 hover:text-black'
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Create an account' : 'Log in'}
              </Button>
              <Button
                disabled={isLoading}
                type='submit'
                className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6'
              >
                {isLoading ? <Loader /> : isLogin ? 'Log in' : 'Sign up'}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden lg:block lg:w-1/2 relative overflow-hidden'>
        <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10' />
        {backgroundImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
