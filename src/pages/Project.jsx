import React,{useContext, useState, useEffect} from 'react'
import { FiSearch, FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectSingle from '../components/project/ProjectSingle';

const Project = (props) => {
    const {projects, setProjects, searchProject, setSearchProject, selectedTypes,
      setSelectedTypes,education, internships, partTimeWorks,hobbyProjects,fullTimeWorks, selectedEmploymentTypes,
      setSelectedEmploymentTypes, searchProjectsByTitle, 
      selectProjectsByMultipleCriteria, projectsByType, setProjectsByType} = useContext(ProjectsContext);
    const selectTypes = ['Full Stack','Frontend','Backend','AI','DevOps','Data Engineering'];
    // 'Electronics','Mechanical','Content Creation','Data Science','Marketing'];
    const selectEmploymentTypes = ['Internship','Part Time','Full Time','Postgraduate','Practise Projects','Hobby Projects']
    const [currentTypeIndex, setCurrentTypeIndex] = useState();
    const [totalProjectsByType, setTotalProjectsByType] = useState({});
    const [projectsByTypeIndex, setProjectsByTypeIndex] = useState({});

    useEffect(() => {
      const getNumberOfProjects = () => {
        var projectCount = selectTypes.reduce((acc,cur) => {
          acc[cur] = projects.filter((project) => project.Type[0] === cur).length;
          return acc;},{});
        setTotalProjectsByType(projectCount);
        console.log(projectCount)
      }
      getNumberOfProjects();
    },[projects]);


    useEffect(() => {
      const getStartEndOfProjects = () => {
        var projectIndex = selectTypes.reduce((acc,cur) => {
          acc[cur] = {};acc[cur].start = 0;acc[cur].end = 3;
          return acc;},{});
          setProjectsByTypeIndex(projectIndex);
        console.log(projectIndex['AI'])
      }
      getStartEndOfProjects();
    },[projects]);

    // const getCurrentCriteria = () => {
    //   let criteria = {};
    //   criteria.Type = selectedTypes;
    //   criteria.EmploymentType = selectedEmploymentTypes;
    //   return criteria;
    // };

    // const displayedProjects = () => {
    //   let filteredProjects = projects;

    //   // Apply filters based on dropdown selections first
    //   const criteria = getCurrentCriteria();
    //   if (criteria.Type.length > 0 || criteria.EmploymentType.length > 0) {
    //     filteredProjects = selectProjectsByMultipleCriteria(filteredProjects, criteria);
    //   }
    
    //   // Then, apply text search on the already filtered projects
    //   if (searchProject) {
    //     filteredProjects = searchProjectsByTitle(filteredProjects, searchProject);
    //   }
    //   if (props.mainPage){
    //     return filteredProjects.slice(0,visibleProjects);
    //   }
    //   return filteredProjects;
    // };

    // const handleShowMoreProjects = () => {
    //   setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6); // Show 6 more projects
    // };

  return ( 
    <div className='w-full container mx-auto'>
      <section className="py-5 sm:py-10">
        <div className="text-center pb-10">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio
          </p>
        </div>
        <div className='flex flex-col justify-center items-start gap-4  '>
          {selectTypes.map((type,index)=>(
            <div className='flex w-full h-full justify-start items-center gap-5'>
             <div className='text-center w-[10%] h-full font-general-medium 
             text-ternary-dark dark:text-ternary-light '>
              <div className='text-xl sm:text-2xl'>{type}</div>
              <div> {totalProjectsByType[type]} projects</div> 
             </div>
             <div className="flex items-center flex-wrap w-full h-full gap-4 ">
                <button onClick={() => {
                  if (projectsByTypeIndex[type].start === 0) return;
                  let index = projectsByTypeIndex[type];
                  index.start = index.start - 1;
                  index.end = index.end - 1;
                  setProjectsByTypeIndex({...projectsByTypeIndex,[type]:index});
                }}
                className={`font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light ${projectsByTypeIndex[type].start === 0 ? 'opacity-10' : 'opacity-100'}`}>
                  <FiChevronLeft className='' />
                </button>
                  {
                    projects.filter((project) => project.Type[0] === type)
                    .slice(projectsByTypeIndex[type]?projectsByTypeIndex[type].start:0,projectsByTypeIndex[type]?projectsByTypeIndex[type].end:0)
                    .map((project) => ( 
                      <div className='w-[28%]'><ProjectSingle project={project} /> </div>
                    ))
                  }
                <button onClick={() => {
                  if (projectsByTypeIndex[type].end === totalProjectsByType[type]) return;
                  let index = projectsByTypeIndex[type];
                  index.start = index.start + 1;
                  index.end = index.end + 1;
                  setProjectsByTypeIndex({...projectsByTypeIndex,[type]:index});
                }}
                className={`font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light ${projectsByTypeIndex[type].end === totalProjectsByType[type] ? 'opacity-10' : 'opacity-100'}`}>
                  <FiChevronRight />
                </button>
              </div>
            </div> 
          ))}
        </div>
        {/* <div className="w-full flex justify-between border-b border-primary-light dark:border-secondary-dark gap-3 flex-wrap items-center">
          <div className="w-[49%] flex justify-start gap-2tem flex-nowrap">
            <span	className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
              <FiSearch className="text-ternary-dark dark:text-ternary-light "></FiSearch>
            </span>
            <input onChange={(e) => {setSearchProject(e.target.value);}}
            className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark
            rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"	name="name"	type="search"	required=""	placeholder="Search Projects"	aria-label="Name"/>
          </div>
          <div className='w-[50%] gap-2 flex justify-end items-center flex-wrap'>
            <div>
              <select onChange={(e) => {setSelectedEmploymentTypes(e.target.value);}} className="font-general-medium px-4 sm:px-6 py-2 
              border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light
              dark:bg-ternary-dark text-primary-dark dark:text-ternary-light">
                  <option value="" className="text-sm sm:text-md">
                    Select Employment Type
                  </option>
                  {selectEmploymentTypes.map((option) => (
                      <option className="text-normal sm:text-md" key={option} value={option}>
                        {option}
                      </option>
                  ))}
              </select>
            </div>
            <div>
              <select onChange={(e) => {setSelectedTypes(e.target.value);}} className="font-general-medium px-4 sm:px-6 py-2 
              border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light
              dark:bg-ternary-dark text-primary-dark dark:text-ternary-light">
                  <option value="" className="text-sm sm:text-md">
                    Select Project Type
                  </option>
                  {selectTypes.map((option) => (
                      <option className="text-normal sm:text-md" key={option} value={option}>
                        {option}
                      </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {displayedProjects().map((project) => (
            <ProjectSingle project={project} />
          ))}
        </div>
        {props.mainPage && visibleProjects < projects.length && (
            <div className="text-center mt-6">
                <button onClick={handleShowMoreProjects} className="px-6 py-2 rounded-lg bg-primary-light text-ternary-dark dark:bg-ternary-dark dark:text-ternary-light">
                    Show More
                </button>
            </div>
        )} */}
      </section>
    </div>
  )
}
export default Project;