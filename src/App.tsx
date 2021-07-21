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
        <Grid container item style={{ justifyContent: "center" }}>
          <Grid item xs={4} style={{ padding: "10px" }}>
            <ProjectCard title="blue" backgroundColor="blue" />
          </Grid>
          <Grid item xs={4} style={{ padding: "10px" }}>
            <ProjectCard title="red" backgroundColor="red" />
          </Grid>
          <Grid item xs={4} style={{ padding: "10px" }}>
            <ProjectCard title="green" backgroundColor="green" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
