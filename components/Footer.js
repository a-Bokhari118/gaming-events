import Link from 'next/link';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; GamerZone 2021</p>
      <p>
        <Link href='/about'>About this website</Link>
      </p>
    </footer>
  );
};

export default Footer;
