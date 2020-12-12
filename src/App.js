import React from 'react';
import Navigation from './navigation';
import { Router } from 'react-router-dom';
import history from './services/history';
import './App.css';

const App = () => (
    <Router history={history}>
      <Navigation />
    </Router>
  );

export default App;
