import type { RootState } from '@/app/store/store'
import { createSelector } from '@reduxjs/toolkit'
import type { Todo } from './types'

export const selectTodos = (s: RootState) => s.todos.items
export const selectFilter = (s: RootState) => s.todos.filter

export const selectTodoCounts = createSelector([selectTodos], items => {
  const total = items.length
  const completed = items.reduce((acc, t) => acc + (t.completed ? 1 : 0), 0)
  const active = total - completed
  return { total, active, completed }
})

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (items, filter): Todo[] => {
    if (filter === 'active') return items.filter(t => !t.completed)
    if (filter === 'completed') return items.filter(t => t.completed)
    return items
  }
)
