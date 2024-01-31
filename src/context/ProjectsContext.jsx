import React,{useState, useEffect,createContext} from 'react'
import { getProjects } from '../apis/Projects.';

export const ProjectsContext = createContext()

export const ProjectsProvider = ({children}) => {

    const [projects, setProjects] = useState([]);
    const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://www.backend.bsamaritan.com/notion/projects');
          const reader = response.body.getReader();
          let decoder = new TextDecoder();
    
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
    
            const chunk = decoder.decode(value, { stream: true });
            try {
              const json = JSON.parse(chunk);
              setProjects(prevProjects => [...prevProjects, json]);
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          }
        };
    
        fetchData();
      }, []);

    const searchProjectsByTitle = projects.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});


    return (
        <ProjectsContext.Provider value={{ projects, setProjects, searchProject, setSearchProject,searchProjectsByTitle}}>
            {children}
        </ProjectsContext.Provider>
    );



}
