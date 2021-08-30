import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = ({ hamburgerMenuOpen, setHamburgerMenuOpen }) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [uiState, setUIState] = useState({});
  useEffect(() => {
    window.addEventListener("scroll", UpdateNavBar);
    const smoothScroll = (destination, duration) => {
      const target = document.querySelector(destination);
      const targetPosition = target.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (startTime === null) {
          startTime = currentTime;
        }
        let timeElapsed = currentTime - startTime;
        let runAnimation = easeInOutQuad(
          timeElapsed,
          startPosition,
          targetPosition,
          duration
        );
        window.scrollTo(0, runAnimation);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      let easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    };
    document
      .querySelector(".scroll-to-top")
      .addEventListener("click", () => smoothScroll("#top", 400));
    return () => window.removeEventListener("scroll", UpdateNavBar);
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`scroll-to-top ${styles.icon} ${styles.icon_arrow_up} ${
          navbarActive ? styles.scroll_to_top_active : ""
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 10.25L12 4.75L6.75 10.25"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.25V5.75"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
