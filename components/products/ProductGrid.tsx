import styles from "../../styles/components/products/ProductGrid.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface Props {
  products: Product[];
}

const ProductGrid = ({ products }: Props) => {
  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>£{product.price}</p>
          {product.description.length > 100 ? (
            <p>{product.description.slice(0, 100)}...</p>
          ) : (
            product.description
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
