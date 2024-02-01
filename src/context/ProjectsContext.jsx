import React,{useState, useEffect,createContext,useRef} from 'react'
import { getProjects } from '../apis/Projects.';

export const ProjectsContext = createContext()

export const ProjectsProvider = ({children}) => {

    const [projects, setProjects] = useState([]);
    const [searchProject, setSearchProject] = useState('');
	  const [selectProject, setSelectProject] = useState('');
    let seenIds = new Set();


    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://www.backend.bsamaritan.com/notion_stream/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const reader = response.body.getReader();
        let decoder = new TextDecoder();
        let buffer = '';
    
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
    
            buffer += decoder.decode(value, { stream: true });
    
            // Attempt to parse the buffer whenever you encounter a newline, which signifies the end of a JSON object in this streaming setup.
            let boundary = buffer.indexOf('\n');
            while (boundary !== -1) {
              const chunk = buffer.substring(0, boundary).trim();
              buffer = buffer.substring(boundary + 1);
    
              try {
                const json = JSON.parse(chunk);
                if (!seenIds.has(json.id)) {
                  seenIds.add(json.id);
                  setProjects(prevProjects => [...prevProjects, json]);
                }
              } catch (error) {
                console.error('Error parsing JSON chunk:', error);
              }
    
              boundary = buffer.indexOf('\n');
            }
          }
    
          // After loop ends, try to parse any remaining buffered data (useful if the last chunk does not end with a newline).
          if (buffer.trim()) {
            try {
              const json = JSON.parse(buffer);
              setProjects(prevProjects => [...prevProjects, json]);
            } catch (error) {
              console.error('Error parsing JSON from remaining buffer:', error);
            }
          }
        } catch (error) {
          console.error('Error reading stream:', error);
        }
      };
    
      fetchData();
    }, []);
  

    const searchProjectsByTitle = projects.filter((item) => {
		const result = item.Name
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
			? item
			: '';
		return result;
	});

    const selectProjectsByMultipleCriteria = (projects, criteria) => {
        return projects.filter((item) => {
            return Object.keys(criteria).every((key) => {
                return item[key] && item[key].includes(criteria[key]);
            });
        });
    };


    return (
        <ProjectsContext.Provider value={{ projects, setProjects, searchProject, setSearchProject, selectProject, 
        setSelectProject, searchProjectsByTitle, selectProjectsByMultipleCriteria}}>
            {children}
        </ProjectsContext.Provider>
    );



}
