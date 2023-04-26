import React from "react";

const LanguageLink = (props) => {
  const getUrl = "#";
  const { lang1, lang2, lang3, lang4 } = props;
  return (
    <div className="language-container" style={props.style}>
      <p>Google offered in:</p>
      <div className="language-menu">
        <a href={getUrl}>{lang1}</a>
        <a href={getUrl}>{lang2}</a>
        <a href={getUrl}>{lang3}</a>
        <a href={getUrl}>{lang4}</a>
      </div>
    </div>
  );
};

export default LanguageLink;
