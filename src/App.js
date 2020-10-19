import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Redirect to = '/' />
      </Switch>
    </BrowserRouter>   
  );
}

export default App;
