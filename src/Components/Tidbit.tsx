import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const font = "'Fahkwang', sans-serif";

const userStyles = makeStyles(() => ({
  typographyTitle: {
    fontFamily: font,
    fontSize: 64
  },
  typographyBody: {
    fontFamily: font,
    fontSize: 30
  }
}));

const Tidbit = () => {
  const classes = userStyles();
  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid item>
        <Typography className={classes.typographyTitle}>Hi, I'm Daniel</Typography>
        <Typography className={classes.typographyBody}>I love creating.</Typography>
      </Grid>
    </Grid>
  );
};

export default Tidbit;
