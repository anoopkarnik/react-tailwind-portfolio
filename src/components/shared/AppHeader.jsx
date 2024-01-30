import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/UseThemeSwitcher';
import { FiMoon, FiSun } from 'react-icons/fi';

const AppHeader = () => {
    const [activeTheme, setTheme] = useThemeSwitcher();

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
                        {activeTheme === 'dark' ? (
                            <strong className="text-4xl "> AKD </strong>
                        ) : (
                            <strong className="text-4xl text-white "> AKD </strong>
                        )}
					</div>
                </div>
                <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
                    >
                        <Link
                            to="/"
                            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Home"
                        >
                            Home
                        </Link>
                        <Link
                            to="/resume"
                            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Resume"
                        >
                            Resume
                        </Link>
                </div>
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
            </div>

		</motion.nav>
	);
};

export default AppHeader;
