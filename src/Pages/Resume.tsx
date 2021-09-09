import React from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { PDFReader } from "react-read-pdf";
import { MobilePDFReader } from "react-read-pdf";
import pdfFile from "../Utilities/Daniel-Wyatt-Resume.pdf";
const Resume = () => {
  const theme = useTheme();
  const resumeQuery = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      container
      item
      style={{ justifyContent: "center", marginTop: "80px", height: "100vh" }}
      xs={12}
    >
      {
        resumeQuery ? <PDFReader url={pdfFile} />: 
        <MobilePDFReader url={pdfFile} />
      }
    </Grid>
  );
};

export default Resume;
