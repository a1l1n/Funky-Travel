import React from 'react';
import Styles from "./Activities.module.css";

export const Edit = () => {

  return (
    <div>
        <form>
            <label>Activity: </label><input />
            <label>Date:</label><input />
            <label>Country:</label><input />
            <label>Season: </label><input />
            <label>Duration</label><input />
            <label>Difficulty</label> <input />
            <button>Update</button>
        </form>
    </div>
  )
}
