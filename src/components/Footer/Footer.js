import React from "react";
import "../../styles/footer.css";
import Location from "../Footer/Location";
import BottomLeftMenu from "../Footer/BottomLeftMenu";
import FooterText from "../Footer/FooterText";
import BottomRightMenu from "../Footer/BottomRightMenu";

const Footer = () => {
  return (
    <div className="app-footer">
      <Location text={"Nigeria"} />
      <div className="app-footer-menu">
        <BottomLeftMenu
          link1={"About "}
          link2={"Advertising "}
          link3={"Business "}
          link4={"How Search Works"}
        />
        <FooterText text={"ecoCarbon neutral since 2007"} />
        <BottomRightMenu
          link5={"Privacy "}
          link6={"Terms "}
          link7={"Settings "}
        />
      </div>
    </div>
  );
};

export default Footer;
