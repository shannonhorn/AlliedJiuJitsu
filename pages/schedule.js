import React, { useState } from "react";
import Header from "../controls/header";
import Footer from "../controls/footer";
import styles from "../styles/Schedule.module.css";

const Schedule = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <a id="top"></a>
      <main className={styles.main}>
        <Header
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
        />
        <section aria-label="marquee" className={styles.marquee}>
          <div className={styles.marquee_copy}>
            <h2
              className={`${styles.title} ${styles.headline} ${styles.animatePopIn}`}
            >
              SCHEDULE
            </h2>
            <h2
              className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
            >
              Check out what&apos;s happening!
            </h2>
          </div>
        </section>
        <section
          aria-label="schedule"
          className={`${styles.schedule} ${styles.animatePopIn} flow`}
        >
          <svg
            className="icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"></path>
            <path d="M8 4.75V8.25"></path>
            <path d="M16 4.75V8.25"></path>
            <path d="M7.75 10.75H16.25"></path>
          </svg>
          <h3 className="headline">WHEN TO MEET</h3>
          <section className={styles.schedule_grid}>
            <div className="flow">
              <section>
                <div className={`${styles.title} ${styles.schedule_title}`}>
                  UPCOMING SPECIAL EVENTS
                </div>
                <div className={styles.schedule_title_separator}></div>
              </section>
              <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                  Monday
                </div>
              </section>
              <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                  Tuesday
                </div>
              </section>
              <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                  Wednesday
                </div>
              </section>
              <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                  Thursday
                </div>
              </section>
              <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                  Friday
                </div>
              </section>
              <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                  Saturday
                </div>
              </section>
              <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                  Sunday
                </div>
              </section>
            </div>
          </section>
        </section>
        <Footer/>
      </main>
    </div>
  );
};

Schedule.title = "Check out our complete class schedule";
Schedule.description =
  "Allied offers a whole gamut of classes that focus on strengthening your jiu jitsu game.";
export default Schedule;
