import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaPlayCircle } from "react-icons/fa";
import ProjectDescription from './ProjectDescription'

const ProjectSingle = ({project}) => {
    const [showDescription, setShowDescription] = useState(false);

    const openDescription = () => {
      setShowDescription(true);
    };
    
    // Function to close the description
    const closeDescription = () => {
      setShowDescription(false);
    };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 2 }} transition={{ease: 'easeInOut', duration: 0.7, delay: 0.15,}}>
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer sm:mb-0 bg-secondary-light dark:bg-ternary-dark
      ">
         <div className="h-[150px] justify-center items-center overflow-hidden object-cover" onClick={openDescription}>
               <img
                  src={project.Images.length>0?project.Images[0]:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
                  className="rounded-t-xl border-none"
                  alt="Single Project"
               />
			</div>
         <div className='flex items-center justify-between'>
            <div className='text-center '>
               {project.SiteLink?
               <a href={project.SiteLink} ><FaPlayCircle className="font-general-medium text-lg md:text-xl 
               text-ternary-dark dark:text-ternary-light mb-2" /></a>:
               project.PlaystoreLink?<a href={project.PlaystoreLink}><FaPlayCircle className="font-general-medium text-lg md:text-xl 
               text-ternary-dark dark:text-ternary-light mb-2" /></a>:null}
            </div>
            <div className="text-center">
               <p className="font-general-medium text-md md:text-md text-ternary-dark dark:text-ternary-light mb-2">
                     {project.Name}
               </p>
               <div className="text-md text-ternary-dark dark:text-ternary-light">
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
            <div className='text-center px-4 py-6'>
               {project.GithubLink?
               <a href={project.GithubLink}>
                  <FaGithub className="font-general-medium text-lg md:text-3xl 
                  text-ternary-dark dark:text-ternary-light mb-2"/></a>:null}
            </div>
         </div>
		</div>
      {showDescription && <ProjectDescription project={project} onClose={closeDescription} />}
    </motion.div>
  )
}

export default ProjectSingle