import React, { useRef } from "react";
import "./EditProject.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditProject = () => {
  return (
    <form>
      <button class="close-btn">
        <AiOutlineCloseCircle />
      </button>
      <div>
        <p class="announcement">project name</p>
        <textarea class="announcement-input" placeholder="Enter project name" name="announcement-input"></textarea>
        </div>
        <div>
        <p class="announcement">description</p>
        <textarea class="announcement-input" placeholder="Enter announcement" name="announcement-input"></textarea>
      </div>
      <button class="submit-btn">Submit</button>
    </form>
  );
};

export default EditProject;