import { createContext,useState,useEffect } from "react";
import axios from 'axios';

const url = import.meta.env.VITE_API_GATEWAY_NOTION_STREAM_URL;

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {

    const [languages, setLanguages] = useState([]);
    const [frameworks, setFrameworks] = useState([]);
    const [tools, setTools] = useState([]);

    return (
        <SkillsContext.Provider value={{languages,setLanguages,frameworks,setFrameworks,tools,setTools}}>
            {children}
        </SkillsContext.Provider>
    )
}
