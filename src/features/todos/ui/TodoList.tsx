import { Alert } from 'antd'
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import type { Todo } from '@/features/todos/types'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.scss'

interface TodoListProps {
  items: Todo[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, title: string) => void
  onReorder: (activeId: string, overId: string) => void
}

export function TodoList({
  items,
  onToggle,
  onRemove,
  onUpdate,
  onReorder,
}: TodoListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    if (active.id === over.id) return
    onReorder(String(active.id), String(over.id))
  }

  if (!items.length) {
    return <Alert type="info" showIcon title="Задач по текущему фильтру нет" />
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={items.map(t => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className={s.list}>
          {items.map(todo => (
            <div key={todo.id} className={s.row}>
              <TodoItem
                todo={todo}
                onToggle={onToggle}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />
            </div>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
