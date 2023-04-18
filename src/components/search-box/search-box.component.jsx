import './search-box.styles.css';

const SearchBox = ({ searchField, placeholder, className, onChangeHandler }) => (
  <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      value={searchField}
      onChange={onChangeHandler}
    />
)

export default SearchBox;
