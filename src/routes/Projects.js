import React from 'react'
import classes from "../components/projects/Projects.module.css";
import ProjectList from "../components/projects/ProjectList";
import Navbar from '../components/Navbar';

const Projects = () => {
  let loadedProjects = [{
    "id": 123456,
    "name": "Project Name #1",
    "description": "This is the project description for project #1",
    "active": true,
    "team": 987
  }, 
  {
    "id": 123457,
    "name": "Project Name #2",
    "description": "This is the project description for project #2",
    "active": true,
    "team": 987
  }, 
  {
    "id": 123458,
    "name": "Project Name #3",
    "description": "This is the project description for project #3",
    "active": true,
    "team": 987
  }]
  return (
    <section>
      <Navbar />
        <h1 className={classes.h1}>Projects</h1>
        <div className={classes.newActions}>
          <button>New</button>
        </div>        
        <ProjectList projects={loadedProjects} />
    </section>    
  )
}

export default Projects
