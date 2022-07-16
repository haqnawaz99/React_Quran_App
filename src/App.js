import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import SurahDetail from "./Pages/SurahDetail";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/surah-detail">
          <SurahDetail />
        </Route>
      </Switch>
    </Router>
  );

  //
}

export default App;
