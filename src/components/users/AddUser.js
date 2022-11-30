import React, { useRef } from "react";
import "./AddUser.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AddUser = () => {
  return (
    <form>
      <button class="close-btn">
        <AiOutlineCloseCircle />
      </button>
      <div>
        <textarea
          class="announcement-input"
          placeholder="Enter first name"
          name="announcement-input"
        ></textarea>
        <textarea
          class="announcement-input"
          placeholder="Enter last name"
          name="announcement-input"
        ></textarea>
        <textarea
          class="email-input"
          placeholder="Enter email"
          name="announcement-input"
        ></textarea>

        <textarea
          class="announcement-input"
          placeholder="Enter password"
          name="announcement-input"
        ></textarea>

        <textarea
          class="announcement-input"
          placeholder="confirm password"
          name="announcement-input"
        ></textarea>
        <p class="para">Make user an admin role?</p>
        <select>
          <option value="" />
          <option >true</option>
          <option >false</option>
        </select>
      </div>

      <button class="submit-btn">Submit</button>
    </form>
  );
};

export default AddUser;
