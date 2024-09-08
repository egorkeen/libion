import styles from "./SearchBar.module.scss";
import search from "@assets/search.svg";
import filters from "@assets/filters.svg";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <input placeholder="Например, «Атака Титанов»" />
        <button className={styles.searchButton}>
          <img src={search} alt="Поиск" />
        </button>
      </div>

      <div className={styles.filtersButton}>
        <button>
          <img src={filters} alt="Фильтры" />
        </button>
      </div>
    </div>
  );
};
