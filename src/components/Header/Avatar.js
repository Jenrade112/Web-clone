import React from "react";
import ProfilePic from "../../assets/MESSI.jpg";

const Avatar = () => {
  return (
    <div>
      <img src={ProfilePic} alt="profilepic" style={{ height: "16px" }} />
    </div>
  );
};

export default Avatar;
