import style from "./app.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { chagevalue } from "./store/slice/popupSlice";
import { chagecouleur } from "./store/slice/changecolorsSlice";
import { motion } from "framer-motion";
import Nav from "./components/nav/nav";
import { Link } from "react-router-dom";
import "animate.css";
function App() {
  const count = useSelector((state) => state.popup.value); // Correction ici
  const maDiv = document.querySelector(".container_app");
  const couleur = useSelector((state) => state.changecolors.couleur); // Correction ici
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(chagecouleur());
    dispatch(chagevalue());
  };
  function ajouterClasseAuScroll() {
    if (window.scrollY > 100) {
      // Modifiez cette valeur selon votre besoin
      maDiv.classList.add("scroll");
    } else {
      maDiv.classList.remove("scroll");
    }
  }
  window.addEventListener("scroll", ajouterClasseAuScroll);
  return (
    console.log(couleur),
    (
      <>
        {count ? (
          <motion.div
            className={style.container_nav}
            style={{ backgroundColor: couleur }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={style.nav_close}>
              <button
                onClick={handleButtonClick}
                className={style.button_close}
              >
                CLOSE
              </button>
            </div>

            <div className={style.container_link_navigation}>
              <div className={style.lien}>
                <ul>
                  <li>
                    <p>01</p>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>02</p>
                    <Link to="/parcours">Parcours</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>03</p>
                    <Link to="/situations_pro">Situation Professionel</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>04</p>
                    <Link to="/veille_juridique">veille juridique</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>05</p>
                    <Link to="/veille_technologique">veille technologique</Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className={style.container_app}>
            <Nav />
            <div className={style.container_home}>
              <div className={style.section1}></div>
              <div className={style.section2}></div>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default App;
