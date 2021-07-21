import { Grid } from "@material-ui/core";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProjectCard from "./Components/ProjectCard";

const App = () => {
  return (
    <div className="App">
      <Grid container>
        <Navbar />
        This is Front Page
        <Grid container item style={{ justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <Grid item xs={3} style={{ padding: "10px" }}>
            <ProjectCard title="Jersey Sponsor"/>
          </Grid>
          <Grid item xs={3} style={{ padding: "10px" }}>
            <ProjectCard title="Pups and Cups"/>
          </Grid>
          <Grid item xs={3} style={{ padding: "10px" }}>
            <ProjectCard title="To be Decided"/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
