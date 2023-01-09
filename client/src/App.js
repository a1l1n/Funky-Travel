import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route exact path = '/' element={<LandingPage />}/>
        <Route exact path='/countries' element={<Home />} />
        <Route path='/countries/:id' element={<Country />}/>
        <Route path="/newActivity" element={<NewActivity />}/>
        <Route path='/activities' element={<Activities />}/>  
        <Route path="/about" element={<About />}/>    
      </Routes>
    </div>
  );
}

export default App;

