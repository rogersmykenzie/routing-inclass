import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';
import routes from './routes';

function App() {
  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
