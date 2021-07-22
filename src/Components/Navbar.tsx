import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import { SocialIcon } from "react-social-icons";
import React from "react";

const userStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

type Anchor = "right";

const Navbar: React.FC = () => {
  const classes = userStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Resume"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeRoundedIcon style={{ height: 30, width: 30 }} />
              ) : (
                <DescriptionRoundedIcon style={{ height: 30, width: 30 }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["LinkedIn", "Github"].map((text, index) => (
          <ListItem
            button
            key={text}
            component="a"
            href={
              index === 0
                ? "https://www.linkedin.com/in/dryuichiwyatt/"
                : "https://github.com/Dr-Wyatt"
            }
            target="_blank"
          >
            <ListItemIcon>
              {index === 0 ? (
                <SocialIcon
                  url="https://www.linkedin.com/in/dryuichiwyatt/"
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                />
              ) : (
                <SocialIcon
                  url="https://github.com/Dr-Wyatt"
                  style={{ height: 30, width: 30 }}
                  target="_blank"
                />
              )}
            </ListItemIcon>
            <ListItemText primary={text}>
              <a href="https://www.linkedin.com/in/dryuichiwyatt/"></a>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container xs={12} justify="flex-end">
          <React.Fragment key="right">
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer("right", true)}
            >
              <MenuIcon />
            </IconButton>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </React.Fragment>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
