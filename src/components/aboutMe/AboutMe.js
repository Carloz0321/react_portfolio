import "./AboutMe.css";
import "./_oro_ink_.jpg";

function AboutMe() {
  return (
    <div className="aboutMe">
      <ul className="content">
        <li className="image"></li>
        <li className="pCard">
          <p>
            I'm a Developer from the Los Angeles area, born and raised. I enjoy
            drawing, tattooing, and coding. Although I'm relatively new to the
            world of coding it is something I really enjoy doing.
          </p>
          <p>
            I recently graduated from an excellent Coding Bootcamp at
            UCLA-EXTENSION. Although having a newborn and going through other
            issues made my learning experience outside of class a little
            difficult, I can honestly say that tools I've obtained are
            invaluable. I'm proficient in HTML, CSS, and Javascript. I've worked
            well with MongoDB(mangoose, atlas), mySQL, Node js(with Express),
            and I'm currently focused on React js.
          </p>
          <p>Thanks for the Visit</p>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
