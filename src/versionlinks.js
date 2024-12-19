import React from "react";
import { Link } from "react-router-dom";
import Home from "./controllers/theme1.js";

const Navbar = () => {
  return (
    <nav>
      <Link to="./controllers/theme1.js">Home</Link>
    </nav>
  );
};

export default Navbar;
