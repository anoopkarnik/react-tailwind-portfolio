import React,{useContext, useState, useEffect} from 'react'
import { FiSearch, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectCard from './ProjectCard';
import TechIcon from '../../components/TechIcon';
import ProjectSection from './ProjectSection';

const Project = (props) => {
    const { projects, setProjects, selectedTypes,
      setSelectedTypes, selectedEmploymentTypes,setSelectedEmploymentTypes,
       projectsByType, setProjectsByType, typeDetails, setTypeDetails,projectsLoading,setProjectsLoading} = useContext(ProjectsContext);
    const selectTypes = ['Full Stack','Frontend','Backend','AI','DevOps','Data Engineering'];
    // 'Electronics','Mechanical','Content Creation','Data Science','Marketing'];
    const selectEmploymentTypes = ['Internship','Part Time','Full Time','Postgraduate','Practise Projects','Hobby Projects']
    const [projectDetailsByType, setProjectDetailsByType] = useState({});

    useEffect(() => {
      const getProjectDetailsByType = () => {
        var projectIndex = selectTypes.reduce((acc,cur) => {
          acc[cur] = {};
          acc[cur].total = projects.filter((project) => project.Type[0] === cur).length;
          acc[cur].start = 0;
          acc[cur].end = 4;
          acc[cur].languages = projects.filter((project) => project.Type[0] === cur).reduce((acc, current) => {
            current.LanguagesUsed.forEach(item => {if (!acc.includes(item)) {acc.push(item);}});return acc;}, []);
          acc[cur].frameworks = projects.filter((project) => project.Type[0] === cur).reduce((acc, current) => {
            current.FrameworksUsed.forEach(item => {if (!acc.includes(item)) {acc.push(item);}});return acc;}, []);
          acc[cur].tools = projects.filter((project) => project.Type[0] === cur).reduce((acc, current) => {
            current.ToolsUsed.forEach(item => {if (!acc.includes(item)) {acc.push(item);}});return acc;}, []);
          acc[cur].all = [...acc[cur].languages,...acc[cur].frameworks,...acc[cur].tools];
          return acc;},{});
          setProjectDetailsByType(projectIndex);
      }
      getProjectDetailsByType();
    },[projects]);

  if (projectsLoading) {
    return (
      <div className='flex w-full h-full justify-center items-center'>
        <div className='text-2xl sm:text-4xl font-general-medium text-ternary-dark dark:text-ternary-light'>
          Loading Projects...
        </div>
      </div>
    )
  }
  else {
  return ( 
    <div className='w-full flex flex-col items-container mx-auto py-5 sm:py-10'>
        <div className="text-center pb-10 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio - {projects.length} projects
        </div>
        <div className='flex flex-col mx-20'>
          {selectTypes.map((type,index)=>(
            <div className='flex flex-col justify-center items-center w-full h-[500px] gap-5 border-b-2 p-4
             border-gray-500'>
              <div className='text-center font-general-medium text-ternary-dark dark:text-ternary-light '>
                <div className='text-xl sm:text-2xl'>{type}</div>
                <div> {projectDetailsByType[type]?projectDetailsByType[type].total:0} projects</div>
              </div>
              <div className ='hidden md:flex flex-wrap items-center gap-5 text-[12px] text-center font-general-medium
                  text-ternary-dark dark:text-ternary-light '>
                  {
                    projectDetailsByType[type]?projectDetailsByType[type].all.map((item,index) => (
                      <div className=' flex-col'>
                        <TechIcon key={index} item={item}/>
                        <div>
                          {item}
                        </div>
                      </div>
                    )):null
                  }
              </div>
              <div className='flex overflow-auto w-full'>
                <div className='gap-4 relative h-full w-full grid  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] overflow-auto '>
                    {
                      projects.filter((project) => project.Type[0] === type)
                      .map((project) => ( 
                        <ProjectCard project={project} />
                      ))
                    }
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
}
export default Project;