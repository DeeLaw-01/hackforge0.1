// authStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Create the auth store with persist middleware
const useAuthStore = create(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,

      login: userData =>
        set({
          user: userData,
          isAuthenticated: true
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false
        }),

      updateUser: updatedUser =>
        set(state => ({
          user: {
            ...state.user,
            ...updatedUser
          }
        }))
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage
    }
  )
)

export default useAuthStore
