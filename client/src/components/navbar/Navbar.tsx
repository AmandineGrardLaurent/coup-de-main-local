import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={style.brandContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" className={style.image} />
        </Link>
        <h1>Coup de main local</h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <button type="button">Accueil</button>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <button type="button">Services locaux</button>
          </Link>
        </li>
        <li>
          <Link to="/helpers">
            <button type="button">Annonces d'entraide</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
