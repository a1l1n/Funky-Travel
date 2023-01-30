import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCheckSquare } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import body from "../Home/Home.module.css";
import Styles from "./About.module.css";

export const About = () => {
  return (
    <div className={body.homeContainer}>
      <div className={Styles.aboutCointainer}>
        <div className={Styles.about_general}>
        <h1>Funky Travel</h1>
          <p className={Styles.about_description}>This SPA is part of the SoyHenry bootcamp, as an Individual Project (IP) aimed at consolidating the minimum knowledge to structure both Backend and Frontend.      
          </p>
          <p>It presents the following features: </p>

          <div className={Styles.about_features}>
            <div className={Styles.about_countries}>
              <h3>Countries Section</h3>
              <ul>
                <li>Searching Bar</li>
                <li>Filters and pagination</li>
                <li>Detailed information of each contry, with the associated activities and a link to their respective Wikipedia articles</li>
              </ul>
            </div>
            <div className={Styles.about_activities}>
              <h3>Activities Section</h3>
              <ul>
                <li>Cards with the information of each activity created</li>
                <li>Filters</li>
                {/*<li>Custom calendar</li> */}
              </ul>
            </div>
            <div className={Styles.about_form}>
              <h3>Form Section</h3>
              <p>Controlled form for creating new activities</p>
            </div>
          </div>
          <div className={Styles.about_link_div}>
            <Link className={Styles.about_link} to="/countries"><IoIosArrowBack />Go back</Link>
          </div>
        </div>

        <div className={Styles.about_tech}>
          <h2>Technologies</h2>
          <div className={Styles.about_cards}>
            <span>
              <h3>Database</h3>
              <ul>
                <li><AiOutlineCheckSquare />PostgreSQL</li>
                <li><AiOutlineCheckSquare />Fill with REST Countries API</li>
                <li><AiOutlineCheckSquare />Deploy in Railway</li>
              </ul>
            </span>

            <span>
              <h3>Back-End</h3>
              <ul>
                <li><AiOutlineCheckSquare />NodeJs</li>
                <li><AiOutlineCheckSquare />Express</li>
                <li><AiOutlineCheckSquare />Sequelize</li>
                <li><AiOutlineCheckSquare />Deploy in Railway</li>
              </ul>
            </span>

            <span>
              <h3>Front-End</h3>
              <ul>
                <li><AiOutlineCheckSquare /> ReactJs</li>
                <li><AiOutlineCheckSquare />React Router</li>
                <li><AiOutlineCheckSquare />Redux</li>
                <li><AiOutlineCheckSquare />Deploy in Vercel</li>
              </ul>
            </span>

            <span>
              <h3>About Me</h3>
              <p>I just love coding and learn something new every day</p>
            </span>

          </div>

          
        </div>
      </div>
    </div>
  )
}
