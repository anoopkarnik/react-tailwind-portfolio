import React,{useContext} from 'react'
import { PortfolioContext } from '../../context/PortfolioContext'
import ExperienceSingle from './ExperienceSingle'
import { motion } from 'framer-motion';


const Experience = () => {
    const {education, internships, partTimeWorks,hobbyProjects,fullTimeWorks} = useContext(PortfolioContext);
    

  return (            
      <div className=' mx-20 flex flex-col w-full items-center justify-center'>
        <div className='flex w-full border-b border-b-2 border-gray-500 py-10 '>
          <div className='flex flex-col items-start w-1/2 p-4 border-r border-r-2 border-gray-500 '>
              <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Education</h1>
              <div className='flex flex-col w-full items-center'>
                  {education && education.length > 0 && education.map((item, index) => (
                      <ExperienceSingle key={index} item={item}/>
                  ))}+
              </div>
          </div>
          <div className='flex flex-col items-start w-1/2 p-4 ml-10'>
              <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Full Time Experience</h1>
              <div className='flex flex-col w-full items-center'>
                  {fullTimeWorks && fullTimeWorks.length > 0 && fullTimeWorks.map((item, index) => (
                      <ExperienceSingle key={index} item={item}/>
                  ))}
              </div>
          </div>
      </div>
      <div className='flex w-full border-b border-b-2 border-gray-500 py-10 '>
          <div className='flex flex-col items-start w-1/2 p-4 border-r border-r-2 border-gray-500'>
              <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Part Time</h1>
              <div className='flex flex-col w-full items-center'>
                  {partTimeWorks && partTimeWorks.length > 0 && partTimeWorks.map((item, index) => (
                      <ExperienceSingle key={index} item={item}/>
                  ))}
              </div>
          </div>
          <div className='flex flex-col items-start w-1/2 p-4 ml-10'>
              <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Internship</h1>
              <div className='flex flex-col w-full items-center'>
                  {internships && internships.length > 0 && internships.map((item, index) => (
                      <ExperienceSingle key={index} item={item}/>
                  ))}
              </div>
          </div>
      </div>
    {/* <div className='flex w-full border-b border-b-2 border-gray-500 py-10 '>
        <div className='flex flex-col items-start w-1/2  p-4 border-r border-r-2 border-gray-500'>
            <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Self Employed</h1>
            <div className='flex flex-col w-full items-center'>
                {hobbyProjects && hobbyProjects.length > 0 && hobbyProjects.map((item, index) => (
                    <ExperienceSingle key={index} item={item}/>
                ))}
            </div>
        </div>
        <div className='flex flex-col items-start w-1/2 p-4 ml-10'>
            <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Freelance</h1>
            <div className='flex flex-col w-full items-center'>
?
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Experience