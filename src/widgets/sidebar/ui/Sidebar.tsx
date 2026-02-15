import { Button, Tooltip } from 'antd'
import type { TodoFilter } from '@/features/todos/types'
import { TodoFilter as TodoFilterMenu } from '@/features/todos/ui/TodoFilter'
import { Logo } from '@/shared/ui/Logo'
import {
  CircleHelp,
  PanelLeftClose,
  PanelLeftOpen,
} from '@/shared/ui/icons/lucide'
import { useEffect, useState } from 'react'
import { useForcedCollapse } from '@/shared/lib/useForcedCollapse'
import { HelpModal } from './HelpModal'
import s from './Sidebar.module.scss'

type Props = {
  filter: TodoFilter
  counts: { total: number; active: number; completed: number }
  onChangeFilter: (v: TodoFilter) => void
}

export function Sidebar({ filter, counts, onChangeFilter }: Props) {
  const forcedCollapsed = useForcedCollapse('(max-width: 768px)')
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [isUserCollapsed, setIsUserCollapsed] = useState(false)

  useEffect(() => {
    if (forcedCollapsed) setIsUserCollapsed(false)
  }, [forcedCollapsed])

  const collapsed = forcedCollapsed || isUserCollapsed
  const showHeader = !collapsed || !forcedCollapsed
  const showLogo = !collapsed
  const showToggle = !forcedCollapsed

  return (
    <nav className={`${s.nav} ${collapsed ? s.collapsed : ''}`}>
      {showHeader ? (
        <div
          className={`${s.navHeader} ${collapsed ? s.navHeaderCollapsed : ''}`}
        >
          {showLogo ? (
            <div className={s.navLogo}>
              <Logo />
            </div>
          ) : null}
          {showToggle ? (
            <Button
              type="text"
              shape="circle"
              className={s.navToggle}
              aria-label={collapsed ? 'Развернуть панель' : 'Свернуть панель'}
              title={collapsed ? 'Развернуть панель' : 'Свернуть панель'}
              icon={collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
              onClick={() => setIsUserCollapsed(v => !v)}
            />
          ) : null}
        </div>
      ) : null}

      <div className={s.navMenu}>
        <TodoFilterMenu
          value={filter}
          onChange={onChangeFilter}
          collapsed={collapsed}
          counts={counts}
        />
      </div>

      <div className={s.navFooter}>
        <Tooltip
          title="Помощь"
          placement="right"
          styles={{ container: { textAlign: 'center' } }}
          open={collapsed ? undefined : false}
        >
          <Button
            type="text"
            shape="circle"
            className={s.navHelp}
            aria-label="Помощь"
            title="Помощь"
            icon={<CircleHelp />}
            onClick={() => setIsHelpOpen(true)}
          />
        </Tooltip>
      </div>

      <HelpModal open={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </nav>
  )
}
