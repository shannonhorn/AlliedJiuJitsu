import React, { useState } from "react";
import Header from "../controls/header";
import Marquee from "../controls/marquee";
import Newsletter from "../controls/newsletter";
import Programs from "../controls/programs";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <a id="top"></a>
      <main className={styles.main}>
        <Header
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
        />
        <Marquee />
        <Newsletter />
        <Programs />
      </main>
    </div>
  );
};

export default Home;
