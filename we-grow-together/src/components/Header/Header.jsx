import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/Header.css";
import logo from "../../assets/grow.jpeg";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="We Grow Together Logo" />
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/bible-studies" onClick={() => setMenuOpen(false)}>
                Bible Studies
              </NavLink>
            </li>

            <li>
              <NavLink to="/reading-plan" onClick={() => setMenuOpen(false)}>
                Reading Plan
              </NavLink>
            </li>

            <li>
              <NavLink to="/prayer" onClick={() => setMenuOpen(false)}>
                Prayer
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
            {/* WhatsApp */}
          <a
            href="https://wa.me/27712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Header;