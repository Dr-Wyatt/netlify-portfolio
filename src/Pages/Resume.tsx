import React from "react";
import { Grid } from "@material-ui/core";
import pdfFile from "../Utilities/Daniel-Wyatt-Resume.pdf";
const Resume = () => {
  return (
    <Grid
      container
      item
      style={{ justifyContent: "center", marginTop: "80px", height: "100vh" }}
      xs={12}
    >
      <Grid item xs={12}>
        <iframe
          src={`${pdfFile}#view=fitH`}
          style={{width: "80%", height: "90%", border: "none"}}
          title="Daniel Wyatt Resume"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Resume;
