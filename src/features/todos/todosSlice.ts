import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import { loadTodos } from './storage'
import type { Todo, TodoFilter, TodosState } from './types'

const initialState: TodosState = {
  items: loadTodos(),
  filter: 'all',
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.items.unshift(action.payload)
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title: title.trim(),
            completed: false,
          } satisfies Todo,
        }
      },
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const id = action.payload
      const index = state.items.findIndex(x => x.id === id)
      if (index < 0) return

      const t = state.items[index]
      t.completed = !t.completed

      const [moved] = state.items.splice(index, 1)
      if (moved.completed) {
        const firstCompletedIndex = state.items.findIndex(x => x.completed)
        const insertIndex =
          firstCompletedIndex < 0 ? state.items.length : firstCompletedIndex
        state.items.splice(insertIndex, 0, moved)
        return
      }

      const firstCompletedIndex = state.items.findIndex(x => x.completed)
      const insertIndex =
        firstCompletedIndex < 0 ? state.items.length : firstCompletedIndex
      state.items.splice(insertIndex, 0, moved)
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.items = state.items.filter(x => x.id !== action.payload)
    },
    updateTodo(state, action: PayloadAction<{ id: string; title: string }>) {
      const t = state.items.find(x => x.id === action.payload.id)
      const next = action.payload.title.trim()
      if (t && next) t.title = next
    },
    setFilter(state, action: PayloadAction<TodoFilter>) {
      state.filter = action.payload
    },
    reorderTodos(
      state,
      action: PayloadAction<{ activeId: string; overId: string }>
    ) {
      const { activeId, overId } = action.payload
      if (activeId === overId) return

      const from = state.items.findIndex(t => t.id === activeId)
      const to = state.items.findIndex(t => t.id === overId)
      if (from < 0 || to < 0) return

      const [moved] = state.items.splice(from, 1)
      state.items.splice(to, 0, moved)
    },
  },
})

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  updateTodo,
  setFilter,
  reorderTodos,
} = slice.actions

export const todosReducer = slice.reducer
