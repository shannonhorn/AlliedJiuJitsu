import Head from "next/head";
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
      <Head>
        <title>Allied Jiu Jitsu in Peoria and Cottonwood AZ</title>
        <script
          defer
          data-domain="alliedjiujitsu.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <meta
          name="description"
          content="Allied Jiu Jitsu is a premier Brazilian Jiu Jitsu academy with locations in Peoria and Cottonwood, Arizona. We also offer fitness and striking classes for both adults and youth and concealed carry tactical self-defense seminars. Call us today or drop by to check things out FREE!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
