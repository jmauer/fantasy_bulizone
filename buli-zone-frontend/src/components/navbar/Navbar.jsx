import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img src={getImageUrl("navbar/icon.png")} alt="BZF Logo" className={styles.icon}/>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("navbar/closeIcon.png")
              : getImageUrl("navbar/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#table">Tabelle</a>
          </li>
          <li>
            <a href="#teams">Teams</a>
          </li>
          <li>
            <a href="#players">Spieler</a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;