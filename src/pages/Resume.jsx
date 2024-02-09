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
        <div className="flex flex-col container mx-auto p-4">
            <div className="flex items-center justify-center">            
                <Worker workerUrl= {workerSrc}>
                    <Viewer fileUrl={resumeLink} plugins={[zoomPluginInstance]} />
                </Worker>
            </div>
        </div>
  );
};

export default Resume;
