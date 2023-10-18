import React, { useEffect, useState, useCallback } from "react";
import styles from "./nav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { chagevalue } from "../../store/slice/popupSlice";
import { Link } from "react-router-dom";
import { throttle } from "lodash";
import { positionY } from "../../store/slice/scrollpositionSlice";

function Nav() {
  const position = useSelector((state) => state.scrollPosition.position);
  const [navVisible, setNavVisible] = useState(true);
  const dispatch = useDispatch();

  // Mettez à jour uniquement la position lors du défilement
  const handleScroll = useCallback(
    throttle(() => {
      dispatch(positionY());
    }, 200),
    [dispatch]
  );

  // Écoutez les changements de la valeur 'position' pour mettre à jour 'navVisible'
  useEffect(() => {
    const shouldBeVisible = position < 80;
    if (navVisible !== shouldBeVisible) {
      setNavVisible(shouldBeVisible);
    }
  }, [position, navVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {navVisible ? (
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <p>Fares Kerkeni</p>
          </div>
          <div className={styles.lien}>
            {[
              "",
              "parcours",
              "situations pro",
              "veille juridique",
              "veille technologique",
            ].map((path) => (
              <ul key={path}>
                <li>
                  <Link to={`/${path}`}>{path || "Home"}</Link>
                </li>
              </ul>
            ))}
          </div>
        </nav>
      ) : (
        <div className={styles.container_button}>
          <button
            onClick={() => dispatch(chagevalue())}
            className={styles.button}
          >
            MENU
          </button>
        </div>
      )}
    </>
  );
}

export default Nav;
