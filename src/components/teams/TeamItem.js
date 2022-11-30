import Card from "./Card";
import classes from "./Teams.module.css";

function TeamItem(props) {
  return (
    <li className={classes.li}>
      <Card>
        <p>{props.teamName}</p>

        <p>{props.numberOfProjects}</p>

        <p>{props.members}</p>
      </Card>
    </li>
  );
}

export default TeamItem;
