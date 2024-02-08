import React,{useContext,useState} from 'react'
import { FiSearch } from 'react-icons/fi';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectSingle from '../components/project/ProjectSingle';

const Project = (props) => {
    const {projects, setProjects, searchProject, setSearchProject, selectedTypes,
      setSelectedTypes,education, internships, partTimeWorks,hobbyProjects,fullTimeWorks, selectedEmploymentTypes,
      setSelectedEmploymentTypes, searchProjectsByTitle, 
      selectProjectsByMultipleCriteria} = useContext(ProjectsContext);
    const selectTypes = ['Data Science','Data Engineering','Full Stack','Frontend','Backend',
    'AI','DevOps','Electronics','Mechanical','Content Creation','Marketing'];
    const selectEmploymentTypes = ['Internship','Part Time','Full Time','Postgraduate','Self Employed']
    const [visibleProjects, setVisibleProjects] = useState(6);

    const getCurrentCriteria = () => {
      let criteria = {};
      criteria.Type = selectedTypes;
      criteria.EmploymentType = selectedEmploymentTypes;
      return criteria;
    };

    const displayedProjects = () => {
      let filteredProjects = projects;

      // Apply filters based on dropdown selections first
      const criteria = getCurrentCriteria();
      if (criteria.Type.length > 0 || criteria.EmploymentType.length > 0) {
        filteredProjects = selectProjectsByMultipleCriteria(filteredProjects, criteria);
      }
    
      // Then, apply text search on the already filtered projects
      if (searchProject) {
        filteredProjects = searchProjectsByTitle(filteredProjects, searchProject);
      }
      if (props.mainPage){
        return filteredProjects.slice(0,visibleProjects);
      }
      return filteredProjects;
    };

    const handleShowMoreProjects = () => {
      setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6); // Show 6 more projects
    };

  return ( 
    <div className='container mx-auto'>
      <section className="py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="text-center">
          <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Projects portfolio
          </p>
        </div>
        <div className="mt-10 sm:mt-16">
          <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 flex-wrap align-content-end">
            <div className="flex justify-between gap-2">
              <span	className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
              </span>
              <input onChange={(e) => {setSearchProject(e.target.value);}}
              className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark
              rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"	name="name"	type="search"	required=""	placeholder="Search Projects"	aria-label="Name"/>
            </div>
            <div>
              <span className="mx-4">
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
              </span>
              <span>
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
              </span>
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
        )}
      </section>
    </div>
  )
}
export default Project;