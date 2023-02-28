import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  let [searchInput, setSearchInput] = useState("");

  if (searchInput.length > 2) {
    props.onSearch(searchInput, agent.Items.bySearch(searchInput));
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input
            id="search-box"
            type="search"
            placeholder="What do you desire?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
