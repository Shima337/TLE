import React, { useState } from "react";
import Video from "./Video";

export default function Apirequests({ level, tech }) {
  const [meetings, setMeetings] = useState([]);
  const [currentMeeting, setCurrentMeeting] = useState(null);

  const myBody = {
    course: tech,
    level: level,
    link: (Math.random() + 1).toString(36).substring(2),
  };

  async function receiveMeetings() {
    const response = await fetch("https://video-api.jbspace.xyz/v1/meeting", {
      method: "GET",
    });

    const meetings = await response.json();

    setMeetings(meetings);
    console.log(meetings);
  }
  async function setMeeteng() {
    const existingMeetingResponse = await fetch(
      `https://video-api.jbspace.xyz/v1/find_meeting/${tech}_${level}`
    );
    const existingMeetings = await existingMeetingResponse.json();
    if (existingMeetings.length === 0) {
      const response = await fetch("https://video-api.jbspace.xyz/v1/meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(myBody),
      });

      const meeting = await response.json();
      setCurrentMeeting(meeting);
    } else {
      setCurrentMeeting(existingMeetings[0]);
    }
  }

  return (
    <div>
      this would be the new roat with
      <div>
        <button onClick={setMeeteng}>Create meeting</button>
        {currentMeeting && <Video currentMeeting={currentMeeting} />}
        <pre>{JSON.stringify(currentMeeting, null, 2)}</pre>
      </div>
    </div>
  );
}
