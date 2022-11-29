import React from "react";
import AnnouncementList from "../components/announcements/AnnouncementList";
import classes from "../components/announcements/Announcements.module.css";

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
  return (
    <section>
      <h1 className={classes.h1}>Announcements</h1>
      <div className={classes.actions}>
        <button >New</button>
      </div>
      <hr className={classes.hr}></hr>
      <AnnouncementList announcements={loadedAnnouncements} />
    </section>
  );
};

export default Announcements;
