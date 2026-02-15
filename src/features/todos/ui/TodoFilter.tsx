import { Menu, Tooltip } from 'antd'
import type React from 'react'
import type { TodoFilter as TodoFilterType } from '@/features/todos/types'
import { CheckCircle2, Circle, ListTodo } from '@/shared/ui/icons/lucide'
import s from './TodoFilter.module.scss'

interface TodoFilterProps {
  value: TodoFilterType
  onChange: (value: TodoFilterType) => void
  collapsed?: boolean
  counts?: { total: number; active: number; completed: number }
}

export function TodoFilter({
  value,
  onChange,
  collapsed = false,
  counts,
}: TodoFilterProps) {
  const withCount = (label: string, count?: number) =>
    typeof count === 'number' ? `${label}: ${count}` : label

  const iconWithTooltip = (
    title: string,
    icon: React.ReactNode
  ): React.ReactNode =>
    collapsed ? (
      <Tooltip
        title={title}
        placement="right"
        styles={{ container: { textAlign: 'center' } }}
      >
        <span className={s.iconWrap}>{icon}</span>
      </Tooltip>
    ) : (
      icon
    )

  const items: Array<{
    key: TodoFilterType
    label: React.ReactNode
    icon: React.ReactNode
    title?: string
  }> = [
    {
      key: 'all',
      title: '',
      icon: iconWithTooltip(withCount('Все', counts?.total), <ListTodo />),
      label: (
        <span className={s.itemLabel}>
          <span>Все</span>
          {counts ? <span className={s.count}>{counts.total}</span> : null}
        </span>
      ),
    },
    {
      key: 'active',
      title: '',
      icon: iconWithTooltip(withCount('Активные', counts?.active), <Circle />),
      label: (
        <span className={s.itemLabel}>
          <span>Активные</span>
          {counts ? <span className={s.count}>{counts.active}</span> : null}
        </span>
      ),
    },
    {
      key: 'completed',
      title: '',
      icon: iconWithTooltip(
        withCount('Выполненные', counts?.completed),
        <CheckCircle2 />
      ),
      label: (
        <span className={s.itemLabel}>
          <span>Выполненные</span>
          {counts ? <span className={s.count}>{counts.completed}</span> : null}
        </span>
      ),
    },
  ]

  return (
    <div className={s.menu}>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        tooltip={false}
        selectedKeys={[value]}
        items={items}
        onClick={e => onChange(e.key as TodoFilterType)}
      />
    </div>
  )
}
