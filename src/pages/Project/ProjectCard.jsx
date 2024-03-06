import React,{useState} from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaPlayCircle } from "react-icons/fa";
import ProjectDescription from './ProjectDescription'

const ProjectCard = ({project}) => {
    const [showDescription, setShowDescription] = useState(false);

    const openDescription = () => {
      setShowDescription(true);
    };
    
    // Function to close the description
    const closeDescription = () => {
      setShowDescription(false);
    };

  return (
    <div // Set a fixed width and minimum height for the card
      className="h-[300px] w-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer sm:mb-0
       bg-secondary-light flex flex-col flex-shrink-0 "
   >  
         <img
            src={project.Images.length>0?project.Images[0]:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}
            className="block w-full h-[70%] object-cover  rounded-t-xl"
            alt="Single Project"
            onClick={openDescription}
         />
         <div className='flex items-center justify-between flex-shrink-0'>
            <div className='text-center w-[20%] '>
               {project.SiteLink?
               <a href={project.SiteLink} >
                  <FaPlayCircle className="font-general-medium text-lg md:text-xl 
                  text-ternary-dark dark:text-ternary-light mb-2" /></a>:
                  project.PlaystoreLink?<a href={project.PlaystoreLink}>
                     <FaPlayCircle className="font-general-medium text-lg md:text-xl 
                     text-ternary-dark dark:text-ternary-light mb-2" /></a>:null}
            </div>
            <div className="text-center w-[60%] py-2">
               <p className="font-general-medium font-bold text-md md:text-md text-ternary-dark dark:text-ternary-light mb-2">
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
            <div className='text-center px-4 py-6 w-[20%]'>
               {project.GithubLink?
               <a href={project.GithubLink}>
                  <FaGithub className="font-general-medium text-lg md:text-3xl 
                  text-ternary-dark dark:text-ternary-light mb-2"/></a>:null}
            </div>
         </div>
      {showDescription && <ProjectDescription project={project} onClose={closeDescription} />}
    </div>
  )
}

export default ProjectCard