import { createContext,useState,useEffect, useContext } from "react";
import axios from 'axios';
import { PortfolioContext } from "../context/PortfolioContext";

const url = import.meta.env.VITE_API_GATEWAY_NOTION_STREAM_URL;

export const usePortfolio = () =>{
    const {education,internships,partTimeWorks,hobbyProjects,fullTimeWorks,
        setEducation,setFullTimeWorks,setHobbyProjects,setInternships,setPartTimeWorks} = useContext(PortfolioContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.request({
                url : url+'complete_portfolio',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'call_type':'sync'}),
            })
            const data = response.data;
            setEducation(data.education);
            setInternships(data.internships);
            setPartTimeWorks(data.part_time_work);
            setHobbyProjects(data.self_employed);
            setFullTimeWorks(data.works);
  
        };
        fetchData();
      },[])

}