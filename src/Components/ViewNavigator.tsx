import React from 'react';
import { Route, Switch } from 'react-router-dom';

const ViewNavigator: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' />
    </Switch>
  );
};

export default ViewNavigator;
