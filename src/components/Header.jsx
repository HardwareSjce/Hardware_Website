import React, { useState } from "react";

const Header = ({ setSelectedSection }) => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage nav visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClick = (section) => {
    setSelectedSection(section);
    setIsNavOpen(false); // Close nav when an item is clicked
  };

  return (
    <header>
      <h1>Hardware Club SJCE</h1>
      <img className="logo" src="./Images/logo.jpg" width="120" alt="Hardware Club Logo" />
      <h2>THINK. CREATE. INNOVATE. REPEAT.</h2>
      <button className="hamburger" onClick={toggleNav}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={isNavOpen ? "open" : ""}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("calendar"); }}>Calendar</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("event"); }}>Events</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;