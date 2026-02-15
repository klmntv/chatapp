import { Typography } from 'antd'
import { useCallback } from 'react'
import {
  addTodo,
  removeTodo,
  reorderTodos,
  toggleTodo,
  updateTodo,
} from '@/features/todos/todosSlice'
import { selectVisibleTodos } from '@/features/todos/selectors'
import { AddTodoForm } from '@/features/todos/ui/AddTodoForm'
import { TodoList } from '@/features/todos/ui/TodoList'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import s from './TasksPage.module.scss'

export function TasksPage() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectVisibleTodos)

  const onRemove = useCallback(
    (id: string) => dispatch(removeTodo(id)),
    [dispatch]
  )

  const onAdd = useCallback(
    (title: string) => dispatch(addTodo(title)),
    [dispatch]
  )
  const onToggle = useCallback(
    (id: string) => dispatch(toggleTodo(id)),
    [dispatch]
  )
  const onUpdate = useCallback(
    (id: string, title: string) => dispatch(updateTodo({ id, title })),
    [dispatch]
  )
  const onReorder = useCallback(
    (activeId: string, overId: string) =>
      dispatch(reorderTodos({ activeId, overId })),
    [dispatch]
  )

  return (
    <main className={s.main}>
      <header className={s.header}>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Задачи
        </Typography.Title>
      </header>

      <AddTodoForm onAdd={onAdd} />

      <div className={s.listArea}>
        <TodoList
          items={items}
          onToggle={onToggle}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onReorder={onReorder}
        />
      </div>
    </main>
  )
}
