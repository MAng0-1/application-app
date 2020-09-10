import React from "react";
import { Switch, Route } from "react-router-dom";

const ViewNavigator: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" />
    </Switch>
  );
};

export default ViewNavigator;
