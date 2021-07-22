import { Grid } from "@material-ui/core";
import React from "react";
import ProjectCardList from "../Components/ProjectCardList";
import Tidbit from "../Components/Tidbit";
import { ProjectCardInterface } from "../Interfaces/projectCard";

const Home = ({ info }: { info: ProjectCardInterface[] }) => {
  return (
    <Grid container item style={{justifyContent: "center", marginTop: "100px"}}>
      <Tidbit />
      <ProjectCardList info={info} />
    </Grid>
  );
};

export default Home;
