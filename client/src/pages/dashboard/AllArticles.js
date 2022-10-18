import { useEffect } from "react";
import { StatsContainer, ArticlesContainer } from "../../components/";
import SearchContainer from "../../components/SearchContainer";
import { useAppContext } from "../../context/appContext";

const AllArticles = () => {
  const {
    getArticles,
    searchStatus,
    searchFlag,
    search,
    searchType,
  } = useAppContext();

  useEffect(() => {
    getArticles();
  }, [searchStatus, searchFlag, search, searchType]);

  return (
    <>
      <StatsContainer />
      <SearchContainer />
      <ArticlesContainer />
    </>
  );
};
export default AllArticles;
