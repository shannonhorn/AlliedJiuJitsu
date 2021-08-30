import styles from "../styles/Marquee.module.css";

const Marquee = () => (
  <section aria-label="marquee" className={styles.marquee}>
    <div className={styles.marquee_copy}>
      <h1 className={`${styles.headline} ${styles.animatePopIn}`}>
        Allied Jiu Jitsu
      </h1>
      <h2
        className={`${styles.title} ${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        PEORIA
      </h2>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.google.com/maps/place/10100+W+Lake+Pleasant+Pkwy+%231300,+Peoria,+AZ+85382/@33.6768804,-112.2784543,17z/data=!3m1!4b1!4m5!3m4!1s0x872b5d249b610ffb:0x6c6644a6cb4ac0a!8m2!3d33.6768804!4d-112.2762656"
      >
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
      </a>
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
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.google.com/maps/place/1645+E+Cottonwood+St,+Cottonwood,+AZ+86326/@34.728514,-112.0117213,17z/data=!3m1!4b1!4m5!3m4!1s0x872d05bc7a420079:0x87077aa553567843!8m2!3d34.728514!4d-112.0095326"
      >
        <h2
          className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
        >
          1645 East Cottonwood Street
        </h2>
        <h2
          className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
        >
          Cottonwood AZ 86326
        </h2>
      </a>
      <h2
        className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
      >
        ‭<a href="tel:9282021229">(928) 202-1229</a>‬
      </h2>
    </div>
  </section>
);
export default Marquee;
