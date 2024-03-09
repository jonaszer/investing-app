import React from "react";
import HeaderLogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={HeaderLogo} alt="Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
