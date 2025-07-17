import styles from '../../styles/components/products/CategorySidebar.module.css';

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  sortOrder: 'ascending' | 'descending';
  onSortChange: (order: 'ascending' | 'descending') => void;
}

const CategorySidebar = ({
  categories,
  selectedCategory,
  onSelectCategory,
  sortOrder,
  onSortChange,
}: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sortControls}>
        <label htmlFor="sort" className={styles.sortLabel}>Sort ID:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as 'ascending' | 'descending')}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <ul>
        {['all', ...categories].map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? styles.active : ''}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
