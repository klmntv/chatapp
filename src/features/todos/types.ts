export type TodoId = string

export type TodoFilter = 'all' | 'active' | 'completed'

export interface Todo {
  id: TodoId
  title: string
  completed: boolean
}

export interface TodosState {
  items: Todo[]
  filter: TodoFilter
}
