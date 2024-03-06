import { createContext,useState,useEffect,useContext } from "react";
import axios from 'axios';
import { SkillsContext } from "../context/SkillsContext";

const url = import.meta.env.VITE_API_GATEWAY_NOTION_STREAM_URL;

export const useSkills = () => {

    const {languages,setLanguages,frameworks,setFrameworks,tools,setTools} = useContext(SkillsContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.request({
                url : url+'skills',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'call_type':'sync'}),
            })
            const data = response.data;
            setLanguages(data.languages);
            setFrameworks(data.frameworks);
            setTools(data.tools);
        };
        fetchData();
      },[]);
}
