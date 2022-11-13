import React from "react";

export default function SearchBar(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.search();
  }

  function handleCityChange(event) {
    props.setCity(event.target.value);
  }
  return (
    <div className="SearchBar">
      <nav className="navbar navbar-light pt-0">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control form-control-sm mr-sm-2"
            type="search"
            placeholder="Search City"
            aria-label="Search"
            autocomplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </form>
      </nav>
    </div>
  );
}
