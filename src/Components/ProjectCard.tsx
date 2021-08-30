import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import "../Styling/project-card.css";
import { ProjectCardInterface } from "../Interfaces/projectCard";

const font = "'Poppins', sans-serif";

const userStyles = makeStyles(() => ({
  normalCardTitle: {
    fontFamily: font,
    fontSize: 25,
  },
  expandedCardTitle: {
    fontFamily: font,
    fontSize: 35,
    color: "white",
    margin: "auto",
  },
  infoText: {
    fontFamily: font,
    fontSize: 16,
    color: "white",
    verticalAlign: "middle",
  },
  links: {
    fontFamily: font,
    fontSize: 16,
    color: "white",
    textDecoration: "none",
  },
}));


const ProjectCard: React.FC<ProjectCardInterface> = (cardInfo) => {
  const classes = userStyles();
  const [open, setOpen] = useState(false);
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
          <Grid
            container
            xs={12}
            justify="center"
            style={{ marginTop: "100px" }}
          >
            <Grid container item xs={6} style={{ paddingRight: "10px" }}>
              <Grid container item xs={12} justify="flex-end">
                <motion.h2
                  className="expanded-card-h"
                  layoutId="expandable-card-h"
                  layout
                  transition={{
                    layoutX: { duration: 0.2 },
                    layoutY: { duration: 0.2 },
                  }}
                >
                  <Typography className={classes.expandedCardTitle}>
                    {cardInfo.title}
                  </Typography>
                </motion.h2>
              </Grid>
              <Grid container item direction="column" xs={12}>
                <Grid container item xs={12} justify="flex-end">
                  <a
                    href={cardInfo.homePage}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.links}
                  >
                    Homepage
                  </a>
                </Grid>
                <Grid container item xs={12} justify="flex-end">
                  <a
                    href={cardInfo.appLink}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.links}
                  >
                    Staging Ground
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={6}
              alignItems="center"
              justify="flex-start"
            >
              <Grid item xs={8}>
                <Typography className={classes.infoText}>
                  <p>{cardInfo.appDescription}</p>
                </Typography>
                <List dense={true}>
                  {cardInfo.explored.map((text) => {
                    return (
                      <ListItem>
                        <ListItemIcon style={{ justifyContent: "flex-end" }}>
                          <ArrowForwardIosRoundedIcon
                            style={{ color: "white", paddingRight: "5px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          disableTypography
                          className={classes.infoText}
                          primary={text}
                        />
                      </ListItem>
                    );
                  })}
                </List>
                ;
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      ) : (
        /* NORMAL CARD */
        // <Paper elevation={3}>
        <Card style={{ width: "80%", height: "80%", margin: "auto" }}>
          <motion.div
            onClick={() => setOpen(true)}
            className="normal-card"
            layoutId="expandable-card"
            layout
            transition={{
              layoutX: { duration: 0.2 },
              layoutY: { duration: 0.2 },
            }}
          >
            <motion.h1
              layout
              className="normal-card"
              layoutId="expandable-card-h"
              transition={{
                layoutX: { duration: 0.2 },
                layoutY: { duration: 0.2 },
              }}
            >
              <Typography className={classes.normalCardTitle}>
                {cardInfo.title}
              </Typography>
            </motion.h1>
          </motion.div>
        </Card>
        // </Paper>
      )}
    </AnimateSharedLayout>
  );
};

export default ProjectCard;
