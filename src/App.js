import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import Auth from "./routes/Auth";
import NotFound from "./routes/NotFound";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/auth/:kind" exact={true} component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
