import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header_optionBasket">
          <MenuIcon />
          <span
            className="header_optionLineTwo
        header_basketCount"
          ></span>
        </div>
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
    </div>
  );
}

export default Header;
