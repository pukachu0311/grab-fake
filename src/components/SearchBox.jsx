import { useState } from "react";
import React from "react";
import "./Design.css";
import iconLocate from "../assets/location.png";
import iconLocate2 from "../assets/target.png";
import bgImage from "../assets/VN-new-4.jpg";
const SearchBox = () => {
  return (
    <div>
      <img className="background" src={bgImage} alt="Background"></img>
      <div className="container">
        <div className="searchContainer">
          <h5 style={{ textAlign: "left" }}>
            <strong>Good Afternoon</strong>
          </h5>
          <h1 id="textBox">Where should we deliver your food today?</h1>
          <div className="location-input">
            <img id="icon" src={iconLocate} alt="Location Icon" />
            <input
              id="search-input"
              placeholder="Type your location"
              type="text"
            ></input>
            <img id="icon" src={iconLocate2} alt="Target Icon" />
          </div>
          <button id="btnSearch" type="button" class="btn btn-primary">
            Search
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "80px" }}></hr>
    </div>
  );
};

export default SearchBox;
