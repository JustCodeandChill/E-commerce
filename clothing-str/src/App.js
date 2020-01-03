import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div >
      <Switch>
      <Route  path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
