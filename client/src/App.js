import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { Country } from './Pages/Country/Country';
import { NewActivity } from './Pages/NewActivity/NewActivity';
import { About } from './Pages/About/About';
import  Activities from "./Pages/Activities/Activities";
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Route exact path = '/' component={LandingPage}/>
      <Route exact path='/countries' component={Home} />
      <Route path='/countries/:id' component={Country}/>
      <Route path="/newActivity" component={NewActivity}/>
      <Route path='/activities' component={Activities}/>  
      <Route path="/about" component={About}/>    
    </div>
  );
}

export default App;

