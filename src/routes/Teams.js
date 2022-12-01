import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Popup from "../components/popup/Popup";
import TeamList from "../components/teams/TeamList";

import classes from "../components/announcements/Announcements.module.css";

import useAxios from "../services/useAxios";

const Teams = () => {

  // const loadedTeams = [
  //   {
  //     teamName: "Mavericks",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  //   {
  //     teamName: "Rockets",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  //   {
  //     teamName: "Bears",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  //   {
  //     teamName: "Hornets",
  //     numberOfProjects: 1,
  //     members: ["Andre", "Michael", "Guy", "Anthony"]
  //   },
  // ];

  const { response, loading, error } = useAxios({

    method: 'get',
    url: '/teams'
  })

  const [buttonPopup, setButtonPopup] = useState(false);

  function clickNew() {
    setButtonPopup(true);
  }

  return (
    <section>
      <Navbar />
      <h1 className={classes.h1}>Teams</h1>
      {/* <div className={classes.actions}>
        <button onClick={clickNew}>New Team</button>
      </div> */}

      {loading ? ( <p>loading...</p>) : 
      (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
           )}
          <div>                
            <TeamList teams={response} />
            {console.log(response)}
          </div>
        </div>
      )}
      

      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Overlay Template Title</h3>
        <p>Michael was here...</p>
      </Popup>{" "} */}
    </section>
  );
};

export default Teams;
