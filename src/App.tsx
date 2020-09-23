import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewNavigator from './Components/ViewNavigator';

function App() {
  return (
    <Router basename='/'>
      <ViewNavigator></ViewNavigator>
    </Router>
  );
}

export default App;
