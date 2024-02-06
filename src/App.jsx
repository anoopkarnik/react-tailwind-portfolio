import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import {lazy, Suspense} from 'react';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import { ProjectsProvider } from './context/ProjectsContext'

const Home = lazy(() => import('./pages/Home'));
const Resume = lazy(() => import('./pages/Resume'));
const Project = lazy(() => import('./pages/Project'));
const AboutMe = lazy(() => import('./pages/AboutMe'));


export default function App() {
    return (
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <ProjectsProvider>
              <Router>
                <AppHeader/>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/project" element={<Project mainPage={false} />} />
                    <Route path="/about" element={<AboutMe />} />
                  </Routes>
                </Suspense>
                <AppFooter />
              </Router>
          </ProjectsProvider>
        </div>
      </AnimatePresence>
    )
  }