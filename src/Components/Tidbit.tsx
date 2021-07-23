import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const font = "'Fahkwang', sans-serif";

const userStyles = makeStyles(() => ({
  typography: {
    fontFamily: font,
    fontSize: 64
  }
}));

const Tidbit = () => {
  const classes = userStyles();
  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid item>
        <Typography className={classes.typography}>Hi, I'm Daniel</Typography>
      </Grid>
    </Grid>
  );
};

export default Tidbit;
