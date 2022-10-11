import { FaCaretDown } from "react-icons/fa";

const SearchBar = ({ handleChange }) => {
  return (
    <div className="search-row">
      <button type="button" className="btn search-btn">Title{<FaCaretDown />}</button>
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Type here to search"
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBar;
