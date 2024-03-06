import React from 'react'
import useThemeSwitcher from '../hooks/UseThemeSwitcher';

import Typewriter from "typewriter-effect";
import { FiMoon, FiSun } from 'react-icons/fi';
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
    FiInstagram,
    FiFacebook,
} from 'react-icons/fi';

const LeftSideBar = () => {

    const [activeTheme, setTheme] = useThemeSwitcher();

    
    const socialLinks = [
        {
            id: 1,
            icon: <FiGlobe />,
            url: 'https://www.anoopkarnik.net/',
        },
        {
            id: 2,
            icon: <FiGithub />,
            url: 'https://github.com/anoopkarnik',
        },
        {
            id: 3,
            icon: <FiTwitter />,
            url: 'https://twitter.com/anooplegend1992',
        },
        {
            id: 4,
            icon: <FiLinkedin />,
            url: 'https://www.linkedin.com/in/anoopkarnik',
        },
        {
            id: 5,
            icon: <FiYoutube />,
            url: 'https://www.youtube.com/c/AnoopKarnik',
        },
        {
            id: 6,
            icon: <FiInstagram/>,
            url: 'https://www.instagram.com/anoopkarnik/',
        },
        {
            id: 7,
            icon: <FiFacebook/>,
            url: 'https://www.facebook.com/anoop.karnik1/',
        }
    ];
  return (
    <div className='fixed left-0  z-10 h-full flex flex-col gap-4 items-center justify-center bg-transparent 
    dark:bg-transparent '>
        <div onClick={() => setTheme(activeTheme === 'dark' ? 'light' : 'dark')} aria-label="Theme Switcher"
            className=" bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
            {activeTheme === 'dark' ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
        </div>

        <ul className="flex flex-col items-center justify-center">
            {socialLinks.map((link) => (
                <a
                    href={link.url}
                    target="__blank"
                    rel="noopener noreferrer" // Fix for security vulnerability with target="_blank"
                    key={link.id}
                    className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                >
                    <i className="text-lg sm:text-2xl md:text-4xl">
                        {link.icon}
                    </i>
                </a>
            ))}
        </ul>
    </div>

  )
}

export default LeftSideBar