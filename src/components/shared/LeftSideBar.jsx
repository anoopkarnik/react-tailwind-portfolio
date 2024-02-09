import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/UseThemeSwitcher';
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
    const resumeLink =  "https://raw.githubusercontent.com/anoopkarnik/react-tailwind-portfolio/main/src/assets/files/resume.pdf";
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
    <div className='flex flex-col gap-4 items-center w-full justify-center p-10'>
        <div onClick={() => setTheme(activeTheme)}	aria-label="Theme Switcher"
			className=" bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
			{activeTheme === 'dark' ? (
				<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
				) : (
				<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
			)}
		</div>
        <div className='w-full h-[300px] flex justify-center items-center'>
            <img 
            src="https://raw.githubusercontent.com/anoopkarnik/react-tailwind-portfolio/main/src/assets/images/profile_pic.png" 
            alt="Not Found" 
            className="h-full w-auto object-contain rounded-full"
            />
        </div>
        <div>
            <a download="AnoopKarnik.pdf" href={resumeLink}
                className="font-general-medium flex justify-center items-center w-36 sm:w-48  mb-6 sm:mb-0 text-lg 
                border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50
                focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                aria-label="Download Resume">                    
                <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                <span className="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
            </a>
        </div>
        <div>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: 'easeInOut', duration: 0.9,delay: 0.1,}}
                className="font-general-semibold text-xl lg:text-2xl xl:text-2xl text-center  text-ternary-dark dark:text-primary-light uppercase">
                Hi There! I am Anoop
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut',duration: 0.9, delay: 0.2,}}
                className="font-general-semibold text-center text-md lg:text-lg xl:text-lg  text-ternary-dark dark:text-primary-light">
                <Typewriter options={
                    { strings: ['Full Stack Engineer with Specialization in AI, Data Engineering & Rapid SaaS Deployment'],
                    autoStart: true, loop: true, deleteSpeed: 50, }} />
            </motion.p>
        </div>
        <ul className="flex gap-2 sm:gap-4 flex-wrap items-center justify-center">
            {socialLinks.map((link) => (
                <a
                    href={link.url}
                    target="__blank"
                    key={link.id}
                    className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                >
                    <i className="text-sm sm:text-lg md:text-xl">
                        {link.icon}
                    </i>
                </a>
            ))}
        </ul>
     </div>
  )
}

export default LeftSideBar