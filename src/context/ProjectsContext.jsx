import React,{useState, useEffect,createContext,useRef} from 'react'

export const ProjectsContext = createContext()

export const ProjectsProvider = ({children}) => {

    const [projects, setProjects] = useState([]);
    const [projectsByType, setProjectsByType] = useState({});
    const [selectedTypes,setSelectedTypes] = useState('');
    const [selectedEmploymentTypes,setSelectedEmploymentTypes] = useState('');
    const [typeDetails, setTypeDetails] = useState({});
    const [projectsLoading,setProjectsLoading] = useState(true);

    return (
        <ProjectsContext.Provider value={{ projects, setProjects, selectedTypes,
          setSelectedTypes, selectedEmploymentTypes,setSelectedEmploymentTypes,
           projectsByType, setProjectsByType, typeDetails, setTypeDetails,projectsLoading,setProjectsLoading}}>
            {children}
        </ProjectsContext.Provider>
    );



}
