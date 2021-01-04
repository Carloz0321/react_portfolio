import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer/Footer";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <ul className="apps">
        <li className="workoutTracker">
          <iframe
            title="outtaLine"
            src="https://drive.google.com/file/d/1Jxpq7Q5QuueEYSNeep9SaAhbtykvLTU3/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
        <li className="faceDetection">
          <iframe
            title="faceDetection"
            src="https://drive.google.com/file/d/1Xfjb_TO9cZep-aFkyEdqXyfBrBnjXERX/preview"
            width="225"
            height="135"
          ></iframe>
        </li>
        <li className="workoutTracker">
          <iframe
            title="workoutTracker"
            src="https://drive.google.com/file/d/1Dy7SE3UpQTHYDaGyxF6ZgkOgcfaYpQlL/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
        <li className="burgerEater">
          <iframe
            title="burgerEater"
            src="https://drive.google.com/file/d/1Lez8QWtVvTuA5Uh2qjYhW2TxDd0NIVO8/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
        <li className="employeeTracker">
          <iframe
            title="employeeTracker"
            src="https://drive.google.com/file/d/1mNiHPiCY5DaxB76Whec5iXRHCV-vu5Z9/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
        <li className="EngineerTeamBuilder">
          <iframe
            title="EngineerTeamBuilder"
            src="https://drive.google.com/file/d/126zw2wcuQ-f1gKoTZEQYDk8Y5_1B1Chu/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
        <li className="readmeGen">
          <iframe
            title="readmeGen"
            src="https://drive.google.com/file/d/1K1BbWfxK_noSBJQwz6yZ5IBeZqrGWJ5i/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
        <li className="passGen">
          <iframe
            title="passGen"
            src="https://drive.google.com/file/d/1r7fd084DNBptw5f3AQ4zzymCNCfLWb4S/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
        <li className="codeRefractoring">
          <iframe
            title="codeRefractoring"
            src="https://drive.google.com/file/d/1KB_Qr2AMBq8u1wM0sDWj4DmIfYoYi_zd/preview"
            width="235"
            height="135"
          ></iframe>
        </li>
      </ul>
      <Footer />
    </div>
  );
}
export default Portfolio;
