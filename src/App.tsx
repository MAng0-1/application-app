import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ViewNavigator from './Components/ViewNavigator';

function App() {
  return (
    <Router basename='/application-app'>
      <ViewNavigator></ViewNavigator>
    </Router>
  );
}

export default App;
