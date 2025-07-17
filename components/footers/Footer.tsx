import styles from '../../styles/components/footers/Footer.module.css';

const Footer = () => {
  return <footer className={styles.footer}>© {new Date().getFullYear()} Placeholder Footer</footer>;
};

export default Footer;