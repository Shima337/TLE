import React, { useState } from "react";
import ChooseTechnology from "./ChooseTechnology";
import ChooseYourLevel from "./ChoseYourLevel";

export default function GuestForm({ level, setLevel, tech, setTech }) {
  return (
    <div>
      <form>
        <label>Name</label>
        <input></input>
        <div></div>
        <label>Chose Your Technology</label>
        <ChooseTechnology tech={tech} setTech={setTech} />
        <ChooseYourLevel level={level} setLevel={setLevel} />
      </form>
    </div>
  );
}
