import {
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";

const font = "'Poppins', sans-serif";

const userStyles = makeStyles(() => ({
  typographyTitle: {
    fontFamily: font,
    fontSize: 64,
  },
  typographyBody: {
    fontFamily: font,
    fontSize: 30,
  },
  infoText: {
    fontFamily: font,
    fontSize: 16,
    color: "white",
    verticalAlign: "middle",
    textAlign: "left",
  },
}));

const AppInfoText = (props: { appInfo: string }) => {
  const classes = userStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Typography
      className={classes.infoText}
      style={{
        paddingLeft: matches ? "0px" : "20px",
        padding: matches ? "5px" : "0px 10px",
      }}
    >
      {props.appInfo.split("\n").map((text) => {
        return <p>{text}</p>;
      })}
    </Typography>
  );
};

export default AppInfoText;
