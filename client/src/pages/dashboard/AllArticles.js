import { useEffect } from "react";
import { StatsContainer, ArticlesContainer } from "../../components/";
import Loading from "../../components/Loading";
import SearchContainer from "../../components/SearchContainer";
import { useAppContext } from "../../context/appContext";

const AllArticles = () => {
  const { getArticles, isLoading, searchStatus, searchFlag, search } = useAppContext();

  useEffect(() => {
      getArticles();
  }, [searchStatus, searchFlag]);

  useEffect(() => {
    let timer = setTimeout(() => {
      getArticles();
    }, 500);

    return () => clearTimeout(timer);
  }, [search])

  return (
    <>
      <StatsContainer />
      <SearchContainer />
      <ArticlesContainer />
    </>
  );
};
export default AllArticles;
