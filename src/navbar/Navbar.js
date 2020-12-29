import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h6>Raul Oropesa</h6>
      <ul className="links">
        <li className="home">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="about">
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li className="port">
          <NavLink to="/port">Portfolio</NavLink>
        </li>
        <li className="cont">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
