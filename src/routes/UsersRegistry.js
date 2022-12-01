import React, { useEffect, useState } from "react";

import UserTable from "../components/users/UserTable";

import classes from "../components/users/Users.module.css";
import Navbar from "../components/Navbar";

import Popup from "../components/popup/Popup";

import classes from "../components/users/Users.module.css";

import useAxios from "../services/useAxios";

const UsersRegistry = () => {
  // const loadedUsers = [
  //   {
  //     id: 987654,
  //     first: "Chris",
  //     last: "Purnell",
  //     email: "cpurnell@cook-sys.org",
  //     team: "chic-fil-a",
  //     active: true,
  //     admin: true,
  //     status: "joined",
  //   },
  //   {
  //     id: 987655,
  //     first: "Will",
  //     last: "Martala",
  //     email: "willmartala@cook-sys.org",
  //     team: "chic-fil-a",
  //     active: true,
  //     admin: true,
  //     status: "joined",
  //   }
  // ];

  const { response, loading, error } = useAxios({

    method: 'get',
    url: '/users'
  });

  const [buttonPopup, setButtonPopup] = useState(false);

  function clickAddUser() {
    setButtonPopup(true);
  }

  return (

    <div>

   
      <Navbar />

      <h1 className={classes.h1}>User Registry</h1>
      <p>A general view of all your members in your organization</p>

        <table border="1">
          {loading ? ( "loading...") : 
          (
            <div>
              {error && (
                <div>
                  {error.message}
                </div>
              )}
              <div>         {/* loadedUsers */}
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Team</th>
                <th>Active</th>
                <th>Admin</th>
                <th>Status</th>
              </tr>
                <UserTable users={response} />
                {console.log(response)}
              </div>
           </div>
          )}         
        </table>

      <div className={classes.newActions}>
        <button onClick={clickAddUser}>Add User</button>
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Overlay Template Title</h3>
          <p>Michael was here...</p>
      </Popup>
    </div>
  );
};

export default UsersRegistry;