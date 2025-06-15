import React from "react";
import Menu from "./Menu.jsx";
import menu from "./Sidebar.data.js";


const Sidebar = () => {
  return (
    <>
      <Menu val={menu}/>
    </>
  );
};

export default Sidebar;
