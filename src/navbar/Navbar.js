import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h6>Raul Oropesa</h6>
      <ul className="links">
        <li className="home">
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li className="about">
          <NavLink to="/about" exact activeStyle={{ color: "red" }}>
            About Me
          </NavLink>
        </li>
        <li className="port">
          <NavLink to="/port" exact activeStyle={{ color: "red" }}>
            Portfolio
          </NavLink>
        </li>
        <li className="cont">
          <NavLink to="/contact" exact activeStyle={{ color: "red" }}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
