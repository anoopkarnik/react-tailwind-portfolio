import React, {useState, useEffect,createContext,useRef} from 'react';

export const PortfolioProvider = createContext();

export const PortfolioContext = ({children}) => {

    const [education, setEducation] = useState([]);
    const [internships, setInternships] = useState([]);
    const [partTimeWorks , setPartTimeWorks] = useState([]);
    const [hobbyProjects, setHobbyProjects] = useState([]);
    const [fullTimeWorks, setFullTimeWorks] = useState([]);
    const apiGatewayUrl = import.meta.env.VITE_API_GATEWAY_URL;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiGatewayUrl+'notion_stream/complete_portfolio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setEducation(data.education);
            setInternships(data.internships);
            setPartTimeWorks(data.part_time_work);
            setHobbyProjects(data.self_employed);
            setFullTimeWorks(data.works);

        }
    })



}