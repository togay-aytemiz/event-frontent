import Link from "next/link";
import styles from "../../../Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2024</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
};

export default Footer;
