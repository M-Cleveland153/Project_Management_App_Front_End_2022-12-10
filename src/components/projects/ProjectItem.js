import React, { useState } from "react";
import classes from "./Projects.module.css";
import Popup from "../popup/Popup";

function ProjectItem(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  function clickEdit() {
    setButtonPopup(true);
  }
  return (
    <li className={classes.li}>
      <hr className={classes.hr}></hr>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.editActions}>
        <button onClick={clickEdit}>Edit</button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Overlay Template Title</h3>
        <p>Michael was here...</p>
      </Popup>
    </li>
  );
}

export default ProjectItem;
