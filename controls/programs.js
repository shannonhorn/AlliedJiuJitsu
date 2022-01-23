import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Programs.module.css";
import imageHomeJiuJitsu from "../public/images/homeJiuJitsu.jpg";
import imageHomeJiuJitsuKids from "../public/images/homeJiuJitsuKids.jpg";
import imageHomeJiuJitsuVets from "../public/images/homeJiuJitsuVets.jpg";
import imageHomeFunctionalFitness from "../public/images/homeFunctionalFitness.jpg";
import imageHomeTactical from "../public/images/homeTactical.jpg";
import imageHomeYoga from "../public/images/homeYoga.jpg";
import imageHomeFunctionalFitnessRachel from "../public/images/homeFunctionalFitnessRachel.jpg";
import imageHomeTacticalJeff from "../public/images/homeTacticalJeff.jpg";
import imageHomeTacticalVideo from "../public/images/homeTacticalVideo.jpg";
import imageHomeCompeteKids from "../public/images/homeCompeteKids.jpg";
import imageHomeCompeteWorlds from "../public/images/homeCompeteWorlds.jpg";
import imageHomeWomen from "../public/images/homeJiuJitsuWomen.jpg";
import imageHomeWomen2 from "../public/images/homeJiuJitsuWomen2.jpg";

const Programs = () => {
  return (
    <section aria-label="programs" className={`${styles.programs} flow`}>
      <svg
        className="icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.6678 19.2857 19.6162C19.2857 21 17.5714 21 17.5714 21H13L10.75 19.75" />
        <path d="M9.42864 15.0036L8.5715 16.8486C8.5715 16.8486 4.71436 17.6678 4.71436 19.6162C4.71436 21 6.42864 21 6.42864 21H8.50007L10.7501 19.75L13.5001 18" />
        <path d="M3 15.9261C3 15.9261 5.14286 15.4649 6.42857 15.0036C7.71429 8.54595 11.5714 9.00721 12 9.00721C12.4286 9.00721 16.2857 8.54595 17.5714 15.0036C18.8571 15.4649 21 15.9261 21 15.9261" />
        <path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" />
      </svg>
      <h3 className="headline">PROGRAMS</h3>
      <section className={styles.programs_grid}>
        <article className="flow">
          <a id="jiujitsu"></a>
          <Image
            src={imageHomeJiuJitsu}
            alt="Allied Jiu Jitsu program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <h4 className="headline_sub title">Brazilian Jiu Jitsu</h4>
          <p>
            Do you dream of competing at a high level? Do you need to master
            practical, real-world self-defense so that you can apply it second
            nature? Are you interested in having a great time?
          </p>
          <p>
            Brazilian Jiu Jitsu will change your life. This is a bold statement.
            You won&apos;t understand it until you join the jiu jitsu community
            and embrace the lifestyle.
          </p>
          <Image
            src={imageHomeJiuJitsuKids}
            alt="Allied Jiu Jitsu kids jiu jitsu program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <p>
            When you join, you will immediately learn techniques that you can
            apply that day. You will bond with and create memories with amazing
            people who share your journey, struggles, and victories.
          </p>
          <p>
            We offer gi and no-gi classes for kids and adults!{" "}
            <Link href="/contact">
              <a>Contact us today</a>
            </Link>{" "}
            or drop by to check out a class FREE.
          </p>
          <Image
            src={imageHomeJiuJitsuVets}
            alt="Allied Jiu Jitsu vets and first responders jiu jitsu program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <p>
            Allied offers free jiu jitsu classes for military vets, police,
            firefighters, and first responders. These classes are every Tuesday
            and Thursday at 6 am and we are a proud member of{" "}
            <Link href="https://adoptacopbjj.org">
              <a>the Adopt-a-Cop BJJ</a>
            </Link>{" "}
            program.
          </p>
          <Image
            src={imageHomeWomen}
            alt="Allied Jiu Jitsu classes exclusively for women."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <Image
            src={imageHomeWomen2}
            alt="Allied Jiu Jitsu classes exclusively for women."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <p>
            Allied is adding classes exclusively for women. These classes will
            focus on the same aspects of the jiu jitsu lifestyle: self-defense,
            competition, and community.
          </p>
          <Image
            src={imageHomeCompeteWorlds}
            alt="Allied Jiu Jitsu competition team."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <Image
            src={imageHomeCompeteKids}
            alt="Allied Jiu Jitsu kids competition team."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <p>
            Allied is proudly affiliated with{" "}
            <Link href="http://www.aresbjj.com">
              <a>Ares BJJ</a>
            </Link>
            , directly under{" "}
            <Link href="https://aresbjjgoodyear.com/Instructors/Professor-Osvaldo-Queixinho-Moizinho">
              <a>Professor Osvaldo Queixinho Moizinho (&quot;Q&quot;)</a>
            </Link>
            . We have a growing team of active competitors and strive to
            represent our academy and team well at all levels of competition.
          </p>
        </article>
        <article className="flow">
          <a id="fitness"></a>
          <Image
            src={imageHomeFunctionalFitness}
            alt="Allied Functional Fitness program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <h4 className="headline_sub title">Allied Functional Fitness</h4>
          <p>
            ACE-certified coach Dave Wilson crafted a custom fitness regimen
            that combines bodyweight movements and uses battle ropes,
            kettlebells, sandbags, slam balls, and medicine balls. AF2
            emphasizes stamina, core strength, and flexibility and supports jiu
            jitsu and everyday body movements. Allied Functional Fitness will
          </p>

          <ul>
            <li>Get you in shape fast</li>
            <li>Improve your agility and flexibility</li>
            <li>Supplement your jiu jitsu game</li>
          </ul>

          <Image
            src={imageHomeFunctionalFitnessRachel}
            alt="Allied Functional Fitness working out."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <p>
            Classes last approximately 45 minutes. Class size is limited. Be
            sure to sign up when at the academy or send us a message online to
            confirm your attendance.
          </p>
          <p className={styles.quotation}>
            &quot;I think Allied fitness classes are a perfect compliment to my
            jiu jitsu training. I&apos;ve noticed a considerable difference in
            my stamina and how I feel during training. It&apos;s also been
            beneficial in other areas of training outside of jiu jitsu.&quot;
            <br />
            &mdash;Kollin Haws
          </p>
          <p>
            Do you want to be capable or comfortable? Step out of your comfort
            zone and try an AF2 class. If you&apos;re ready to sweat and meet
            your fitness goals,{" "}
            <Link href="/contact">
              <a>Contact us today</a>
            </Link>
            !
          </p>
        </article>
        <article className="flow">
          <a id="tactical"></a>
          <Image
            src={imageHomeTactical}
            alt="Allied Tactical program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <h4 className="headline_sub title">Allied Tactical</h4>
          <p>
            Do you carry (or plan to carry) a concealed weapon? Allied coach,
            Jeff Cook, will lead the seminar and share the knowledge he acquired
            as a green beret. The course is approximately four hours long and
            packed with several days worth of practical techniques and live
            scenarios.
          </p>
          <Image
            src={imageHomeTacticalJeff}
            alt="Allied Tactical coach Jeff Cook."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <Link href="https://youtu.be/oabEeiqDDbQ">
            <a target="_blank">
              <Image
                src={imageHomeTacticalVideo}
                alt="Allied Tactical promotional video."
                objectFit="cover"
                objectPosition="center top"
                layout="intrinsic"
                height="450"
                width="800"
              />
            </a>
          </Link>
          <figcaption>
            (Click the thumbnail above to view tactical promo)
          </figcaption>
          <p>
            Attendees should wear casual street attire such as jeans, a t-shirt,
            and mat-friendly clothing (no exposed zippers, buttons, or rivets).
            Shoes will NOT be worn during the course, and BE SURE TO WEAR A
            BELT. A mouthguard is optional.
          </p>
        </article>
        <article className="flow">
          <a id="yoga"></a>
          <Image
            src={imageHomeYoga}
            alt="Allied Yoga program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="450"
            width="800"
          />
          <h4 className="headline_sub title">Allied Yoga</h4>
          <p>
            We live and breathe jiu jitsu, but jiu jitsu techniques often cause
            poor posture and skeletomuscular imbalances. Yoga is the perfect
            complement to your jiu jitsu game. Yoga will improve your
            flexibility, agility, help alleviate aches and pain, and bring on
            good mental vibes.
          </p>
        </article>
      </section>
    </section>
  );
};

export default Programs;
