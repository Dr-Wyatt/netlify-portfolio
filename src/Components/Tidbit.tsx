import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Tidbit = () => {
  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid item>
        <Typography>Short Tid Bit About Me Goes Here</Typography>
      </Grid>
    </Grid>
  );
};

export default Tidbit;
