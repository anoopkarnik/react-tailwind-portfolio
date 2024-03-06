import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SkillsProvider } from './context/SkillsContext.jsx'
import { ProjectsProvider } from './context/ProjectsContext.jsx'
import { PortfolioProvider } from './context/PortfolioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProjectsProvider>
      <SkillsProvider>
          <PortfolioProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
          </PortfolioProvider>
      </SkillsProvider>
  </ProjectsProvider>

)
