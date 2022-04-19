import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./navigation";

function Header() {
  return(
    <header>
      <div className="title"><Link to="/home">Joshua Ramat</Link></div>
      <Navigation />
    </header>
  );
}

export default Header;
