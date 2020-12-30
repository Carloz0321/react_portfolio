import "./LI-Logo.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <h4>Check me out on LinkedIn or GitHub just click on one below.</h4>
      <h5>Or contact me via email: alexoropesa1982@yahoo</h5>
      <ul className="logoLinks">
        <li>
          <a
            className="linkedInLogo"
            href="https://www.linkedin.com/in/raojr12lr21af17rf17rioiii21/"
            alt="linkedin"
          ></a>
        </li>
        <li>
          <a
            className="gitHub"
            href="https://github.com/Rauloropesa3"
            alt="gitHub"
          ></a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
