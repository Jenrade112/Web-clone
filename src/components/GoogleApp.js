import React from "react";
import Header from "./Header/Header";
import SearchSection from "./SearchSection/SearchSection";
import Footer from "./Footer/Footer";

const GoogleApp = () => {
  return (
    <div className="app-container">
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
};

export default GoogleApp;
