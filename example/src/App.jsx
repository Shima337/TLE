import { JaaSMeeting, JitsiMeeting } from "@jitsi/react-sdk";
import React, { useRef, useState } from "react";
import GuestForm from "./GuestForm";
import PeopleInTheSystem from "./PeopleInTheSystem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Apirequests from "./Apirequests";
import Video from "./Video";
import Layout from "./Layout";

const App = () => {
  const [level, setLevel] = useState(0);
  const [tech, setTech] = useState(0);

  return (
    <div>
      <Router>
        <div> this would be header</div>
        <GuestForm
          level={level}
          setLevel={setLevel}
          tech={tech}
          setTech={setTech}
        />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/api"
            element={<Apirequests level={level} tech={tech} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
