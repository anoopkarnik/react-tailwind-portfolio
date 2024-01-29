import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://raw.githubusercontent.com/anoopkarnik/portfolio/master/src/Assets/resume.pdf";

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Particle />
      <div className="flex justify-center">
        <a href={resumeLink} target="_blank" className="btn btn-primary max-w-xs">
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
      </div>

      <div className="flex justify-center my-8">
        <Document file={resumeLink} className="flex justify-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <div className="flex justify-center">
        <a href={resumeLink} target="_blank" className="btn btn-primary max-w-xs">
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
