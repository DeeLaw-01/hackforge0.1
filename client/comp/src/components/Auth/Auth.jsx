import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import placeholder1 from '../../assets/placeholder1.jpg'
import useAuthStore from '../../../UserAuthStore'

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

export default function AuthPage () {
  const setUser = useAuthStore(state => state.login)
  const user = useAuthStore(state => state.user)
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema)
  })

  const validateUser = data => {
    
  }

  const onSubmit = data => {
    console.log(isLogin ? 'Login data:' : 'Register data:', data)
    if (isLogin) {
      /* Login Path */
      if (!validateUser(data)) {
        /* TODO: Show error here somehow. Toast maybe? */
        return
      }
      /* Login Path */
      setUser(data.email)
      return
    }
    /* Register Path */
    /* TODO: axios request to register user */
  }

  return (
    <div className='flex min-h-screen '>
      <div className='flex-1 flex items-center justify-center p-8 bg-gray-900'>
        <div className='w-full max-w-md space-y-8 '>
          <div>
            <h2 className='text-4xl font-bold text-white mb-2'>
              {isLogin ? 'Welcome back' : 'Create new account.'}
              <span className='text-blue-400'>.</span>
            </h2>
            <p className='text-gray-400 text-sm  tracking-wide'>
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
                type='submit'
                className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6  '
              >
                {isLogin ? 'Log in' : 'Create account'}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden lg:block lg:w-1/2 relative'>
        <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10' />
        <img
          src={placeholder1}
          alt='placeholder'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
    </div>
  )
}
