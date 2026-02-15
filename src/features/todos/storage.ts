import type { Todo } from './types'

const STORAGE_KEY = 'todos'

const DEFAULT_TODOS: Todo[] = [
  { id: 'seed-3', title: 'дождаться обратной связи', completed: false },
  { id: 'seed-2', title: 'отправить на проверку', completed: true },
  { id: 'seed-1', title: 'сделать тестовое для ChatApp', completed: true },
]

export function loadTodos(): Todo[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_TODOS
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) && parsed.length
      ? (parsed as Todo[])
      : DEFAULT_TODOS
  } catch {
    return []
  }
}

export function saveTodos(todos: Todo[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch {
    return
  }
}
