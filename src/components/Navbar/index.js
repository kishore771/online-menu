import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary custom-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.postimg.cc/t4YSNqc8/DALL-E-2025-03-25-21-04-04-A-modern-and-stylish-logo-for-an-online-restaurant-menu-website-The-de.webp"
            alt="menu logo"
            className="nav-logo"
          />
        </Link>
        <h4 className="nav-title">Delicia! - A Taste of Pure Joy</h4>
        {/* ✅ Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Mobile Menu Controlled with State */}
        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* ✅ Controlled Dropdown for Desktop & Mobile */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onClick={() => setDropdownOpen(!isDropdownOpen)} // Enable click for mobile
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                aria-expanded={isDropdownOpen}
              >
                Menu
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link className="dropdown-item" to="/menu/starters">
                      Starters
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/main-course">
                      Main Course
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/snacks">
                      Snacks
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/desserts">
                      Desserts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/beverages">
                      Beverages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/dips">
                      Dips
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/offersandcoupons">
                Offers & Coupons
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
