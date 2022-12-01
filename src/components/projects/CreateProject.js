import React, { useRef } from "react";
import "./CreateProject.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CreateProject = () => {
  return (
    <form>
      <button class="close-btn">
        <AiOutlineCloseCircle />
      </button>
      <div>
        {/* <p class="announcement">project name</p> */}
        <textarea class="announcement-input" placeholder="Enter project name" name="announcement-input"></textarea>
        </div>
        <div>
        {/* <p class="announcement">description</p> */}
        <textarea class="announcement-input" placeholder="Enter description" name="announcement-input"></textarea>
      </div>
      <button class="submit-btn">Submit</button>
    </form>
  );
};

export default CreateProject;