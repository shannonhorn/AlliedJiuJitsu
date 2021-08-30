import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = ({ hamburgerMenuOpen, setHamburgerMenuOpen }) => {
  const [navbarActive, setNavbarActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", UpdateNavBar);
    return () => window.removeEventListener("scroll", UpdateNavBar);
  }, []);
  const UpdateNavBar = () => {
    window.scrollY >= 54 ? setNavbarActive(true) : setNavbarActive(false);
  };
  const OpenMenu = () => {
    if (!hamburgerMenuOpen) {
      document.body.classList.add("no_scroll");
      setHamburgerMenuOpen(true);
    } else {
      document.body.classList.remove("no_scroll");
      setHamburgerMenuOpen(false);
    }
  };
  return (
    <header
      className={`${styles.header_container} ${
        navbarActive ? styles.navbar_active : ""
      }`}
    >
      <div
        className={`${styles.headline} ${
          hamburgerMenuOpen ? styles.hamburger_menu_open : ""
        }`}
      >
        <span className={styles.drop_cap}>A</span>LLIED JIU JITSU
      </div>
      <nav
        className={`${styles.nav} ${
          hamburgerMenuOpen ? styles.hamburger_menu_open : ""
        }`}
        onClick={OpenMenu}
      >
        <div className={styles.burger}></div>
        <div
          className={`${styles.nav_overlay} ${
            hamburgerMenuOpen ? styles.menu_open : ""
          }`}
        ></div>
      </nav>
    </header>
  );
};

export default Header;
