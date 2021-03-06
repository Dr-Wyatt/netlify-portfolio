import { useMediaQuery, useTheme } from "@material-ui/core";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Headshot from "../Utilities/Daniel_Headshot.jpg";

const font = "'Fahkwang', sans-serif";

const userStyles = makeStyles(() => ({
  typographyTitle: {
    fontFamily: font,
    fontSize: 64,
  },
  typographyBody: {
    fontFamily: font,
    fontSize: 22,
    textAlign: "left",
  },
  typographyBodyXSmall: {
    fontFamily: font,
    fontSize: 18,
    textAlign: "left", 
    padding: "15px",
  },
  typographyName: {
    fontFamily: font,
    fontSize: 35,
  },
  mediaBig: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  mediaSmall: {
    width: 200,
    heigh: 200,
    borderRadius: 150,
  },
}));

const About = () => {
  const classes = userStyles();
  const theme = useTheme();
  const imageQuery = useMediaQuery(theme.breakpoints.up("lg"));
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid
      container
      item
      style={{ justifyContent: "center", marginTop: "100px" }}
      spacing={1}
    >
      <Typography className={classes.typographyTitle}>About Me</Typography>
      <Grid container item xs={12} justify="center">
        <Grid item xs={12} md={3}>
          <Typography className={classes.typographyName}>Daniel Wyatt</Typography>
          <img
            src={Headshot}
            className={imageQuery ? classes.mediaBig : classes.mediaSmall}
            alt="Headshot"
          ></img>
        </Grid>
        <Grid container item xs={12} md={7} alignItems="center">
          <Typography className={matches ?  classes.typographyBody : classes.typographyBodyXSmall} paragraph={true} >
            I'm Daniel, a Full Stack Developer. 

            I am motivated by tough challenges and I love to solve complex problems. 
            I'm a goal oriented web developer. That means when I'm given a project, I want to fully understand the desired end result, and then go above and beyond those basic requests. 
            I love helping people achieve their goals and working together to create something even better than what they imagined.
            I offer a fresh perspective with my unorthodox path to coding, that allows me to think outside the box. 

            I enjoy working within the MERN stack, especially with Typescript, and also have commercial experience with C#, Specflow, and Selenium. 

            Outside of work, I love playing video games, streaming shows with my wife, and playing with my Corgi, Benny.

          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
