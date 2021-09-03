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
    fontSize: 20,
    // textAlign: "left",
  },
  typographyBodyXSmall: {
    fontFamily: font,
    fontSize: 18,
    textAlign: "left", 
    padding: "10px",
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
  const matches = useMediaQuery(theme.breakpoints.up("xs"));
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
          <Typography className={matches ? classes.typographyBodyXSmall : classes.typographyBody} paragraph={true} >
            Full Stack Web Developer and graduate of Northwestern University
            MERN Full Stack Bootcamp. Through both my work and school experience
            I have strengthened my skills in communicating with clients to meet
            their needs, as well as creatively worked to solve problems both in
            and out of the coding world. I have experience in the major coding
            languages including Javascript, NodeJS, ExpressJS, and ReactJS,
            which I have used in several projects such as authenticated login
            and backend data manipulation in Sahara and Likely, and aim to
            improve upon to build meaningful applications for practical use in
            the workplace.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
