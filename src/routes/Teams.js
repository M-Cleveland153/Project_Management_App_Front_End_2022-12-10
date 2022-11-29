import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import classes from "../components/announcements/Announcements.module.css";
import Popup from "../components/popup/Popup";

const Teams = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  
  function clickNew() {
    setButtonPopup(true);
  }

  return (
    <section>
      <Navbar />
        <h1 className={classes.h1}>Teams</h1>
        <div className={classes.actions}>
          <button onClick={clickNew}>New Team</button>
        </div>
               
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Overlay Template Title</h3>
          <p>Michael was here...</p>
        </Popup>
      </section>
  )
}

export default Teams
