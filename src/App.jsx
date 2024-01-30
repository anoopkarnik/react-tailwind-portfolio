import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import {lazy, Suspense} from 'react';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';

const Home = lazy(() => import('./pages/Home'));
const Resume = lazy(() => import('./pages/Resume'));


export default function App() {
    return (
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
            <Router>
              <AppHeader/>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Suspense>
              <AppFooter />
            </Router>
        </div>
      </AnimatePresence>
    )
  }