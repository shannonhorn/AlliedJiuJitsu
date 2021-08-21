import styles from "../styles/Marquee.module.css";

const Marquee = () => (
  <section className={styles.marquee}>
    <div className={styles.marquee_copy}>
      <h1 className={`${styles.headline} ${styles.animatePopIn}`}>
        Allied Jiu Jitsu
      </h1>
      <h2
        className={`${styles.title} ${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        PEORIA
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        10100 West Lake Pleasant Parkway
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        Suite 1300
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        Peoria AZ 85382
      </h2>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        ‭<a href="tel:6027033067">(602) 703-3067</a>‬
      </h2>
      <hr className={`${styles.separator} ${styles.animatePopIn}`} />
      <h2
        className={`${styles.title} ${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        COTTONWOOD
      </h2>
    </div>
  </section>
);
export default Marquee;
