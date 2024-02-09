import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import {lazy, Suspense} from 'react';

import { ProjectsProvider } from './context/ProjectsContext'
import LeftSideBar from './components/shared/LeftSideBar';

const Resume = lazy(() => import('./pages/Resume'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Project = lazy(() => import('./pages/Project'));


export default function App() {
    return (
      <AnimatePresence>
        <div className="w-full bg-secondary-light dark:bg-primary-dark transition duration-300">
          <ProjectsProvider>
                <div className='flex overflow'> 
                  <div className="flex-col w-[20%] fixed overflow-auto items-center justify-centerh-auto top-1/2
                  left-0 -translate-y-1/2 ">
                      <LeftSideBar/>
                  </div>
                  <div className='flex-grow ml-[20%]'>

                    <Suspense fallback={<div>Loading...</div>}>
                      <Project mainPage={true} />
                      <AboutMe/>
                      <Resume/>
                    </Suspense>
                  </div>
                </div>
          </ProjectsProvider>
        </div>
      </AnimatePresence>
    )
  }