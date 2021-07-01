import { AppBar, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
    
  const ref = React.createRef<Link>();
  return (
    <AppBar position="static">
      <Tabs aria-label="simple tabs example" value={0}>
        <Tab
          component={Link}
          activeClass="active"
          to="one"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          label="Section One"
          ref={ref}
        />
        <Tab
          component={Link}
          activeClass="active"
          to="two"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          label="Section Two"
          ref={ref}
        />
        <Tab
          component={Link}
          activeClass="active"
          to="three"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          label="Section Three"
          ref={ref}
        />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
