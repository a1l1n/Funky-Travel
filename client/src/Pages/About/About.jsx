import React from 'react';
import body from "../Home/Home.module.css";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Styles from "./About.module.css";

export const About = () => {
  return (
    <div className={body.homeContainer}>
      <div className={Styles.aboutCointainer}>
        <div className={Styles.about_general}>
        <h1>Funky Travel</h1>
          <p>This SPA is part of the SoyHenry bootcamp, as an Individual Project (IP) aimed at consolidating the minimum knowledge to structure both Backend and Frontend.      
          </p>

          <div className={Styles.about_features}>
            <h3>Features</h3>
            <section>
              <h3>Countries Section</h3>
              <ul>
                <li>Searching Bar</li>
                <li>Filters and pagination</li>
                <li>Information detail of each contry, with the associated activities and a link to their respective Wikipedia articles</li>
              </ul>
            </section>
            <section>
              <h3>Activities Section</h3>
              <ul>
                <li>Cards with the information of each activity created</li>
                <li>Filters</li>
                {/*<li>Custom calendar</li> */}
              </ul>
            </section>
            <section>
              <h3>Form Section</h3>
              <p>Controlled form for creating new activities</p>
            </section>
          </div>
        </div>

        <div className={Styles.about_tech}>
          <section>
            <h3>Database</h3>
            <ul>
              <li><AiOutlineCheckSquare />PostgreSQL</li>
              <li><AiOutlineCheckSquare />Fill with REST Countries API</li>
              <li><AiOutlineCheckSquare />Deploy in Railway</li>
            </ul>
          </section>

          <section>
            <h3>Back-End</h3>
            <ul>
              <li><AiOutlineCheckSquare />NodeJs</li>
              <li><AiOutlineCheckSquare />Express</li>
              <li><AiOutlineCheckSquare />Sequelize</li>
              <li><AiOutlineCheckSquare />Deploy in Railway</li>
            </ul>
          </section>

          <section>
            <h3>Front-End</h3>
            <ul>
              <li><AiOutlineCheckSquare /> ReactJs</li>
              <li><AiOutlineCheckSquare />React Router</li>
              <li><AiOutlineCheckSquare />Redux</li>
              <li><AiOutlineCheckSquare />Deploy in Vercel</li>
            </ul>
          </section>

          <section>
            <h3>About Me</h3>
            <p>I just love coding and learn something new every day</p>
          </section>
          
        </div>
      </div>
    </div>
  )
}
