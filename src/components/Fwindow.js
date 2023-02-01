
import React from "react";
import Window from "floating-window-ui";
import {Routes,Route} from "react-router-dom";

const Fwindow = () => {
  return (
    <Window
      id="react-window"
      height={250}
      width={250}
      resizable={true}
      titleBar={{
        icon: "VR",
        buttons: { minimize: true, maximize: true },
      }}
    >
      <div>...</div>
    </Window>
  );
};

export default Fwindow;