import React from "react";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <nav className="navbar navbar-light pt-0">
        <form className="form-inline">
          <input
            className="form-control form-control-sm mr-sm-2"
            type="search"
            placeholder="Search City"
            aria-label="Search"
            autocomplete="off"
          />
        </form>
      </nav>
    </div>
  );
}
