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
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SocialIcon } from "react-social-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const font = "'Poppins', sans-serif";

const userStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    color: "#383838",
  },
  appBar: {
    background: "white",
    color: "gray",
  },
  list: {
    width: 250,
    height: "100vh",
    background: "#383838",
  },
  fullList: {
    width: "auto",
  },
  typography: {
    fontFamily: font,
    fontSize: 25,
    color: "white",
  },
  listItem: {
    padding: 8,
    width: 50,
  },
  listItemIcon: {
    minWidth: 50,
  },
}));

type Anchor = "right";

const Navbar: React.FC = () => {
  const classes = userStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));

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
        {["Home", "About", "Resume"].map((text, index) => (
          <NavLink
            to={index === 0 ? "/" : `/${text.toLowerCase()}`}
            exact
            style={{
              textDecoration: "none",
            }}
          >
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.typography }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List style={{ display: "flex", flexDirection: "row" }}>
        {["LinkedIn", "Github"].map((text, index) => (
          <ListItem
            key={text}
            component="a"
            href={
              index === 0
                ? "https://www.linkedin.com/in/dryuichiwyatt/"
                : "https://github.com/Dr-Wyatt"
            }
            target="_blank"
            classes={{ root: classes.listItem }}
            disableGutters={true}
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              {index === 0 ? (
                <SocialIcon
                  url="https://www.linkedin.com/in/dryuichiwyatt/"
                  style={{ height: 40, width: 40 }}
                  target="_blank"
                />
              ) : (
                <SocialIcon
                  url="https://github.com/Dr-Wyatt"
                  style={{ height: 40, width: 40 }}
                  target="_blank"
                />
              )}
            </ListItemIcon>
            {/* <ListItemText primary={text} classes={{primary:classes.typography}}/> */}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters={matches ? true : false}>
        <Grid container xs={12} justify="flex-end">
          <React.Fragment key="right">
            <IconButton
              edge="end"
              className={classes.menuButton}
              aria-label="menu"
              onClick={toggleDrawer("right", true)}
            >
              <MenuIcon />
            </IconButton>
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
