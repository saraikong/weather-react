import React from "react";

export default function SearchBar(props) {
  return (
    <div className="SearchBar">
      <nav className="navbar navbar-light pt-0">
        <form className="form-inline" onSubmit={props.submit}>
          <input
            className="form-control form-control-sm mr-sm-2"
            type="search"
            placeholder="Search City"
            aria-label="Search"
            autocomplete="off"
            autoFocus="on"
            onChange={props.changeCity}
          />
        </form>
      </nav>
    </div>
  );
}
