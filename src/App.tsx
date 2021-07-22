import { Grid } from "@material-ui/core";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProjectCardList from "./Components/ProjectCardList";
import Tidbit from "./Components/Tidbit";
import CardInfo from "./Utilities/card-info";

const App = () => {
  const Info = CardInfo;
  return (
    <div className="App">
      <Grid container>
        <Navbar />
        <Tidbit/>
        <ProjectCardList info={Info} />
      </Grid>
    </div>
  );
};

export default App;
