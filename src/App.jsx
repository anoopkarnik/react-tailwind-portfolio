import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {lazy, Suspense, useEffect} from 'react';
import LeftSideBar from './Layout/LeftSideBar';
import { usePortfolio } from './hooks/usePortfolio';
import { useProjects } from './hooks/useProjects';
import { useSkills } from './hooks/useSkills';

const Resume = lazy(() => import('./pages/Resume'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Project = lazy(() => import('./pages/Project/Project'));
const Experience = lazy(() => import('./pages/Experience/Experience'));


export default function App() {

      usePortfolio();
      useProjects();
      useSkills();

    return (
      <AnimatePresence>
        <div className="w-full flex flex-col overflow-auto bg-primary-light dark:bg-primary-dark transition duration-300">
            <LeftSideBar/>
            <Suspense fallback={<div>Loading...</div>}>
                <AboutMe/>
                <Project mainPage={true} />
                <Experience/>
                <Resume/>
            </Suspense>
        </div>
      </AnimatePresence>
    )
  }