import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h5 className="navH1">Raul Oropesa</h5>
      <div className="pages">
        <a className="aboutMe" href="#">
          About Me
        </a>
        <a className="portfolio" href="#">
          Portfolio
        </a>
        <a className="contact" href="#">
          Contact
        </a>
      </div>
    </div>
  );
}
export default Navbar;
