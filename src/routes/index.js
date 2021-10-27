import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";
import Brazil from "../pages/Brazil";
//import Weak1 from "../pages/Weak1";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/About" exact component={About} />
      <Route path="/About" exact component={Brazil} />
      <Route path="/weak-1" exact component={Brazil} />
    </Switch>
  );
}

export default Routes;
