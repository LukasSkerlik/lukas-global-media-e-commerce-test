import { useState, useMemo, useEffect } from "react";
import Header from "../../components/headers/Header";
import Footer from "../../components/footers/Footer";
import CategorySidebar from "../../components/products/CategorySidebar";
import ProductGrid from "../../components/products/ProductGrid";
import styles from "../../styles/pages/products/ProductsPage.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"ascending" | "descending">("ascending");

  useEffect(() => {
    //fetch data from api
    const fetchData = async () => {
      const [productsRes, categoriesRes] = await Promise.all([
        fetch("https://fakestoreapi.com/products"),
        fetch("https://fakestoreapi.com/products/categories"),
      ]);
      const products = await productsRes.json();
      const categories = await categoriesRes.json();
      setProducts(products);
      setCategories(categories);
    };
    fetchData();
  }, []);

  //only update filteredProducts if selectedCategory state changes, or sortOrder changes,
  //or products state changes (products should only change once, after data fetching promise resolves)
  const filteredProducts = useMemo(() => {
    const filtered =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return [...filtered].sort((a, b) =>
      sortOrder === 'ascending' ? a.id - b.id : b.id - a.id
    );
  }, [selectedCategory, products, sortOrder]);
console.log(filteredProducts)
  return (
    <>
      <Header />
      <main className={styles.container}>
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />
        <ProductGrid products={filteredProducts} />
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
