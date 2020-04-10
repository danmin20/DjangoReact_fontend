import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Auth from "./routes/Auth";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/:kind" component={Auth} />
        <Route component={NotFound}/>
      </Switch></HashRouter>
    </>
  );
}

export default App;
