import React from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
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
      {resumeQuery ? (
        <iframe
          src={`${pdfFile}#view=fitH`}
          style={{ width: "80%", height: "90%", border: "none" }}
          title="Daniel Wyatt Resume"
        ></iframe>
      ) : (
        <MobilePDFReader url={pdfFile} />
      )}
    </Grid>
  );
};

export default Resume;
