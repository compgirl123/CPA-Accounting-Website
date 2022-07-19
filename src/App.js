import React from 'react';
import './App.css';
import HomePage from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Main application route where all the pages are contained
class App extends React.Component {
  render() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} /> 
        </Switch>
      </Router>
    </>
  );
  }
}

export default App;
