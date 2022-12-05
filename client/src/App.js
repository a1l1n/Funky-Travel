import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { Country } from './Pages/Country/Country';
import { Activities } from './Pages/Activities/Activities';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path = '/' component={LandingPage}/>
      <Route exact path='/countries' component={Home} />
      <Route path='/countries/:id' component={Country}/>
      <Route path='/activities' component={Activities}/>      
    </div>
  );
}

export default App;

