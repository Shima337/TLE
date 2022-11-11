import React from "react";
import ChooseTechnology from "./ChooseTechnology";
import ChooseYourLevel from "./ChoseYourLevel";

export default function GuestForm() {
  return (
    <div>
      <form>
        <label>Name</label>
        <input></input>
        <div></div>
        <label>Chose Your Technology</label>
        <ChooseTechnology />
        <ChooseYourLevel />
      </form>
    </div>
  );
}
