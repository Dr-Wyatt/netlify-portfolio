import { Grid } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProjectCardList from "./Components/ProjectCardList";
import Tidbit from "./Components/Tidbit";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import CardInfo from "./Utilities/card-info";

const App = () => {
  const Info = CardInfo;
  return (
    <div className="App">
      <Grid container>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home info={Info} />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/resume" exact>
              <Resume />
            </Route>
          </Switch>
        </BrowserRouter>
      </Grid>
    </div>
  );
};

export default App;
