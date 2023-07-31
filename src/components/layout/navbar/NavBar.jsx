import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchIcon from '@mui/icons-material/Search';

const NavBar = (props) => {
    const{handleChange}=props
  return (
    <nav className="nav-container">
      <div className="nav-search">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h2>HYG</h2>
        </Link>

        <div className="nav-search-input">
          <input
            type="text"
            placeholder="Ingresa un numero"
            name="textSearch"
            onChange={handleChange}
          />
          <SearchIcon className="icon-search"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
