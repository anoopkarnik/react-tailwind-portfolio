import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaPlayCircle } from "react-icons/fa";

const ProjectSingle = ({project}) => {
    const techs = project
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 1 }} transition={{ease: 'easeInOut', duration: 0.7, delay: 0.15,}}>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
			   <div className="w-full h-48 flex justify-center items-center overflow-hidden">
               <img
                  src={project.Images.length>0?project.Images[0]:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                  className="rounded-t-xl border-none"
                  alt="Single Project"
               />
			</div>
         <div className='flex items-center justify-between'>
            <div className='text-center px-4 py-6'>
               {project.SiteLink?
               <a href={project.SiteLink} ><FaPlayCircle className="font-general-medium text-lg md:text-3xl 
               text-ternary-dark dark:text-ternary-light mb-2" /></a>:
               project.PlaystoreLink?<a href={project.PlaystoreLink}><FaPlayCircle className="font-general-medium text-lg md:text-3xl 
               text-ternary-dark dark:text-ternary-light mb-2" /></a>:null}
            </div>
            <div className="text-center px-4 py-6">
               <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                     {project.Name}
               </p>
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
            {console.log(project.GithubLink)}
            <div className='text-center px-4 py-6'>
               {project.GithubLink?
               <a href={project.GithubLink}>
                  <FaGithub className="font-general-medium text-lg md:text-3xl 
                  text-ternary-dark dark:text-ternary-light mb-2"/></a>:null}
            </div>
         </div>
		</div>
    </motion.div>
  )
}

export default ProjectSingle