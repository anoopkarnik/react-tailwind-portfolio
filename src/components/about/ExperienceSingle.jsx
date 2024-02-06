import React from 'react'
import { IoMdSchool } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";

const ExperienceSingle = ({item}) => {
    function formatDateToMMMYY(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          month: 'short', // "short" for abbreviated month name (e.g., "Jan").
          year: '2-digit' // "2-digit" for two-digit year.
        });
      }
  return (
    <div className='flex items-center w-full justify-start'>
        <div>
            {item['Education Type'] ? 
            <IoMdSchool className="text-ternary-dark dark:text-ternary-light text-4xl"/> : 
            <FaSuitcase className="text-ternary-dark dark:text-ternary-light text-4xl"/>}
        </div>
        <div className="flex flex-col items-start p-2 w-full">
            <div className="text-blue-500 text-sm">
                {formatDateToMMMYY(item['Start Date'])} -  {formatDateToMMMYY(item['End Date'])}
            </div>
            <div className="text-ternary-dark dark:text-ternary-light text-xl">
                {item['Education Type'] ? item['Education Type'] : item['Position']}
            </div>
            <div className="text-ternary-dark dark:text-ternary-light text-lg">
                {item['Name']}
            </div>
        </div>
    </div>
    
  )
}

export default ExperienceSingle