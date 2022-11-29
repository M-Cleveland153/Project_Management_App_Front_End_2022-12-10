// import classes from "./Users.module.css";

function UserRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.team}</td>
      <td>{props.active.toString()}</td>
      <td>{props.admin.toString()}</td>
      <td>{props.status}</td>
    </tr>
  );
}

export default UserRow;
