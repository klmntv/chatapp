import { ConfigProvider } from 'antd'
import { Suspense, lazy } from 'react'
import { setFilter } from '@/features/todos/todosSlice'
import { selectFilter, selectTodoCounts } from '@/features/todos/selectors'
import { antdTheme } from '@/app/theme/antdTheme'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar'
import s from './App.module.scss'

const TasksPage = lazy(() =>
  import('@/widgets/tasks-page/ui/TasksPage').then(m => ({
    default: m.TasksPage,
  }))
)

export function App() {
  const dispatch = useAppDispatch()

  const filter = useAppSelector(selectFilter)
  const counts = useAppSelector(selectTodoCounts)

  return (
    <ConfigProvider theme={antdTheme}>
      <div className={s.root}>
        <Sidebar
          filter={filter}
          counts={counts}
          onChangeFilter={v => dispatch(setFilter(v))}
        />
        <ErrorBoundary>
          <Suspense fallback={null}>
            <TasksPage />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ConfigProvider>
  )
}
