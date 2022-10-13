import { useEffect } from "react";
import { StatsContainer, ArticlesContainer } from "../../components/";
import SearchContainer from "../../components/SearchContainer";
import { useAppContext } from "../../context/appContext";
import {Alert} from "../../components/";

const AllArticles = () => {
  const {
    getArticles,
    searchStatus,
    searchFlag,
    search,
    searchType,
    showAlert,
  } = useAppContext();

  useEffect(() => {
    getArticles();
  }, [searchStatus, searchFlag, search, searchType]);

  return (
    <>
      <StatsContainer />
      <SearchContainer />
      {showAlert && <Alert />}
      <ArticlesContainer />
    </>
  );
};
export default AllArticles;
