import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateActivity } from '../../Redux/Actions';
import Styles from "./Activities.module.css";

export default function Edit ({ act }) {
  const activities = useSelector(state => state.activities);
/*   const [ input, setInput ] = useState({
    name,
    date,
    country,
    season,
    duration,
    dificulty
  }) */

  /* Pasa el id por param
     Traigo la info   
  */

  return (
    <div>
        <form>
            <label>Activity: </label><input type="text" name="name" /* value={} *//>
            <label>Date:</label><input />
            <label>Country:</label><input />
            <label>Season: </label><input />
            <label>Duration</label><input />
            <label>Difficulty</label> <input />
            <button>Cancel</button>
            <button>Update</button>
        </form>
    </div>
  )
}
