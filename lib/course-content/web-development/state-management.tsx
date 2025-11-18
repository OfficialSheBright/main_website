export default function StateManagementContent(){
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">2.6 State Management</h1>
      
      {/* Learning Objectives */}
      <div className="bg-violet-50 border-l-4 border-violet-500 p-6 mb-8">
        <h3 className="text-violet-800 font-semibold mb-3">What You&apos;ll Master</h3>
        <ul className="text-violet-700 space-y-2">
          <li>• Redux Toolkit for complex state management</li>
          <li>• Zustand for lightweight state solutions</li>
          <li>• React Context API patterns and best practices</li>
          <li>• State persistence and middleware integration</li>
          <li>• Performance optimization in state management</li>
          <li>• Choosing the right state management solution</li>
        </ul>
      </div>

      {/* Redux Toolkit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Redux Toolkit (RTK)</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Modern Redux with RTK</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterSlice from './slices/counterSlice'
import userSlice from './slices/userSlice'
import { apiSlice } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// store/slices/counterSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  loading: boolean
  error: string | null
}

const initialState: CounterState = {
  value: 0,
  loading: false,
  error: null,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounterValue.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCounterValue.fulfilled, (state, action) => {
        state.loading = false
        state.value = action.payload
      })
      .addCase(fetchCounterValue.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch'
      })
  },
})

// Async thunk
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCounterValue = createAsyncThunk(
  'counter/fetchValue',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(\`/api/counter/\${userId}\`)
      if (!response.ok) {
        throw new Error('Failed to fetch counter value')
      }
      const data = await response.json()
      return data.value
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer

// hooks/redux.ts - Typed hooks
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Component usage
import React from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { increment, decrement, incrementByAmount, fetchCounterValue } from '../store/slices/counterSlice'

function Counter() {
  const { value, loading, error } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  const handleAsyncIncrement = () => {
    dispatch(fetchCounterValue('user123'))
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-4xl font-bold">{value}</div>
      <div className="flex space-x-2">
        <button 
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +
        </button>
        <button 
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +5
        </button>
        <button 
          onClick={handleAsyncIncrement}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Async +
        </button>
      </div>
    </div>
  )
}`}</code>
          </pre>
        </div>
      </section>

      {/* Zustand */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Zustand - Lightweight State Management</h2>
        
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Simple and Powerful</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`// stores/useCounterStore.js
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const useCounterStore = create(
  subscribeWithSelector(
    persist(
      immer((set, get) => ({
        // State
        count: 0,
        loading: false,
        error: null,
        history: [],

        // Actions
        increment: () =>
          set((state) => {
            state.count += 1
            state.history.push({ action: 'increment', timestamp: new Date() })
          }),

        decrement: () =>
          set((state) => {
            state.count -= 1
            state.history.push({ action: 'decrement', timestamp: new Date() })
          }),

        incrementAsync: async () => {
          set((state) => {
            state.loading = true
            state.error = null
          })

          try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            set((state) => {
              state.count += 1
              state.loading = false
              state.history.push({ action: 'incrementAsync', timestamp: new Date() })
            })
          } catch (error) {
            set((state) => {
              state.loading = false
              state.error = error.message
            })
          }
        },

        reset: () =>
          set((state) => {
            state.count = 0
            state.error = null
            state.history = []
          }),

        // Computed values
        get doubled() {
          return get().count * 2
        },

        // Selectors
        getPositiveCount: () => Math.max(0, get().count),
      })),
      {
        name: 'counter-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ count: state.count }), // Only persist count
      }
    )
  )
)

// Component usage
function Counter() {
  const { count, loading, error, doubled } = useCounterStore()
  const { increment, decrement, incrementAsync, reset } = useCounterStore()

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Zustand Counter</h2>
        <div className="text-4xl font-bold mb-2">{count}</div>
        <div className="text-lg text-gray-600 mb-4">Doubled: {doubled}</div>
        
        {loading && <div className="text-blue-500">Loading...</div>}
        {error && <div className="text-red-500">Error: {error}</div>}
        
        <div className="flex justify-center space-x-2">
          <button 
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            +1
          </button>
          <button 
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -1
          </button>
          <button 
            onClick={incrementAsync}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            Async +1
          </button>
          <button 
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

// Using selectors for performance
function CountDisplay() {
  const count = useCounterStore((state) => state.count)
  const doubled = useCounterStore((state) => state.doubled)
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
    </div>
  )
}

// Subscribe to changes
useCounterStore.subscribe(
  (state) => state.count,
  (count) => {
    console.log('Count changed to:', count)
    // Analytics, logging, etc.
  }
)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Context API */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">React Context API Patterns</h2>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Context Patterns</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`// contexts/AppContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// State shape
interface AppState {
  user: User | null
  theme: 'light' | 'dark'
  notifications: Notification[]
  loading: boolean
}

// Action types
type AppAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'TOGGLE_THEME' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    
    case 'LOGOUT':
      return { ...state, user: null }
    
    case 'TOGGLE_THEME':
      return { 
        ...state, 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      }
    
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      }
    
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      }
    
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    
    default:
      return state
  }
}

// Context creation
const AppStateContext = createContext<AppState | undefined>(undefined)
const AppDispatchContext = createContext<React.Dispatch<AppAction> | undefined>(undefined)

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    theme: 'light',
    notifications: [],
    loading: false,
  })

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

// Custom hooks
export function useAppState() {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider')
  }
  return context
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppProvider')
  }
  return context
}

// Higher-level hooks for common operations
export function useAuth() {
  const { user, loading } = useAppState()
  const dispatch = useAppDispatch()

  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const user = await authAPI.login(credentials)
      dispatch({ type: 'SET_USER', payload: user })
    } catch (error) {
      dispatch({ type: 'ADD_NOTIFICATION', payload: {
        id: Date.now().toString(),
        type: 'error',
        message: 'Login failed'
      }})
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    dispatch({ type: 'ADD_NOTIFICATION', payload: {
      id: Date.now().toString(),
      type: 'success',
      message: 'Logged out successfully'
    }})
  }

  return { user, loading, login, logout }
}

export function useNotifications() {
  const { notifications } = useAppState()
  const dispatch = useAppDispatch()

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: { ...notification, id: Date.now().toString() }
    })
  }

  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id })
  }

  return { notifications, addNotification, removeNotification }
}

// Usage in components
function LoginForm() {
  const { user, loading, login } = useAuth()
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(credentials)
  }

  if (user) return <div>Welcome, {user.name}!</div>

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
        placeholder="Email"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
        placeholder="Password"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Final Project */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🚀 Capstone Project: Full-Stack Task Management App</h3>
        <div className="bg-white p-4 rounded border mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Implement a complete task management system with:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Redux Toolkit for complex state (tasks, projects, users)</li>
            <li>• Zustand for UI state (modals, filters, preferences)</li>
            <li>• Context API for theme and authentication</li>
            <li>• Real-time updates with WebSocket integration</li>
            <li>• Offline support with state persistence</li>
            <li>• Performance optimization with selectors and memoization</li>
          </ul>
        </div>
        
        <div className="bg-violet-50 border border-violet-200 p-4 rounded">
          <p className="text-violet-800 text-sm">
            <strong>🎯 Advanced Features:</strong> Implement undo/redo functionality, 
            optimistic updates, conflict resolution, and state migration for app updates.
          </p>
        </div>
      </div>
    </div>
  );
}