import React from "react";
import { Link } from "gatsby";

const NavBarItem = (props) => {
  return <Link {...props} className="uppercase hover:underline" />;
};
const Navbar = () => {
  return (
    <nav
      className="section Navbar py-2 border-b border-b-4 mb-4"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container mx-auto px-2 grid grid-cols-2 sm:grid-cols-9 gap-x-2">
        <NavBarItem to="/">home</NavBarItem>
        <NavBarItem to="/about">about</NavBarItem>
      </div>
    </nav>
  );
};

export default Navbar;
