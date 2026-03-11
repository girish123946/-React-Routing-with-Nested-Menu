import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">stackly</h2>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Services

          {open && (
            <ul className="dropdown-menu">
              <li><Link to="/services/web">Web Development</Link></li>
              <li><Link to="/services/app">App Development</Link></li>
              <li><Link to="/services/uiux">UI/UX Design</Link></li>
            </ul>
          )}

        </li>

        <li><Link to="/contact">Contact</Link></li>

        <li><Link to="/profile">Profile</Link></li>

        <li><Link to="/settings">Settings</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;