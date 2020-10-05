import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { Document, Page, pdfjs} from "react-pdf"
import resume from './assets/resume.pdf'

function Resume(){
  console.log(resume);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return(
    <Container maxWidth="sm" style={{textAlign: 'center'}}>
      <Document file={resume} onLoadError={console.error}>
        <Page pageNumber={1} />
      </Document>
    </Container>
  )
  
}

export default Resume;