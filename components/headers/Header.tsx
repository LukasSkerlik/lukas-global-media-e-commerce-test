import Link from "next/link";
import { useSearch } from "../../context/SearchContext";
import styles from "../../styles/components/headers/Header.module.css";

const Header = () => {
  const { search, setSearch } = useSearch();

  return (
    <header className={styles.header}>
      <div className={styles.innerContainer}>
        <nav className={styles.navbar}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/newsletter">Newsletter</Link>
        </nav>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
      </div>
    </header>
  );
};

export default Header;
