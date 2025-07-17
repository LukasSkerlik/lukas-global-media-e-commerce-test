import NewsletterFooter from "../components/footers/NewsletterFooter";
import Link from "next/link";
import styles from "../styles/pages/Newsletter.module.css";

const Newsletter = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <h1 className={styles.text}>Newsletter</h1>
          <p className={styles.text}>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
            quis eleifend magna, nec lacinia nunc. Nunc gravida velit eu dui
            egestas mollis. Vivamus elementum fringilla lorem. Nulla facilisi.
            Cras rutrum dolor non elit rhoncus, ut hendrerit magna malesuada.
            Proin tempus quam ante, a faucibus justo pharetra aliquam. Quisque a
            elit in sem facilisis posuere. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Mauris
            fermentum, ligula a rutrum consectetur, lorem arcu elementum augue,
            sit amet imperdiet purus odio vel turpis. Nam varius accumsan mauris
            nec bibendum. Duis semper facilisis dui, a sodales arcu mattis
            vitae. In hac habitasse platea dictumst. Ut vel malesuada metus. Ut
            luctus, massa vitae condimentum efficitur, lorem massa laoreet
            lorem, sit amet rhoncus tortor velit et massa.
          </p>
          <div className={styles.linkContainer}>
            <Link href="/">
              <h1 className={styles.homepageText}>Take me to the Home page!</h1>
            </Link>
          </div>
        </div>
      </main>
      <NewsletterFooter />
    </>
  );
};

export default Newsletter;
