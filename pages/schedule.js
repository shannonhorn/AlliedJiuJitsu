import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../controls/header';
import Footer from '../controls/footer';
import styles from '../styles/Schedule.module.css';

const Schedule = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <a id='top'></a>
      <main className={styles.main}>
        <Header
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
        />
        <section aria-label='marquee' className={styles.marquee}>
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
          aria-label='schedule'
          className={`${styles.schedule} ${styles.animatePopIn} flow`}
        >
          <svg
            className='icon'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z'></path>
            <path d='M8 4.75V8.25'></path>
            <path d='M16 4.75V8.25'></path>
            <path d='M7.75 10.75H16.25'></path>
          </svg>
          <h3 className='headline'>WHEN TO MEET</h3>
          <section className={`${styles.schedule_grid} flow`}>
            {/* <section className={styles.schedule_copy}>
              NOTE: The schedule below applies to our HQ location in Peoria, AZ.
              If you&apos;re looking for the schedule for our Cottonwood, AZ
              location,{' '}
              <Link href='https://cottonwoodbjj.com'>
                <a target='_blank'>click here</a>
              </Link>
              .
            </section> */}
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                UPCOMING SPECIAL EVENTS
              </div>
              <ul className={styles.schedule_special_events}>
                {/* <li>
                  <div className={styles.schedule_heading}>
                    February 12, 2022
                  </div>
                  <div>AZ International Open</div>
                  <Link href="https://azbjjf.smoothcomp.com/en/event/6241">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    February 19, 2022 @ 1 pm
                  </div>
                  <div>Paul Nava Seminar</div>
                  <div>Allied Jiu Jitsu Cottonwood</div>
                  <Link href="https://cottonwoodbjj.com">
                    <a target="_blank">Click here for details</a>
                  </Link>
                  <div>
                    <strong>FREE for Ares members</strong>
                  </div>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    February 26, 2022
                  </div>
                  <div>American Grappling Federation</div>
                  <div>Legacy Sports USA, Mesa, AZ</div>
                  <Link href="https://americangrapplingfederation.com/tournaments/310?mc_cid=7c6ea5a99a&mc_eid=346309a88a">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    March 5, 2022 @ 12 pm
                  </div>
                  <div>Ares Super Seminar</div>
                  <div>Ares Arizona BJJ</div>
                  <div>$40 (includes lunch)</div>
                  <Link href="https://aresazbjj.com">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>March 12, 2022</div>
                  <div>Jiu Jitsu World League</div>
                  <div>Westworld, Scottsdale, AZ</div>
                  <Link href="https://www.jjworldleague.com/events/phx-2022-adults">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    March 19, 2022 @ 5 pm
                  </div>
                  <div>Fight 2 Win</div>
                  <div>Phoenix, AZ</div>
                  <div>
                    Come out to support London, Tyler, and other Ares members.
                    When purchasing tickets, be sure to select London or Tyler
                    as your athlete.
                  </div>
                  <Link href="http://www.f2wbjj.com/f2w-197-march-19th-phoenix/">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    March 26, 2022 @ 4 pm
                  </div>
                  <div>Samurai Soul Championship</div>
                  <div>Surprise, AZ</div>
                  <div>
                    Come out to support London competing at a new promotion
                    owned by friends of Allied
                  </div>
                  <Link href="https://www.eventbrite.com/e/samurai-soul-championship-1-tickets-263411850937">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>April 3, 2022</div>
                  <div>Grappling Industries</div>
                  <div>Victorium, Scottsdale, AZ</div>
                  <Link href="https://grapplingindustries.smoothcomp.com/en/event/5424">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    April 5 - 10, 2022
                  </div>
                  <div>IBJJF Pan Championship</div>
                  <div>Kissimmee, FL</div>
                  <Link href="https://ibjjf.com/events/pan-ibjjf-jiu-jitsu-championship-2022">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>April 16, 2022</div>
                  <div>Copa Bela (female only)</div>
                  <div>Bell Bank Park, Mesa, AZ</div>
                  <Link href="https://azbjjf.smoothcomp.com/en/event/6330">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>April 16, 2022</div>
                  <div>Kids Cup</div>
                  <div>Bell Bank Park, Mesa, AZ</div>
                  <Link href="https://azbjjf.smoothcomp.com/en/event/6332">
                    <a target="_blank">Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    June 1 - 5, 2022
                  </div>
                  <div>IBJJF World Championship</div>
                  <div>Long Beach, CA</div>
                  <div>
                    https://ibjjf.com/events/world-ibjjf-jiu-jitsu-championship-2022
                  </div>
                </li>
                <li>
                  <div className={styles.schedule_heading}>
                    June 1 - 2, 2022
                  </div>
                  <div>IBJJF International Masters North America</div>
                  <div>Long Beach, CA</div>
                  <div>
                    https://ibjjf.com/events/master-international-jiu-jitsu-championship-north-america-2022
                  </div>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    June 17 - 19, 2022
                  </div>
                  <div>Allied Camp</div>
                  <div>Cottonwood, AZ</div>
                  <div>more information soon...</div>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>June 25, 2022</div>
                  <div>AZ State Championship</div>
                  <div>Bell Bank Park, Mesa, AZ</div>
                  <Link href='https://azbjjf.smoothcomp.com/en/event/6474'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>
                    June 30 - July 2, 2022
                  </div>
                  <div>American Nationals</div>
                  <div>Las Vegas, NV</div>
                  <div>
                    https://ibjjf.com/events/american-national-ibjjf-jiu-jitsu-championship-2022
                  </div>
                </li>
                <li>
                  <div className={styles.schedule_heading}>July 2, 2022</div>
                  <div>American Nationals Kids</div>
                  <div>Las Vegas, NV</div>
                  <div>
                    https://ibjjf.com/events/american-national-kids-ibjjf-jiu-jitsu-championship-2022
                  </div>
                </li> */}
                {/* <li>
                  <div className={styles.schedule_heading}>July 9, 2022</div>
                  <div>Grappling Industries</div>
                  <div>Victorium, Scottsdale, AZ</div>
                  <div>
                    https://grapplingindustries.smoothcomp.com/en/event/5592
                  </div>
                </li>
                <li>
                  <div className={styles.schedule_heading}>July 23, 2022</div>
                  <div>IBJJF Kids Pan Championship</div>
                  <div>Kissimmee, FL</div>
                  <Link href='https://ibjjf.com/events/pan-kids-ibjjf-jiu-jitsu-championship-2022'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li> */}
                <li>
                  <div className={styles.schedule_heading}>
                    July 30 - 31, 2022
                  </div>
                  <div>IBJJF Phoenix Open</div>
                  <div>Scottsdale, AZ</div>
                  <Link href='https://ibjjf.com/events/phoenix-international-open-ibjjf-jiu-jitsu-championship-2022'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>
                    July 30 - 31, 2022
                  </div>
                  <div>IBJJF KIDS Phoenix Open</div>
                  <div>Scottsdale, AZ</div>
                  <Link href='https://ibjjf.com/events/phoenix-kids-international-open-ibjjf-jiu-jitsu-championship-2022'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>August 13, 2022</div>
                  <div>Arizona State Novice Cup (White belt only)</div>
                  <div>Mesa, AZ</div>
                  <Link href='https://azbjjf.smoothcomp.com/en/event/7099'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>August 13, 2022</div>
                  <div>Arizona State No Gi Championship</div>
                  <div>Mesa, AZ</div>
                  <Link href='https://azbjjf.smoothcomp.com/en/event/7233'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>
                    September 1 - 3, 2022
                  </div>
                  <div>IBJJF World Master Championship</div>
                  <div>Las Vegas, NV</div>
                  <Link href='https://ibjjf.com/events/world-master-ibjjf-jiu-jitsu-championship-2022'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>
                    September 1 - 2, 2022
                  </div>
                  <div>IBJJF Jiu Jitsu Con International Championship</div>
                  <div>Las Vegas, NV</div>
                  <Link href='https://ibjjf.com/events/jiu-jitsu-con-international-2022'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>
                    September 1 - 2, 2022
                  </div>
                  <div>
                    IBJJF Jiu Jitsu Con NOVICE Championship (white belts)
                  </div>
                  <div>Las Vegas, NV</div>
                  <Link href='https://ibjjf.com/events/jiu-jitsu-con-novice-international-2022'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>
                    September 3, 2022
                  </div>
                  <div>IBJJF Jiu Jitsu Con KIDS Championship (white belts)</div>
                  <div>Las Vegas, NV</div>
                  <Link href='https://ibjjf.com/events/jiu-jitsu-con-kids-international-2022'>
                    <a target='_blank'>Click here for details</a>
                  </Link>
                </li>
                <li>
                  <div className={styles.schedule_heading}>October 2, 2022</div>
                  <div>Grappling Industries</div>
                  <div>Victorium, Scottsdale, AZ</div>
                  <div>
                    https://grapplingindustries.smoothcomp.com/en/event/6280
                  </div>
                </li>
                <li>
                  <div className={styles.schedule_heading}>October 15, 2022</div>
                  <div>Southwest Classic</div>
                  <div>Mesa, AZ</div>
                  <div>
                  https://azbjjf.smoothcomp.com/en/event/7858
                  </div>
                </li>
                <li>
                  <div className={styles.schedule_heading}>December 10, 2022</div>
                  <div>Masters Cup</div>
                  <div>Mesa, AZ</div>
                  <div>
                  https://azbjjf.smoothcomp.com/en/event/7897
                  </div>
                </li>
                <li>
                  <div className={styles.schedule_heading}>December 10, 2022</div>
                  <div>Kids Cup</div>
                  <div>Mesa, AZ</div>
                  <div>
                  https://azbjjf.smoothcomp.com/en/event/7896
                  </div>
                </li>
              </ul>
              <div className={styles.schedule_title_separator}></div>
            </section>
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                Monday
              </div>
              <ul>
                <li>
                  <span className={styles.schedule_heading}>6:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>9:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>4:30 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (Gi - ages 3 - 5)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (Gi - ages 6+)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Teen Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Jiu Jitsu Fundamentals (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                {/* <li>
                  <span className={styles.schedule_heading}>7:00 pm</span>
                  <span className={styles.schedule_name}>
                    Adult Competition Jiu Jitsu Training (Gi)
                  </span>
                </li> */}
              </ul>
            </section>
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                Tuesday
              </div>
              <ul>
                <li>
                  <span className={styles.schedule_heading}>6:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi, FREE For vets, police, firemen, first
                    responders, and Allied members)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>9:00 am</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (Gi, homeschool students)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>10:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>4:30 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (No Gi - ages 3 - 5)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (No Gi - ages 6+)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (No Gi)
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                Wednesday
              </div>
              <ul>
                <li>
                  <span className={styles.schedule_heading}>6:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>9:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>4:30 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (Gi - ages 3 - 5)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (Gi - ages 6+)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Teen Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Jiu Jitsu Fundamentals (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                {/* <li>
                  <span className={styles.schedule_heading}>7:00 pm</span>
                  <span className={styles.schedule_name}>
                    Adults Advanced Jiu Jitsu (Gi with Livio Ribeiro, blue belt
                    and up, $20 drop in fee for non-Allied members)
                  </span>
                </li> */}
              </ul>
            </section>
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                Thursday
              </div>
              <ul>
                <li>
                  <span className={styles.schedule_heading}>6:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi, FREE For vets, police, firemen, first
                    responders, and Allied members)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>9:00 am</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (Gi, homeschool students)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>10:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>4:30 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (No Gi - ages 3 - 5)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (No Gi - ages 6+)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Teen Jiu Jitsu (No Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (No Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Youth Competition Jiu Jitsu Training (invite only)
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                Friday
              </div>
              <ul>
                <li>
                  <span className={styles.schedule_heading}>9:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>5:00 pm</span>
                  <span className={styles.schedule_name}>
                    Women-Only Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>6:00 pm</span>
                  <span className={styles.schedule_name}>
                    Open Mat (everyone welcome, no mat fees)
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                Saturday
              </div>
              <ul>
                <li>
                  <span className={styles.schedule_heading}>6:00 am</span>
                  <span className={styles.schedule_name}>
                    Allied Functional Fitness (Af
                    <span className={styles.super}>2</span>)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>9:00 am</span>
                  <span className={styles.schedule_name}>
                    Kids Jiu Jitsu (Gi)
                  </span>
                </li>
                <li>
                  <span className={styles.schedule_heading}>10:00 am</span>
                  <span className={styles.schedule_name}>
                    Adults Jiu Jitsu (Gi)
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <div className={`${styles.title} ${styles.schedule_title}`}>
                Sunday
              </div>
              <ul>
                <li>
                  <span className={styles.schedule_heading}>10:00 am</span>
                  <span className={styles.schedule_name}>
                    Sucka-Free Open Mat (everyone welcome, no mat fees)
                  </span>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
};

Schedule.title = 'Check out our complete class schedule';
Schedule.description =
  'Allied offers a whole gamut of classes that focus on strengthening your jiu jitsu game.';
export default Schedule;
