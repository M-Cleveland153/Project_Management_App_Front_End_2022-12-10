import React, { useRef } from "react";
import "./AddAnnouncement.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AddAnnouncement = () => {
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
      <p class="poster">Posting user</p>
      <div>
        <textarea
          class="announcement-text"
          placeholder="Enter announcement"
          name="announcement-input"
          onChange={(event) => setInputHeight(event, "10px")}
          maxlength="285"
        />
      </div>
      <button class="submit">Submit</button>
    </form>
  );
};

export default AddAnnouncement;
