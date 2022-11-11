import React, { useEffect, useState } from "react";

export default function PeopleInTheSystem() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const [people, setPeople] = useState([]);

  var raw = JSON.stringify({
    course: "JS ",
    level: "3.0",
    link: "http://video.youtube.com/wdfgv",
  });

  var requestOptions = {
    method: "GET",
    headers: myHeaders,

    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8010/proxy/v1/meeting", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setPeople(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return <div>loook</div>;
}
