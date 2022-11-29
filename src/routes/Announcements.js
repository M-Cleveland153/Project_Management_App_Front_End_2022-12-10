import React, { useState } from "react";
import AnnouncementList from "../components/announcements/AnnouncementList";
import classes from "../components/announcements/Announcements.module.css";
import Navbar from "../components/Navbar";
import Popup from "../components/popup/Popup";
import AddAnnouncement from "../components/announcements/AddAnnouncement";

const Announcements = () => {
  const loadedAnnouncements = [
    {
      id: 123456,
      date: "2022-11-28",
      title: "announcement title #1",
      message:
        "This is my first announcement  #1. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make",
      company: 987654,
      user: "User Name",
    },
    {
      id: 123457,
      date: "2022-11-28",
      title: "announcement title #2",
      message:
        "This is my second announcement #2. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make.",
      company: 987654,
      user: "User Name",
    },
    {
      id: 123458,
      date: "2022-11-28",
      title: "announcement title #3",
      message:
        "This is my third announcement #3. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make. Listen up I have an announcement to make.",
      company: 987654,
      user: "User Name",
    },
  ];

  const [buttonPopup, setButtonPopup] = useState(false);

  function clickNew() {
    setButtonPopup(true);
  }
  return (
    <section>
      <Navbar />
      <h1 className={classes.h1}>Announcements</h1>
      <div className={classes.actions}>
        <button onClick={clickNew}>New</button>
      </div>
      <hr className={classes.hr}></hr>
      <AnnouncementList announcements={loadedAnnouncements} />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <AddAnnouncement />
      </Popup>
    </section>
  );
};

export default Announcements;
