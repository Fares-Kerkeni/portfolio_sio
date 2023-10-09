import style from "./nav.module.scss";
import { Link } from "react-router-dom";
import logo_berger from "../../assets/menu.png";
function Nav() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.logo}>
          <p>Fares Kerkeni</p>
        </div>
        <div className={style.lien}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/parcours">Parcours</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/situation_pro">Situation Professionel</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/veille_juridique">veille juridique</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/veille_technologique">veille technologique</Link>
            </li>
          </ul>
        </div>
        <div className={style.logo_berger}>
          <img src={logo_berger} alt="" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
