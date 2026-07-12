import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const meta = import.meta as unknown as { env?: { DEV?: boolean } }
    if (meta.env?.DEV) {
      console.error('ErrorBoundary caught:', error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            color: '#F2EDE6',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#CFA55B',
              marginBottom: '1rem',
            }}
          >
            LX
          </span>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.75rem' }}>
            Something went wrong on this page
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'rgba(242,237,230,0.6)', maxWidth: '32rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Reload the page to continue. If this keeps happening, email{' '}
            <a href="mailto:letstalk@leandermena.com" style={{ color: '#CFA55B' }}>
              letstalk@leandermena.com
            </a>
            .
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#CFA55B',
              color: '#121212',
              border: 'none',
              padding: '0.75rem 1.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
