import React, { useState } from "react";
import Navbar from "../components/Navbar";
import classes from "../components/announcements/Announcements.module.css";
import Popup from "../components/popup/Popup";
import CreateTeam from "../components/teams/CreateTeam";

const Teams = () => {
  const loadedMembers = [
    { id: 9871, name: "Guy" },
    { id: 9872, name: "Jeremy" },
    { id: 9873, name: "Anthony" },
    { id: 9874, name: "Andre" },
    { id: 9875, name: "Ryan" },
    { id: 9876, name: "Michael" },
  ];

  const [buttonPopup, setButtonPopup] = useState(false);

  const [chosenMembers, setChosenMembers] = useState([]);
  const [availableMembers, setAvailableMembers] = useState([]);

  function clickNew() {
    setButtonPopup(true);
    // setAvailableMembers(loadedMembers); => empty array
    // setAvailableMembers(availableMembers.push(loadedMembers)); => array inside array [[{},{}]]
    for (let member of loadedMembers) {
      availableMembers.push(member);
    }
    setAvailableMembers(availableMembers); //=> looks good thanks to for loop!
    console.log(
      `inside clickNew on Team.js. availableMembers: ${JSON.stringify(
        availableMembers
      )}`
    );
    console.log(
      `inside clickNew on Team.js. chosenMembers: ${JSON.stringify(
        chosenMembers
      )}`
    );
  }

  return (
    <section>
      <Navbar />
      <h1 className={classes.h1}>Teams</h1>
      <div className={classes.actions}>
        <button onClick={clickNew}>New Team</button>
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <CreateTeam
          availableMembers={availableMembers}
          chosenMembers={chosenMembers}
          setAvailableMembers={setAvailableMembers}
          setChosenMembers={setChosenMembers}
        />
      </Popup>
    </section>
  );
};

export default Teams;
