import classes from "./Projects.module.css";

function ProjectItem(props) {
  return (
    <li className={classes.li}>
        <hr className={classes.hr}></hr>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.editActions}>
        <button>Edit</button>
      </div>
    </li>
  );
}

export default ProjectItem;