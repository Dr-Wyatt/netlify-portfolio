import { Grid } from "@material-ui/core";
import React from "react";
import { ProjectCardInterface } from "../Interfaces/projectCard";
import ProjectCard from "./ProjectCard";

const ProjectCardList = ({info}: {info: ProjectCardInterface[]}) => {
  return (
    <Grid
      container
      item
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      {info.map((cardInfo: ProjectCardInterface) => {
        return (
          <Grid
            item
            xs={3}
            style={{ padding: "10px", justifyContent: "center" }}
            key={info.indexOf(cardInfo)}
          >
            <ProjectCard
              title={cardInfo.title}
              appDescription={cardInfo.appDescription}
              appLink={cardInfo.appLink}
              explored={cardInfo.explored}
              iconURL={cardInfo?.iconURL}
              homePage={cardInfo?.homePage}
              appInfo={cardInfo?.appInfo}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectCardList;