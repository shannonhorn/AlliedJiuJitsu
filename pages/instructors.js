import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../controls/header";
import Footer from "../controls/footer";
import styles from "../styles/Instructors.module.css";
import instructorThomas from "../public/images/instructorThomas.jpg";
import instructorJeff from "../public/images/instructorJeff.jpg";
import instructorLondon from "../public/images/instructorLondon.jpg";
import instructorShadrack from "../public/images/instructorShadrack.jpg";
import instructorDave from "../public/images/instructorDave.jpg";
import instructorTim from "../public/images/instructorTim.jpg";
import instructorTyler from "../public/images/instructorTyler.jpg";
import instructorNinja from "../public/images/instructorNinja.jpg";

const Instructors = () => {
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
              INSTRUCTORS
            </h2>
            <h2
              className={`${styles.headline} ${styles.headline_sub} ${styles.animatePopIn}`}
            >
              Meet the team!
            </h2>
          </div>
        </section>
        <section
          aria-label="instructors"
          className={`${styles.instructors} ${styles.animatePopIn} flow`}
        >
          <svg
            className="icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"></path>
            <path d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"></path>
            <circle cx="9.5" cy="7.5" r="2.75"></circle>
            <path d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"></path>
          </svg>
          <h3 className="headline">OUR TEAM</h3>
          <section className={`${styles.instructors_grid} flow`}>
            <article>
              <Image
                src={instructorThomas}
                alt="Professor Thomas Reichenberger."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">Thomas Reichenberger</h4>
              <ul>
                <li>
                  First degree Brazilian Jiu Jitsu black belt under{" "}
                  <Link href="https://aresbjjgoodyear.com/Instructors/Professor-Osvaldo-Queixinho-Moizinho">
                    <a>Professor Osvaldo Queixinho Moizinho (&quot;Q&quot;)</a>
                  </Link>
                </li>
                <li>Began his jiu jitsu journey in 2009</li>
                <li>CPR, first aid, AED certified</li>
                <li>Fingerprint clearance</li>
                <li>Licensed to teach in childcare facilities</li>
              </ul>
            </article>
            <article>
              <Image
                src={instructorJeff}
                alt="Coach Jeff Cook."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">Jeff Cook</h4>
              <ul>
                <li>
                  Brazilian Jiu Jitsu black belt under{" "}
                  <Link href="https://www.bjjheroes.com/bjj-fighters/john-crouch">
                    <a>Professor John Crouch</a>
                  </Link>
                </li>
                <li>
                  Certified Special Operations Combatives Instructor (green
                  beret)
                </li>
                <li>Lead Instructor of Allied Tactical seminars (Gun Jitsu)</li>
              </ul>
            </article>
            <article>
              <Image
                src={instructorLondon}
                alt="Coach London Horn."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">London Horn</h4>
              <ul>
                <li>Brazilian Jiu Jitsu purple belt</li>
                <li>Extremely active jiu jitsu competitor</li>
                <li>IBJJF 2021 Worlds podium</li>
                <li>Licensed EMT and CPR certified</li>
                <li>Competitive power lifter</li>
              </ul>
            </article>
            <article>
              <Image
                src={instructorShadrack}
                alt="Coach Shadrack Miller."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">Shadrack Miller</h4>
              <ul>
                <li>Head coach Allied Cottonwood</li>
                <li>Brazilian Jiu Jitsu purple belt</li>
                <li>US Army Combatives Certified</li>
                <li>CrossFit Level 1 Certified</li>
                <li>CPR, first aid, AED certified</li>
                <li>Enjoys functional fitness training</li>
              </ul>
            </article>
            <article>
              <Image
                src={instructorDave}
                alt="Coach Dave Wilson."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">Dave Wilson</h4>
              <ul>
                <li>Brazilian Jiu Jitsu blue belt</li>
                <li>Allied Functional Fitness coach</li>
              </ul>
            </article>
            <article>
              <Image
                src={instructorTim}
                alt="Coach Tim Metcalf."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">Tim Metcalf</h4>
              <ul>
                <li>Brazilian Jiu Jitsu purple belt</li>
                <li>Youth competition instructor</li>
                <li>CPR, first aid, AED certified</li>
                <li>Fingerprint clearance</li>
              </ul>
            </article>
            <article>
              <Image
                src={instructorTyler}
                alt="Coach Tyler Metcalf."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">Tyler Metcalf</h4>
              <ul>
                <li>Brazilian Jiu Jitsu orange belt</li>
                <li>Extremely active jiu jitsu competitor</li>
                <li>Youth competition instructor</li>
              </ul>
            </article>
            <article>
              <Image
                src={instructorNinja}
                alt="Coach Chris Malicdem."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="3375"
                width="6000"
              />
              <h4 className="headline_sub title">Chris Malicdem</h4>
              <ul>
                <li>
                  Brazilian Jiu Jitsu black belt under{" "}
                  <Link href="https://www.bjjheroes.com/bjj-fighters/john-crouch">
                    <a>Professor John Crouch</a>
                  </Link>
                </li>
              </ul>
            </article>
            <article>Taylor Mohr</article>
            <article>Josh Dayberry</article>
            <article>Mike Grandinetti</article>
            <article>Josh Beno</article>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
};

Instructors.title = "Meet the Allied team";
Instructors.description =
  "Allied team members are respected and proven members of the jiu jitsu community. They are active competitors and recognized instructors.";
export default Instructors;
