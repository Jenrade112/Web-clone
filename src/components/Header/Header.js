import React from "react";
import "../../styles/header.css";
import MenuItem from "./MenuItem";
import AppLauncher from "./AppLauncher";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <MenuItem text={"Gmail"} />
        <MenuItem text={"Images"} />
        <AppLauncher />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
