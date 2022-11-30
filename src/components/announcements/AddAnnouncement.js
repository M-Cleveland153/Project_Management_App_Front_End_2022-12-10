import React, { useRef } from "react";
import "./AddAnnouncement.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AddAnnouncement = () => {
  return (
    <form>
      <button class="close-btn">
        <AiOutlineCloseCircle />
      </button>
      <p class="posting-user">Posting user</p>
      <div>
        {/* <p class="announcement">announcement</p> */}
        <textarea class="announcement-input" placeholder="Enter announcement" name="announcement-input"></textarea>
      </div>
      <button class="submit-btn">Submit</button>
    </form>
  );
};

export default AddAnnouncement;
