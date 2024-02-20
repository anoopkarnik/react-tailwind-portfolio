import React,{useContext, useState, useEffect} from 'react'
import { FiSearch, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectSingle from '../components/project/ProjectSingle';
import TechIcon from '../components/reusable/TechIcon';

const Project = (props) => {
    const {projects, setProjects, searchProject, setSearchProject, selectedTypes,
      setSelectedTypes,education, internships, partTimeWorks,hobbyProjects,fullTimeWorks, selectedEmploymentTypes,
      setSelectedEmploymentTypes, searchProjectsByTitle, 
      selectProjectsByMultipleCriteria, projectsByType, setProjectsByType, typeDetails} = useContext(ProjectsContext);
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
          acc[cur].end = 2;
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

  
  return ( 
    <div className='w-full container mx-auto'>
      <section className="py-5 sm:py-10 ">
        <div className="text-center pb-10">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio - {projects.length} projects
          </p>
        </div>
        <div className='flex flex-col justify-center items-start gap-4 border-t-[1px] border-gray-500 '>
          {selectTypes.map((type,index)=>(
            <div className='flex w-full h-full justify-center items-center gap-5 border-b-[1px] border-gray-500  py-5'>
             <div className='text-center w-[10%] h-full font-general-medium 
             text-ternary-dark dark:text-ternary-light '>
              <div className='text-xl sm:text-2xl'>{type}</div>
              <div> {projectDetailsByType[type]?projectDetailsByType[type].total:0} projects</div>
             </div>
             <div className="flex items-center flex-wrap w-full h-full gap-4 ">
              <div className ='flex-col text-[12px] justify-center items-center w-[28%] 
              text-center font-general-medium text-ternary-dark dark:text-ternary-light '>
                <div className='flex w-full h-full flex-wrap justify-start items-center gap-5'> 
                  {
                    projectDetailsByType[type]?projectDetailsByType[type].all.map((item,index) => (
                      <div className=' flex-col w-[20%]'>
                        <TechIcon key={index} item={item}/>
                        <div>
                          {item}
                        </div>
                      </div>
                    )):null
                  }
                </div>
                {/* <div className='flex  w-full h-full flex-wrap justify-start items-center gap-5'> 
                  {
                    projectDetailsByType[type]?projectDetailsByType[type].frameworks.map((item,index) => (
                      <div className=' flex-col w-[20%]'>
                        <TechIcon key={index} item={item}/>
                        <div>
                          {item}
                        </div>
                      </div>
                    )):null
                  }
                </div>
                <div className='flex  w-full h-full flex-wrap justify-start items-center gap-5'> 
                  {
                    projectDetailsByType[type]?projectDetailsByType[type].tools.map((item,index) => (
                      <div className=' flex-col w-[20%]'>
                        <TechIcon key={index} item={item}/>
                        <div>
                          {item}
                        </div>
                      </div>
                    )):null
                  }
                </div> */}
              </div>
                <button onClick={() => {
                  if (projectDetailsByType[type].start === 0) return;
                  let index = projectDetailsByType[type];
                  index.start = index.start - 1;
                  index.end = index.end - 1;
                  setProjectDetailsByType({...projectDetailsByType,[type]:index});
                }}
                className={`font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light
                 ${(projectDetailsByType[type]?projectDetailsByType[type].start:0 === 0) ? 'opacity-100' : 'opacity-10'}`}>
                  <FiChevronLeft className='' />
                </button>
                  {
                    projects.filter((project) => project.Type[0] === type)
                    .slice(projectDetailsByType[type]?projectDetailsByType[type].start:0,
                      projectDetailsByType[type]?projectDetailsByType[type].end:0)
                    .map((project) => ( 
                      <div className='w-[28%]'><ProjectSingle project={project} /> </div>
                    ))
                  }
                <button onClick={() => {
                  if (projectDetailsByType[type].end === projectDetailsByType[type].total) return;
                  let index = projectDetailsByType[type];
                  index.start = index.start + 1;
                  index.end = index.end + 1;
                  setProjectDetailsByType({...projectDetailsByType,[type]:index});
                }}
                className={`font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light
                 ${((projectDetailsByType[type]?projectDetailsByType[type].end:0) === (projectDetailsByType[type]?projectDetailsByType[type].total:0)) ? 'opacity-10' : 'opacity-100'}`}>
                  <FiChevronRight />
                </button>
              </div>
            </div> 
          ))}
        </div>
      </section>
    </div>
  )
}
export default Project;