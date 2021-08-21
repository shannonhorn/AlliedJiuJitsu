import styles from "../styles/Header.module.css";

const Header = () => (
  <header className={`${styles.header_container} ${styles.headline}`}>
    <span className={styles.drop_cap}>A</span>LLIED JIU JITSU
  </header>
);

export default Header;
