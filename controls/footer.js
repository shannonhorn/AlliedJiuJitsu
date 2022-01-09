import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_media_links}>
        <Link href="https://www.facebook.com/Allied-Jiu-Jitsu-307244583066838">
          <a className={styles.social_media_link} target="_blank">
            Facebook
          </a>
        </Link>
        <Link href="https://www.instagram.com/alliedbjj/">
          <a className={styles.social_media_link} target="_blank">
            Instagram
          </a>
        </Link>
        <Link href="https://g.page/AlliedJiuJitsuHQ?gm">
          <a className={styles.social_media_link} target="_blank">
            Google
          </a>
        </Link>
        <Link href="https://www.google.com/search?q=AlliedJiuJitsuHQ&ludocid=8307371892214847482&ibp=gwp;0,7&source=g.page.m#lkt=LocalPoiReviews">
          <a className={styles.social_media_link} target="_blank">
            Reviews
          </a>
        </Link>
      </div>
      <div className={styles.copyright}>
        <div>passionate about all things jiu jitsu</div>
        &copy; 2019 Allied Athletics, LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
