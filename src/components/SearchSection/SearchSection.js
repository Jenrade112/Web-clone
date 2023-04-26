import React from "react";
import "../../styles/searchSection.css";
import GoogleLogo from "./GoogleLogo";
import SearchBar from "./SearchBar";
import Button from "./Button";
import LanguageLink from "./LanguageLink";

const SearchSection = () => {
  return (
    <div className="search-container">
      <div className="search-container-menu">
        <GoogleLogo />
        <SearchBar />
        <Button
          text={"Google Search"}
          style={{ padding: "8px", width: "30%" }}
        />
        <Button
          text={"I'm Feeling Lucky"}
          style={{ padding: "8px", width: "30%" }}
        />
        <LanguageLink
          style={{ display: "flex" }}
          lang1={"Hausa "}
          lang2={"Igbo "}
          lang3={"Ede Yoruba "}
          lang4={"Nigeria pidgin"}
        />
      </div>
    </div>
  );
};

export default SearchSection;
