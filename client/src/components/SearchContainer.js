import { FormRow, FormRowSelect, SearchBar } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/SearchContainer";

const SearchContainer = () => {
  const {
    isLoading,
    search,
    handleChange
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form">
          <SearchBar handleChange={handleSearch} /> 
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
