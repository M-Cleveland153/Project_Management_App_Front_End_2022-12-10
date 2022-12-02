import Card from "./Card";
import classes from "./Teams.module.css";

function TeamItem(props) {
  return (
    <Card>
      <div className={classes.cardLayout}>
        <div className={classes.teamInfo}>
          <h4 className={classes.header}>{props.teamName}</h4>
          <p className={classes.p}># of Projects: {props.numberOfProjects}</p>
        </div>
        <p className={classes.members}>Members</p>
        <div className={classes.teamMembers}>
          {props.members.map((member) => (
            <div className={classes.memberContainer}> {member}</div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TeamItem;
