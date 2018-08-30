import React from "react";

export const Search = () => <div className="non-collapsible-section">
  <div className="search-wrapper">
    <div className="search-inner-wrapper">
      <input type="search" id="newtab-search-text" maxLength="256" placeholder="Search the Web" title="Search the Web" autoComplete="off" />
      <button id="searchSubmit" className="search-button" title="Search"></button>
    </div>
  </div>
</div>;
