import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';

// Make sure to install: npm install react-pdf
// And set workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/**
 * Inline PDF resume viewer.
 */
export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages: nextNum }) => {
    setNumPages(nextNum);
  };

  return (
    <Container id="resume" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>

      {/* PDF viewer */}
      <Box sx={{ 
        border: 1, 
        borderColor: 'divider', 
        borderRadius: 1, 
        overflow: 'auto', 
        maxHeight: '80vh',
        mb: 2 
      }}>
        <Document
          file="./cfresume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page 
              key={`page_${i + 1}`} 
              pageNumber={i + 1} 
              width={600} 
            />
          ))}
        </Document>
      </Box>

      <Typography variant="body2" color="textSecondary">
        Scroll to view all pages, or{' '}
        <Box
          component="a"
          href="./cfresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'underline' }}
        >
          download PDF
        </Box>.
      </Typography>
    </Container>
  );
}
