import React, { useState } from "react";
import classes from "./Projects.module.css";
import Popup from "../popup/Popup";
import EditProject from "./EditProject";

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
        <EditProject />
      </Popup>
    </li>
  );
}

export default ProjectItem;
