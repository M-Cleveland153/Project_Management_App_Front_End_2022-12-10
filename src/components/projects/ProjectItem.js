import React, { useState } from "react";
import classes from "./Projects.module.css";
import Popup from "../popup/Popup";
import EditProject from "./EditProject";
import moment from "moment"

function ProjectItem(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  function clickEdit() {
    setButtonPopup(true);
  }
  return (
    <li className={classes.li}>
      <div className={classes.projItemContentDiv}>
<<<<<<< HEAD
      <div className={classes.title}>
        <h4>{props.name}</h4>
        <p>{moment(props.date).fromNow()}</p>
      </div>
=======

>>>>>>> master
        <hr className={classes.hr}></hr>
        <p className={classes.name}>{props.name}</p>
        <div className={classes.lastEdited}>
        <p>{moment(props.date).fromNow()}</p>
        </div>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.editActions}>
          <button onClick={clickEdit}>Edit</button>
        </div>
      </div>
      <div className={classes.projItemPopupDiv}>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <EditProject setTrigger={setButtonPopup} projectName={props.name} projDescription={props.description}/>
        </Popup>
      </div>
    </li>
  );
}

export default ProjectItem;