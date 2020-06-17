import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar navbar-expand-lg navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div className="">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <i className="p-1 mt-n2">
                  <FaHome />
                </i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link text-white">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white ">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "My App",
};
Header.prototype = {
  branding: PropTypes.string.isRequired,
};
export default Header;
