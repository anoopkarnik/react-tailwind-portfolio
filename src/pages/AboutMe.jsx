import React from 'react'

const AboutMe = () => {
  return (
    <div className='container mx-auto'>
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="flex flex-col text-center">
                <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                   About Me
                </h1>
                <div className='flex flex-col items-center justify-between my-10'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <img href="https://raw.githubusercontent.com/anoopkarnik/react-tailwind-portfolio/main/src/assets/images/profile_pic.png" alt="Not Found"/>
                        </div>
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
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMe