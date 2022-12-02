import React, { useState } from "react";

import "./EditProject.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import axios from "axios";

const EditProject = (props) => {
  const [editedProject, setEditedProject] = useState({
    credentials: {},
    project: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setEditedProject({
      credentials: { username: "fullmetal_hero", password: "love4alphonse" },
      project: {
        name: "Otherworldly Retrieval",
        description: "Definitely didn't lose my bros body while transmuting",
        active: true,
        team: "Fullmetal Alchemist",
      },
    });

    axios.patch("https://httpbin.org/patch", editedProject).then((response) => {
      console.log(response.status);
      console.log(JSON.parse(response.data.data));
    });

    props.setTrigger(false)
  };

  const setInputHeight = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  return (
    <form>
      <button class="close-btn">
        <AiOutlineCloseCircle />
      </button>
      <div class="inputs">
        <textarea class="project-name" placeholder="Enter project name">
          {props.projectName}
        </textarea>

        <textarea
          class="project-info"
          placeholder="Enter description"
          onChange={(event) => setInputHeight(event, "10px")}
        >
          {props.projDescription}
        </textarea>
      </div>
      <button class="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default EditProject;
