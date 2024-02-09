import React,{ useContext } from 'react'
import { ProjectsContext } from '../context/ProjectsContext';
import ExperienceSingle from '../components/about/ExperienceSingle';
import TechIcon from '../components/reusable/TechIcon';


const AboutMe = () => {
    const {projects, setProjects, searchProject, setSearchProject, selectedTypes,
        setSelectedTypes,education, internships, partTimeWorks,hobbyProjects,fullTimeWorks,  languages, frameworks, tools,
        selectedEmploymentTypes, setSelectedEmploymentTypes, searchProjectsByTitle, 
        selectProjectsByMultipleCriteria} = useContext(ProjectsContext);
    

  return (
    <div className='container mx-auto'>
        <section >
            <div className="flex flex-col text-center">
                <div className='flex flex-col items-center justify-between my-10 py-10 border-t-2 border-gray-500 '>
                    <div className=' font-general-medium text-4xl sm:text-6xl mb-1 text-ternary-dark dark:text-ternary-light'>
                        About Me
                    </div>
                    <div className='flex items-center justify-center border-b-2 border-gray-500 py-10 '>
                        <div className='font-general-medium text-sm sm:text-2xl mb-1 text-ternary-dark dark:text-ternary-light'> 
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
                    </div>
                    <div className='w-full flex flex-col items-center justify-center border-b border-b-2 border-gray-500 py-10'>
                        <div className='flex flex-wrap items-center justify-start w-full mb-5 '>
                            <div className="mr-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                                Languages
                            </div>
                            {languages && languages.length > 0 && languages.map((item, index) => (
                                <TechIcon key={index} item={item}/>
                                ))}
                                {console.log(languages)}
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
                    </div>
                    <div className=' mt-10 flex flex-col w-full items-center justify-center'>
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
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMe