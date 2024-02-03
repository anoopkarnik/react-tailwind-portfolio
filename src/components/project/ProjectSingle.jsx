import React from 'react'
import { motion } from 'framer-motion';

const ProjectSingle = ({project}) => {
    const techs = project 
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 1 }} transition={{ease: 'easeInOut', duration: 0.7, delay: 0.15,}}>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
			<div>
                {/* <img
                    src=""
                    className="rounded-t-xl border-none"
                    alt="Single Project"
                /> */}
			</div>
            <div className="text-center px-4 py-6">
                <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {project.Name}
                </p>
                  <img src="https://drive.google.com/uc?export=view&id=1zG-1yQiwItNT257HFA2dh5SEpC27pVf6" alt='not found'/>
                <div className="text-lg text-ternary-dark dark:text-ternary-light">
                   {
                      project.LanguagesUsed?project.LanguagesUsed.map(element => element).join(', ') : ''
                   }
                   {
                      project.LanguagesUsed.length>0?', ':''
                   }
                   {
                      project.FrameworksUsed?project.FrameworksUsed.map(element => element).join(', '): ''
                   }
                   {
                      project.FrameworksUsed.length>0?', ':''
                   }
                   {
                      project.ToolsUsed?project.ToolsUsed.map(element => element).join(', '): ''
                   } 
                   
                </div>
            </div>
		</div>
    </motion.div>
  )
}

export default ProjectSingle