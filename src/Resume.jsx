import React from 'react';
import { Container } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';
// import resume from './assets/Resume Maxwell Boecker (2).pdf';
import resume from './assets/Maxwell Boecker Resume Isometric.pdf';

function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center' }}>
      <Document file={resume} onLoadError={console.error}>
        <Page pageNumber={1} />
      </Document>
    </Container>
  );
}

export default Resume;
