import { Button, Checkbox, Input, Space, Typography } from 'antd'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useState } from 'react'
import type { Todo } from '@/features/todos/types'
import { Check, Pencil, Trash2, X } from '@/shared/ui/icons/lucide'
import s from './TodoItem.module.scss'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export function TodoItem({
  todo,
  onToggle,
  onRemove,
  onUpdate,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: todo.id,
    disabled: isEditing,
  })

  const save = () => {
    const next = draft.trim()
    if (!next) return
    onUpdate(todo.id, next)
    setIsEditing(false)
  }

  const cancel = () => {
    setDraft(todo.title)
    setIsEditing(false)
  }

  return (
    <div
      ref={setNodeRef}
      className={s.item}
      {...(!isEditing ? attributes : {})}
      {...(!isEditing ? listeners : {})}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: isDragging ? undefined : transition,
        opacity: 1,
      }}
    >
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />

      {isEditing ? (
        <Input
          value={draft}
          autoFocus
          onChange={e => setDraft(e.target.value)}
          onPressEnter={save}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              e.preventDefault()
              cancel()
            }
          }}
        />
      ) : (
        <Typography.Text delete={todo.completed} className={s.title}>
          {todo.title}
        </Typography.Text>
      )}

      <Space size={8} wrap={false} className={s.itemActions}>
        {isEditing ? (
          <>
            <Button
              size="small"
              type="text"
              shape="circle"
              aria-label="Сохранить"
              title="Сохранить"
              icon={<Check />}
              onClick={save}
            />
            <Button
              size="small"
              type="text"
              shape="circle"
              aria-label="Отмена"
              title="Отмена"
              icon={<X />}
              onClick={cancel}
            />
          </>
        ) : (
          <>
            <Button
              size="small"
              type="text"
              shape="circle"
              aria-label="Редактировать"
              title="Редактировать"
              icon={<Pencil />}
              onClick={() => setIsEditing(true)}
            />
            <Button
              size="small"
              type="text"
              shape="circle"
              danger
              aria-label="Удалить"
              title="Удалить"
              icon={<Trash2 />}
              onClick={() => onRemove(todo.id)}
            />
          </>
        )}
      </Space>
    </div>
  )
}
