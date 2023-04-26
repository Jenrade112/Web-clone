import React from "react";

const BottomRightMenu = ({ link5, link6, link7 }) => {
  const getUrl = "#";
  return (
    <div>
      <a href={getUrl}>{link5}</a>
      <a href={getUrl}>{link6}</a>
      <a href={getUrl}>{link7}</a>
    </div>
  );
};

export default BottomRightMenu;
