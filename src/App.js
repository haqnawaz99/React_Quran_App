import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import AppRoute from "./routes/route";
import { publicRoutes } from "./routes/";
import NonAuthLayout from "./components/NonAuthLayout";

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, idx) => (
          <AppRoute
            path={route.path}
            layout={NonAuthLayout}
            component={route.component}
            key={idx}
            isAuthProtected={false}
          />
        ))}
      </Switch>
    </Router>
  );

  //
}

export default App;
