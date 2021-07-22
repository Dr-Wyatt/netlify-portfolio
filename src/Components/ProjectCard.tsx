import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@material-ui/core";
import "../Styling/project-card.css";
import { ProjectCardInterface } from "../Interfaces/projectCard";

const ProjectCard:React.FC<ProjectCardInterface> = (cardInfo) => {
  const [open, setOpen] = useState(false);
  console.log("this is cardInfo in project card: ", cardInfo);
  return (
    <AnimateSharedLayout>
      {open ? (
        /* EXPANDED CARD */
        <motion.div
          onClick={() => setOpen(false)}
          className="expanded-card"
          layoutId="expandable-card"
          layout
          transition={{
            layoutX: { delay: 0.1, duration: 0.2 },
            layoutY: { duration: 0.2 },
          }}
        >
          <motion.h2
            className="expanded-card-h"
            layoutId="expandable-card-h"
            layout
            transition={{
              layoutX: { duration: 0.2 },
              layoutY: { duration: 0.2 },
            }}
          >
            {cardInfo.title}
          </motion.h2>
          <p>
            {cardInfo.appDescription}
          </p>
        </motion.div>
      ) : (
        /* NORMAL CARD */
        // <Paper elevation={3}>
        <Card style={{width: "80%", height: "80%", margin: "auto"}}>
          <motion.div
            onClick={() => setOpen(true)}
            className="normal-card"
            layoutId="expandable-card"
            layout
            transition={{
              layoutX: { duration: 0.3 },
              layoutY: { delay: 0.2, duration: 0.3 },
            }}
          >
            <motion.h1
              layout
              layoutId="expandable-card-h"
              transition={{
                layoutX: { duration: 0.2 },
                layoutY: { duration: 0.2 },
              }}
            >
              {cardInfo.title}
            </motion.h1>
          </motion.div>
        </Card>
        // </Paper>
      )}
    </AnimateSharedLayout>
  );
};

export default ProjectCard;
