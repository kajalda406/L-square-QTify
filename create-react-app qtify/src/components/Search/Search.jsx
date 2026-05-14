import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg";

function Search() {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Search a album of your choice"
        className={styles.input}
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
}

export default Search;