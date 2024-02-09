import React from 'react';
import { motion } from 'framer-motion';

// const ProjectDescription = ({ project, onClose }) => {
//   return (
    
//     // This container holds both the overlay and the description panel
//     <div className="fixed inset-0 z-50 flex justify-end items-start">
//       {/* Overlay: Clicking on this will close the description */}
//       <div  onClick={onClose}></div>
      
//       {/* Description Panel: This is separate from the overlay to maintain full opacity */}
//       <div className="w-2/5 max-w-2/5 bg-secondary-light dark:bg-ternary-dark shadow-lg overflow-auto"
//            style={{ height: '100vh' }}> {/* Adjust height as needed */}
//         <div className="p-4 bg-black">
//           <button onClick={onClose} className="text-lg font-bold text-ternary-dark dark:text-ternary-light">[-{'>'}]</button>
//           <h2 className="text-2xl font-bold text-ternary-dark dark:text-ternary-light mb-4">{project.Name}</h2>
//           {/* Other project details */}
//           <p className="text-ternary-dark dark:text-ternary-light">{project.WorkDone}</p>
//           {/* You can expand this section with more project details as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDescription;

const ProjectDescription = ({ project, onClose }) => {
  const excludeKeys = ['ID', '📖 Blog', 'Images', 'Blocking', 'Sub-project', 'PlaceOfWork/Education', 'Blocked by',
'Tools','Frameworks','Languages'];

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start">
      <div className="w-full h-full bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="w-4/5 max-w-4/5 bg-secondary-light dark:bg-ternary-dark shadow-lg overflow-auto"
           style={{ height: '100vh' }}>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-ternary-dark dark:text-ternary-light mb-4">{project.Name}</h2>
          <div className="flex flex-col gap-4">
            {Object.entries(project)
            .filter(([key]) => !excludeKeys.includes(key))
            .filter(([key, value]) => value !== '' && value !== null && value !== undefined)
            .map(([key, value], index) => (
              <div key={index} className="flex flex-row justify-between">
                <div className="text-ternary-dark dark:text-ternary-light font-bold mr-5">{key}:</div>
                <div className="text-ternary-dark dark:text-ternary-light ">{Array.isArray(value) ? value.join(', ') : value}</div>
              </div>
            ))}
            {project.Images.length > 0 && project.Images.map((image, index) => (
              <img key={index} src={image} alt={`Project ${index}`} className="w-full object-cover" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;

