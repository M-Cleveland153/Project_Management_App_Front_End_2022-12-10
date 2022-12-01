import Card from "./Card";
import classes from "./Teams.module.css";

function TeamItem(props) {
  return (
    <Card>
      <div>
        <div>
          <p>{props.teamName}</p>
          <p>{props.numberOfProjects}</p>
          <p>{props.members}</p>
        </div>
        <div className={classes.teamMembers}>
          {props.members.map((member) => (
            <button> {member}</button>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TeamItem;
