import TeamItem from "./TeamItem";
import classes from "./Teams.module.css";

function TeamList(props) {
  return (
    <ul className={classes.ul}>
      {props.teams.map((team) => (
        <TeamItem
        //   key={team.id}
        //   id={team.id}
          teamName={team.teamName}
          numberOfProjects={team.numberOfProjects}
          members={team.members}
        />
      ))}
    </ul>
  );
}

export default TeamList;
