import React from "react";

const BottomLeftMenu = ({ link1, link2, link3, link4 }) => {
  const getUrl = "#";
  return (
    <div>
      <a href={getUrl}>{link1}</a>
      <a href={getUrl}>{link2}</a>
      <a href={getUrl}>{link3}</a>
      <a href={getUrl}>{link4}</a>
    </div>
  );
};

export default BottomLeftMenu;
