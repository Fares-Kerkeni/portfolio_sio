import style from "./app.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { chagevalue } from "./store/slice/popupSlice";
import { chagecouleur } from "./store/slice/changecolorsSlice";
import { motion } from "framer-motion";
import Nav from "./components/nav/nav";
import { Link } from "react-router-dom";
import "animate.css";
import img_moi from "./assets/moi.png";
import coiffeur from "./assets/coiffeur.png";
import flag from "./assets/flag.png";
// import plante from "./assets/plante.png";
import fleche_droite from "./assets/fleche_droite.png";
function App() {
  const count = useSelector((state) => state.popup.value); // Correction ici
  const couleur = useSelector((state) => state.changecolors.couleur); // Correction ici
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(chagecouleur());
    dispatch(chagevalue());
  };

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
              <div className={style.section1}>
                <div className={style.container_header}>
                  <div className={style.container_name}>
                    <p>KERKENI</p>
                    <p>FARES</p>
                  </div>
                  <div className={style.container_description}>
                    <div className={style.description_img}>
                      <div className={style.img}>
                        <img src={img_moi} alt="" />
                      </div>
                      <div className={style.description}>
                        <div className={style.title}>
                          Front-End React developer
                        </div>
                        <div className={style.contenue}>
                          Hi, i'm Fares Kerkeni A passionate Front-End React
                          developer from Paris.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.section2}>
                <div className={style.title}>Explore my works</div>
                <div className={style.container_works}>
                  <div className={style.container_project}>
                    <div className={style.container_project1}>
                      <div className={style.container_link}>
                        <div className={style.title}></div>
                      </div>
                      <div className={style.container_img}>
                        <img src={coiffeur} alt="" className={style.coiffeur} />
                      </div>
                    </div>
                  </div>
                  <div className={style.container_project}>
                    <div className={style.container_project2}>
                      <div className={style.button_all_woks}>
                        <Link to="/parcours" className={style.link_text}>
                          <p>Lets Go in</p>
                          <p>The All Works</p>
                          <img
                            src={fleche_droite}
                            className={style.img_fleche}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className={style.container_img_link}>
                        <div className={style.img}>
                          <img src={flag} alt="" />
                        </div>
                        <div className={style.link}></div>
                      </div>
                    </div>
                  </div>
                  <div className={style.container_project}>
                    <div className={style.container_project3}>
                      <div className={style.link}></div>
                      <div className={style.img}>
                        <img src={coiffeur} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default App;
