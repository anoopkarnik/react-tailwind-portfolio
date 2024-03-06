import { createContext,useState,useEffect } from "react";
import axios from 'axios';

const url = import.meta.env.VITE_API_GATEWAY_NOTION_STREAM_URL;

export const PortfolioContext = createContext();

export const PortfolioProvider = ({children}) =>{
    const [education, setEducation] = useState([]);
    const [internships, setInternships] = useState([]);
    const [partTimeWorks , setPartTimeWorks] = useState([]);
    const [hobbyProjects, setHobbyProjects] = useState([]);
    const [fullTimeWorks, setFullTimeWorks] = useState([]);

    return (
        <PortfolioContext.Provider value={{education,internships,partTimeWorks,hobbyProjects,fullTimeWorks,
        setEducation,setFullTimeWorks,setHobbyProjects,setInternships,setPartTimeWorks}}>
            {children}
        </PortfolioContext.Provider>
    )
}