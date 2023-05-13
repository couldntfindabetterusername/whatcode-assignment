import React from "react";
import Logo from "../../assets/REFLECT 1.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-links"></div>
    </nav>
  );
};

export default Navbar;
