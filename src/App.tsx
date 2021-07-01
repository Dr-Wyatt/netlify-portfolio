import { Grid } from "@material-ui/core";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import { dummyText } from "./Utilities/dummyText";

const App = () => {
  return (
    <div className="App">
      <Grid container>
        <Navbar />
        This is Front Page
        <Grid container item style={{ justifyContent: "center" }}>
          <Grid item xs={7}>
            <Section
              title="Section 1"
              subtitle={dummyText}
              dark={false}
              id="one"
            />
          </Grid>
          <Grid item xs={7}>
            <Section
              title="Section 2"
              subtitle={dummyText}
              dark={false}
              id="two"
            />
          </Grid>
          <Grid item xs={7}>
            <Section
              title="Section 3"
              subtitle={dummyText}
              dark={false}
              id="three"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
