import { SearchBar } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/SearchContainer";

const SearchContainer = () => {
  const { handleChange } = useAppContext();

  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <SearchBar handleChange={handleSearch} />
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
