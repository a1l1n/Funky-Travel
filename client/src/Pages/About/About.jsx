import React from 'react';
import body from "../Home/Home.module.css";

export const About = () => {
  return (
    <div className={body.homeContainer}>
      <div>
        <h1>Funky Travel</h1>
        <div>
          <p>This SPA is part of the SoyHenry bootcamp, as an Individual Project (IP) aimed at consolidating the minimum knowledge to structure both Backend and Frontend.      
          </p>
        </div>
        <div>
          <h3>Features</h3>
          <div>Countries Section</div>
          <div>Activities Section</div>
          <div>Form Section</div>
        </div>
        
      </div>
      <div>Database</div>
      <div>Back-End</div>
      <div>Front-End</div>
      <div>About Me</div>
    </div>
  )
}
