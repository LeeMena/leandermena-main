import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App'
import './index.css'
import { routes } from './routes'

export const createApp = ViteSSG(
  App,
  { routes },
)
