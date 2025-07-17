import styles from "../../styles/components/footers/Footer.module.css";

const NewsletterFooter = () => {
  return (
    <footer className={styles.footer}>
      <p> © {new Date().getFullYear()} Newsletter Placeholder footer</p>
    </footer>
  );
};

export default NewsletterFooter;
