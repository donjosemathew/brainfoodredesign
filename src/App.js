import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/about";
import Home from "./Pages/home";
import HowToUse from "./Pages/howto";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/howto" component={HowToUse} />{" "}
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
