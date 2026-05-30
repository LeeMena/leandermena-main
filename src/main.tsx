import { ViteSSG } from 'vite-ssg/single-page'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const Root = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

export const createApp = ViteSSG(Root)
