import React from "react";
import { useSelector } from "react-redux";
import Command from "./Command";

const CommandList = () => {
  const commandList = useSelector((state) => state.Menus);

  return (
    <div className="container">
      <div className="Command-list">
        <h2 class="col-12 text-center tm-section-title">
          List of your Command
        </h2>

        {commandList.map((command, id) => (
          <Command command={command} key={id} />
        ))}
      </div>
    </div>
  );
};

export default CommandList;
