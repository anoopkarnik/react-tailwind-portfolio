import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FiArrowDownCircle } from 'react-icons/fi';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

const Resume = () => {
    const resumeLink =  "https://raw.githubusercontent.com/anoopkarnik/react-tailwind-portfolio/main/src/assets/files/resume.pdf";
    const [numPages, setNumPages] = useState(null);
    const workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;
    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;



    // Function to capture the total number of pages in the document
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="container mx-auto p-4">
            <div className="flex my-5 justify-center items-center sm:block">
                <a
                    download="AnoopKarnik.pdf"
                    href={resumeLink}
                    className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume"
                >
                <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                <span className="text-sm sm:text-lg font-general-medium duration-100">
                    Download CV
                </span>
                </a>
            </div>

            <div className="flex items-center justify-center">
                
                <Worker workerUrl= {workerSrc}>
                    <Viewer fileUrl={resumeLink} plugins={[zoomPluginInstance]} />
                </Worker>
            </div>
            <div className="flex flex-col justify-center sm:block">
                <a
                    download="AnoopKarnik.pdf"
                    href={resumeLink}
                    className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume"
                >
                    <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                    <span className="text-sm sm:text-lg font-general-medium duration-100">
                        Download CV
                    </span>
                </a>
            </div>
        </div>
  );
};

export default Resume;
