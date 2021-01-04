import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="myLinks">
        <li>
          <a
            className="linkedIn"
            href="https://www.linkedin.com/in/raojr12lr21af17rf17rioiii21/"
            alt="linkedin"
          ></a>
        </li>
        <li>
          <a
            className="git"
            href="https://github.com/Rauloropesa3"
            alt="gitHub"
          ></a>
        </li>
      </ul>
      <h6 className="copyWrite">© 2021 Raul Alejandro Oropesa</h6>
    </footer>
  );
}
export default Footer;
