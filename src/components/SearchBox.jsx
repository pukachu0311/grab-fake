import { useState } from "react";
import React from "react";
import "./Design.css";

const SearchBox = () => {
  return (
    <div>
      <img
        className="background"
        src="src/assets/VN-new-4.jpg"
        alt="Background"
      ></img>
      <div className="container">
        <div className="searchContainer">
          <h5 style={{ textAlign: "left" }}>
            <strong>Good Afternoon</strong>
          </h5>
          <h1 id="textBox">Where should we deliver your food today?</h1>
          <div className="location-input">
            <img id="icon" src="src/assets/location.png" alt="Location Icon" />
            <input
              id="search-input"
              placeholder="Type your location"
              type="text"
            ></input>
            <img id="icon" src="src/assets/target.png" alt="Target Icon" />
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
