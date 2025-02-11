import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

import image from "../../assets/react.svg";

const Sidebar = ({ isOpen, onToggle }) => {
  const [isNotActive, setNotActive] = useState(isOpen); // Initialize based on `isOpen`
  const [isDropdownActive, setDropdownActive] = useState(false);
  const barsIcon = <i className="fas fa-bars"></i>;
  const crossIcon = <i className="fas fa-times-circle"></i>;

  const handleToggle = () => {
    const newState = !isNotActive;
    setNotActive(newState);
    onToggle(newState); // Notify the parent component to update the sidebar state
  };

  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className={isNotActive ? "active" : ""}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick={handleToggle}
            className="btn btn-custom"
          >
            <span className={isNotActive ? "" : "hidden"}>{barsIcon}</span>
            <span className={isNotActive ? "hidden" : ""}>{crossIcon}</span>
          </button>
          <div className="sidebar-header">
            <img
              src={image}
              className="rounded-circle usr-image"
              height={isNotActive ? "20" : "70"}
              width={isNotActive ? "20" : "70"}
              alt="User"
            />
            <h3>User Name</h3>
          </div>

          <ul className="list-unstyled components">
            <li className="list-item">
              <i className="fas fa-briefcase icon-color"></i>
              <Link to="/dashboard/employee-master">Employee Master</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-building icon-color"></i>
              <Link to="/organizations">Organizations</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-user-alt icon-color"></i>
              <Link
                to="#"
                onClick={() => setDropdownActive(!isDropdownActive)}
                className="dropdown-toggle"
              >
                My Space
              </Link>
              <ul
                className={
                  isDropdownActive
                    ? "list-unstyled collapse show"
                    : "list-unstyled collapse"
                }
              >
                <li className="dropdown-item">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/personal-details">Personal Details</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/additional-info">Additional Info</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/personal-background">Personal Background</Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <i className="fas fa-history icon-color"></i>
              <Link to="/request-history">Request History</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-sitemap icon-color"></i>
              <Link to="/organization-profile">Organization</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
