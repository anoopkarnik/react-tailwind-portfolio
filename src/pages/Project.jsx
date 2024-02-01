import React,{useContext} from 'react'
import { FiSearch } from 'react-icons/fi';
import { ProjectsContext } from '../context/ProjectsContext';
import ProjectSingle from '../components/project/ProjectSingle';

const Project = () => {
    const {projects, setProjects, searchProject, setSearchProject, selectProject, 
    setSelectProject, searchProjectsByTitle, selectProjectsByMultipleCriteria} = useContext(ProjectsContext);
    const selectTypes = ['Software','Office','Fledgling Software','Office'];
    const selectEmploymentTypes = ['Internship','Part Time','Full Time','Postgraduate','Self Employed']

    const getCurrentCriteria = () => {
      let criteria = {};
      if (selectProject) criteria.Type = selectProject;
      // Add more criteria as needed
      return criteria;
    };

    const displayedProjects = () => {
      const criteria = getCurrentCriteria();
      if (Object.keys(criteria).length > 0) {
        return selectProjectsByMultipleCriteria(projects, criteria);
      } else if (searchProject) {
        return searchProjectsByTitle(projects, searchProject);
      }
      return projects;
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
          <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
            <div className="flex justify-between gap-2">
              <span	className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
              </span>
              <input onChange={(e) => {setSearchProject(e.target.value);}}
              className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark
              rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"	name="name"	type="search"	required=""	placeholder="Search Projects"	aria-label="Name"/>
            </div>
            <select onChange={(e) => {setSelectProject(e.target.value);}} className="font-general-medium px-4 sm:px-6 py-2 
            border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light
            dark:bg-ternary-dark text-primary-dark dark:text-ternary-light">
                <option value={setSelectProject} className="text-sm sm:text-md">
                  All Projects
                </option>
                {selectEmploymentTypes.map((option) => (
                    <option className="text-normal sm:text-md" key={option}>
                      {option}
                    </option>
                ))}
            </select>
            <select onChange={(e) => {setSelectProject(e.target.value);}} className="font-general-medium px-4 sm:px-6 py-2 
            border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light
            dark:bg-ternary-dark text-primary-dark dark:text-ternary-light">
                <option value={setSelectProject} className="text-sm sm:text-md">
                  All Projects
                </option>
                {selectTypes.map((option) => (
                    <option className="text-normal sm:text-md" key={option}>
                      {option}
                    </option>
                ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {displayedProjects().map((project) => (
            <ProjectSingle project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
export default Project;