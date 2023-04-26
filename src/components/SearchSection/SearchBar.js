import { useState } from "react";
import Search from "../../assets/icons8-search.svg";
import Lens from "../../assets/Google_Lens_2021.png";
import VoiceSearch from "../../assets/Google-Mic-Icon.svg";

const SearchBar = () => {
  let images = [Search, Lens, VoiceSearch];
  const [query, setQuery] = useState("");
  let [history, setHistory] = useState("");

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setHistory(query);
              history = query;
              setQuery(" ");
            }
          }}
        />

        {images.map((image, index) => {
          return (
            <img
              className="search-icon"
              key={index}
              src={image}
              alt="googleIcon"
              style={{ height: "16px", width: "18px" }}
            />
          );
        })}
      </div>
      <p>{history}</p>
    </>
  );
};

export default SearchBar;
