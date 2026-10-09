import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MongodbAgentPage from './MongodbAgentPage'
import './index.css'
import './mongodb-agent.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MongodbAgentPage />
  </StrictMode>,
)
