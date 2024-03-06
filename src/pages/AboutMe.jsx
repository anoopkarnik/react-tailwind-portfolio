import React,{ useContext } from 'react'
import ExperienceSingle from './Experience/ExperienceSingle';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';
import Typewriter from 'typewriter-effect';
import { FiArrowDownCircle } from 'react-icons/fi';

const AboutMe = () => {
    const {education, internships, partTimeWorks,hobbyProjects,fullTimeWorks} = useContext(PortfolioContext);
    const resumeLink =  "https://raw.githubusercontent.com/anoopkarnik/react-tailwind-portfolio/main/src/assets/files/resume.pdf";

  return (
    <div className='container mx-auto'>
        <div className=' mx-auto flex items-center justify-center border-b-2 border-gray-500 py-10  gap-4'>
            <img 
                src="https://raw.githubusercontent.com/anoopkarnik/react-tailwind-portfolio/main/src/assets/images/profile_pic.png" 
                alt="Not Found" 
                className="h-[400px] w-auto object-contain rounded-full"
            />
            <div className='flex flex-col items-center justify-center gap-4'>
                <div >
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: 'easeInOut', duration: 0.9,delay: 0.1,}}
                        className="font-general-semibold text-2xl md:text-4xl text-ternary-dark dark:text-primary-light uppercase">
                        Hi There! I am Anoop
                    </motion.h1>
                </div>
                <div>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut',duration: 0.9, delay: 0.2,}}
                            className="font-general-semibold text-center text-2xl  text-ternary-dark dark:text-primary-light">
                            <Typewriter options={
                                { strings: ['Full Stack Engineer with Specialization in AI, Data Engineering & Rapid SaaS Deployment'],
                                autoStart: true, loop: true, deleteSpeed: 50, }} />
                    </motion.p>
                </div>
                <div className='font-general-medium text-sm sm:text-xl mb-1 text-ternary-dark dark:text-ternary-light'> 
                    I am a driven individual with the ability to learn and adapt to any situation.
                    I started in college as a Mechanical Engineer, where I dabbed in frontend development, designing, 
                    finance, marketing, sales and analytics in the end. During my first job as an analyst, 
                    I found a passion for machine learning and product development and studied all the Computer
                    Science UG subjects, secured a great rank in GATE and joined IIIT Hyderabad.
                    I want to use my skills of coding, machine learning, Data Processing, frontend and backend 
                    in research and product development. I specialize in creating and training - classification, 
                    regression , reinforcement learning ,natural language processing(specially chatbots) and 
                    computer vision models and designing and creating from base - data ingestion pipelines, 
                    workflow engine, rules engine and machine learning pipelines.
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
            </div>
        </div>
                    {/* <div className='w-full flex flex-col items-center justify-center border-b border-b-2 border-gray-500 py-10'>
                        <div className='flex flex-wrap items-center justify-start w-full mb-5 '>
                            <div className="mr-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                                Languages
                            </div>
                            {languages && languages.length > 0 && languages.map((item, index) => (
                                <TechIcon key={index} item={item}/>
                                ))}
                        </div>
                        <div className='flex flex-wrap items-center justify-start w-full mb-5'>
                            <div className="mr-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                                Frameworks
                            </div>
                            {frameworks && frameworks.length > 0 && frameworks.map((item, index) => (
                                <TechIcon key={index} item={item}/>
                                ))}
                        </div>
                        <div className='flex flex-wrap items-center justify-start w-full '>
                            <div className="mr-10  font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                                Tools
                            </div>
                            {tools && tools.length > 0 && tools.map((item, index) => (
                                <TechIcon key={index} item={item}/>
                                ))}
                        </div>
                    </div> */}
    </div>
  )
}

export default AboutMe