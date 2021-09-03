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
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import "../Styling/project-card.css";
import { ProjectCardInterface } from "../Interfaces/projectCard";
import AppInfoText from "./AppInfoText";
import JerseySponsoLogo from "../Assets/JerseySponsorLogo";
import PetsIcon from "@material-ui/icons/Pets";
import LikelyLogo from "../Assets/LikelyLogo";

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
    marginBottom: 0,
  },
  infoText: {
    fontFamily: font,
    fontSize: 16,
    color: "white",
    verticalAlign: "middle",
    textAlign: "left",
  },
  links: {
    fontFamily: font,
    fontSize: 16,
    color: "white",
    textDecoration: "none",
    height: "100%",
    margin: 0,
  },
}));

const ProjectCard: React.FC<ProjectCardInterface> = (cardInfo) => {
  const classes = userStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
  
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
            direction="row"
            style={{ marginTop: "100px" }}
          >
            <Grid
              container
              item
              xs={12}
              sm={5}
              style={{ paddingRight: (matches ? "0px" : "15px"), height: "25%" }}
            >
              <Grid container item xs={12} justify={matches ? "center" : "flex-end"}>
                <Grid container item xs={2} justify="center" alignItems="center" style={{marginRight: "10px"}}>
                  {cardInfo.iconURL === "JerseySponsor" ? (
                    <JerseySponsoLogo />
                  ) : null || cardInfo.iconURL === "PawPrint" ? (
                    <PetsIcon style={{ fontSize: 40 }} />
                  ) : null || cardInfo.iconURL === "Likely" ? (
                    <LikelyLogo />
                  ) : null}
                </Grid>
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
              <Grid
                container
                item
                direction="column"
                xs={12}
                alignItems={matches ? "center" : "flex-end"}
              >
                {cardInfo.homePage ? (
                  <Grid container item xs={6} justify={matches ? "center" : "flex-end"}>
                    <a
                      href={cardInfo.homePage}
                      target="_blank"
                      rel="noreferrer"
                      className={classes.links}
                    >
                      Homepage
                    </a>
                  </Grid>
                ) : null}

                <Grid container item xs={6} justify={matches ? "center" : "flex-end"}>
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
              xs={12}
              sm={6}
              alignItems="center"
              justify={matches ? "center" : "flex-end"}
            >
              <Grid
                item
                xs={12}
                sm={8}
                style={{ paddingLeft: (matches ? "0px" : "20px"), padding: (matches ? "0px 5px" : "0px"), marginTop: (matches ? "0px" : "4.8em") }}
              >
                <Typography
                  className={classes.infoText}
                  style={{ paddingLeft: (matches ? "0px" : "20px"), padding: (matches ? "0px 5px" : "0px") }}
                >
                  <p>{cardInfo.appDescription}</p>
                </Typography>
                {cardInfo.appInfo?.includes("\n") ? (
                  <AppInfoText appInfo={cardInfo.appInfo} />
                ) : (
                  <Typography
                    className={classes.infoText}
                    style={{ paddingLeft: (matches ? "0px" : "20px"), padding: (matches ? "0px 5px" : "0px") }}
                  >
                    <p>{cardInfo.appInfo}</p>
                  </Typography>
                )}

                <List dense={true}>
                  {cardInfo.explored.map((text) => {
                    return (
                      <ListItem style={{ justifyContent: "flex-end" }}>
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
