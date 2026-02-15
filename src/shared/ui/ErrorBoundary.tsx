import type { ReactNode } from 'react'
import { Component } from 'react'
import { Alert, Button } from 'antd'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert
          type="error"
          showIcon
          title="Что-то пошло не так"
          description={
            <Button size="small" onClick={() => window.location.reload()}>
              Перезагрузить
            </Button>
          }
        />
      )
    }

    return this.props.children
  }
}
