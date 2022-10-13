import { useEffect } from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

const SearchBar = ({ handleChange }) => {
  const { searchType, changeSearchType, search } = useAppContext();
  const [showSearchTypes, setShowSearchTypes] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  const handleTypeChange = () => {
    if (searchType === "tag") changeSearchType("title");
    if (searchType === "title") changeSearchType("tag");
    setShowSearchTypes((prevState) => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setTimeout(() => {
      handleChange(e);
    }, 500);
  };

  return (
    <div className="search-row">
      <div className="btn-container">
        <button
          type="button"
          className="btn search-btn"
          onClick={() => setShowSearchTypes((prevState) => !prevState)}
        >
          {searchType}
          {<FaCaretDown />}
        </button>
        <div
          className={showSearchTypes ? "dropdown show-dropdown" : "dropdown"}
          onClick={handleTypeChange}
        >
          {showSearchTypes && searchType !== "tag" && (
            <button type="button" className="dropdown-btn">
              tag
            </button>
          )}
          {showSearchTypes && searchType !== "title" && (
            <button type="button" className="dropdown-btn">
              title
            </button>
          )}
        </div>
      </div>
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Type here to search"
        value={searchText}
        onChange={(e) => handleSearchChange(e)}
      />
    </div>
  );
};
export default SearchBar;
