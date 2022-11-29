import React from "react";
import UserTable from "../components/users/UserTable";
import classes from "../components/users/Users.module.css";

const UsersRegistry = () => {
  const loadedUsers = [
    {
      id: 987654,
      first: "Chris",
      last: "Purnell",
      email: "cpurnell@cook-sys.org",
      team: "chic-fil-a",
      active: true,
      admin: true,
      status: "joined",
    },
    {
      id: 987655,
      first: "Will",
      last: "Martala",
      email: "willmartala@cook-sys.org",
      team: "chic-fil-a",
      active: true,
      admin: true,
      status: "joined",
    }
  ];

  return (
    <html>
      {/* <head>
        <title>HTML Table Header</title>
      </head> */}
      <h1 className={classes.h1}>User Registry</h1>
      <p>A general view of all your members in your organization</p>
      <body>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Team</th>
            <th>Active</th>
            <th>Admin</th>
            <th>Status</th>
          </tr>
          <UserTable users={loadedUsers} />
        </table>
      </body>
      <div className={classes.newActions}>
        <button>Add User</button>
      </div>
    </html>
  );
};

export default UsersRegistry;
