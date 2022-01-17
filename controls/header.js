import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = ({ hamburgerMenuOpen, setHamburgerMenuOpen }) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [uiState, setUIState] = useState({});
  useEffect(() => {
    window.addEventListener("scroll", UpdateNavBar);
    return () => {
      window.removeEventListener("scroll", UpdateNavBar);
      setNavbarActive(false);
      document.body.classList.remove("no_scroll");
    };
  }, []);
  const UpdateNavBar = () => {
    window.scrollY >= 54 ? setNavbarActive(true) : setNavbarActive(false);
  };
  const OpenMenu = () => {
    if (!hamburgerMenuOpen) {
      document.body.classList.add("no_scroll");
      setHamburgerMenuOpen(true);
      let uiState = { navBarState: navbarActive };
      setUIState(uiState);
      setNavbarActive(false);
    } else {
      document.body.classList.remove("no_scroll");
      setHamburgerMenuOpen(false);
      setNavbarActive(uiState.navBarState);
    }
  };
  return (
    <header
      className={`${styles.header_container} ${
        navbarActive ? styles.navbar_active : ""
      }`}
    >
      <div
        className={`${styles.nav_overlay} ${
          hamburgerMenuOpen ? styles.menu_open : ""
        }`}
      >
        <ul className={styles.nav_menu}>
          <li className={styles.nav_menu_item}>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className={styles.nav_menu_item}>
            <Link href="/schedule">
              <a>SCHEDULE</a>
            </Link>
          </li>
          <li className={styles.nav_menu_item}>
            <Link href="/instructors">
              <a>INSTRUCTORS</a>
            </Link>
          </li>
          <li className={styles.nav_menu_item}>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.headline} ${
          hamburgerMenuOpen ? styles.hamburger_menu_open : ""
        }`}
      >
        <Link href="/" passHref>
          <h1>
            <a>
              <span className={styles.drop_cap}>A</span>LLIED JIU JITSU
            </a>
          </h1>
        </Link>
      </div>
      <nav
        className={`${styles.nav} ${
          hamburgerMenuOpen ? styles.hamburger_menu_open : ""
        }`}
        onClick={OpenMenu}
      >
        <div
          className={`${styles.burger} ${
            hamburgerMenuOpen ? styles.hamburger_menu_open : ""
          }`}
        ></div>
      </nav>
    </header>
  );
};

export default Header;
