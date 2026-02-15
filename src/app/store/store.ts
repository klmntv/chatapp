import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from '@/features/todos/todosSlice'
import { saveTodos } from '@/features/todos/storage'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

store.subscribe(() => {
  saveTodos(store.getState().todos.items)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
