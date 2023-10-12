import style from "./nav.module.scss";
import { useDispatch } from "react-redux";
import { chagevalue } from "../../store/slice/popupSlice";
import { Link } from "react-router-dom";

function Nav() {
  const dispatch = useDispatch();
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
              <Link to="/situations_pro">Situation Professionel</Link>
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
          <button
            onClick={() => dispatch(chagevalue())}
            className={style.button}
          >
            MENU
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
