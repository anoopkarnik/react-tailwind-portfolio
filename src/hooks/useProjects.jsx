import { useContext,useEffect } from "react"
import axios from 'axios'

import { ProjectsContext } from "../context/ProjectsContext"
import { convertResponseToArray } from "../utils/response"

const url = import.meta.env.VITE_API_GATEWAY_NOTION_STREAM_URL

export const useProjects = () => {
    const { projects, setProjects, selectedTypes,setSelectedTypes, selectedEmploymentTypes,setSelectedEmploymentTypes,
         projectsByType, setProjectsByType, typeDetails, setTypeDetails,projectsLoading,setProjectsLoading} = useContext(ProjectsContext)

    let seenIds = new Set();
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.request({
            url: url+'projects',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        let result = response.data;
        result =  convertResponseToArray(result);
        setProjects(result);
        setProjectsByType(projects.reduce((acc,cur) => {(acc[cur.Type] = acc[cur.Type] || []).push(cur); return acc;},{}))
        setTypeDetails(projects.reduce((acc, project) => {
            // Initialize the type if it doesn't exist
            if (!acc[project.Type]) {
                acc[project.Type] = {
                languages: new Set(),
                frameworks: new Set(),
                tools: new Set(),
                };
            }
            // Add the current project's details to the sets
            acc[project.Type].languages.add(project.LanguagesUsed);
            acc[project.Type].frameworks.add(project.FrameworksUsed);
            acc[project.Type].tools.add(project.ToolsUsed);
            
            return acc;
        }, {}));}
        setProjectsLoading(false);
      fetchData();
    }, []);


    // const searchProjectsByTitle = (projects,searchTerm) => {
    //   return projects.filter((item) => {
    //     // Assuming 'Name' is the property you want to search against and it exists on all project objects
    //     return item.Name.toLowerCase().includes(searchTerm.toLowerCase());
    //   });
    // };

    // const selectProjectsByMultipleCriteria = (projects, criteria) => {
    //     return projects.filter((project) => {
    //         const typeMatch = criteria.Type!="" ? project.Type[0] === criteria.Type : true;
    //         const employmentTypeMatch = criteria.EmploymentType!="" ? project.EmploymentType[0] === criteria.EmploymentType : true;
    //         return typeMatch && employmentTypeMatch;
    //     });
    // };


}