import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Programs.module.css";
import imageHomeJiuJitsu from "../public/images/homeJiuJitsu.jpg";
import imageHomeJiuJitsuKids from "../public/images/homeJiuJitsuKids.jpg";
import imageHomeJiuJitsuVets from "../public/images/homeJiuJitsuVets.jpg";
import imageHomeMuayThai from "../public/images/homeMuayThai.jpg";

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
        <article>
          <Image
            src={imageHomeJiuJitsu}
            alt="Allied Jiu Jitsu Brazilian adult jiu jitsu program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="3375"
            width="6000"
          />
          <h4 className="headline_sub title">Brazilian Jiu Jitsu</h4>
          <div className="flow">
            <p>
              Do you dream of competing at a high level? Do you need to master
              practical, real-world self-defense so that you can apply it second
              nature? Are you interested in having a great time?
            </p>
            <p>
              Brazilian Jiu Jitsu will change your life. This is a bold
              statement. You won&apos;t understand it until you join the jiu
              jitsu community and embrace the lifestyle.
            </p>
            <Image
              src={imageHomeJiuJitsuKids}
              alt="Allied Jiu Jitsu Brazilian kids jiu jitsu program."
              objectFit="cover"
              objectPosition="center top"
              layout="intrinsic"
              height="3375"
              width="6000"
            />
            <p>
              When you join, you will immediately learn techniques that you can
              apply that day. You will bond with and create memories with
              amazing people who share your journey, struggles, and victories.
            </p>
            <p>
              We offer gi and no-gi classes for kids and adults!&nbsp;
              <Link href="/contact">
                <a>Contact us</a>
              </Link>
              &nbsp;today or drop by to check out a class FREE.
            </p>
            <Image
              src={imageHomeJiuJitsuVets}
              alt="Allied Jiu Jitsu Brazilian vets and first responders jiu jitsu program."
              objectFit="cover"
              objectPosition="center top"
              layout="intrinsic"
              height="3375"
              width="6000"
            />
            <p>
              Allied offers free jiu jitsu classes for military vets, police,
              firefighters, and first responders. These classes are every
              Tuesday and Thursday at 6 am.
            </p>
          </div>
        </article>
        <article>
          <Image
            src={imageHomeMuayThai}
            alt="Allied Jiu Jitsu Muay Thai program."
            objectFit="cover"
            objectPosition="center top"
            layout="intrinsic"
            height="3375"
            width="6000"
          />
          <h4 className="headline_sub title">Muay Thai / Striking</h4>
        </article>
        <article>allied functional fitness</article>
        <article>allied tactical</article>
        <article>allied yoga</article>
      </section>
    </section>
  );
};

export default Programs;
