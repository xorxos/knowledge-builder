import { useEffect } from "react";
import { StatsContainer, ArticlesContainer } from "../../components/";
import Loading from "../../components/Loading";
import SearchContainer from "../../components/SearchContainer";
import { useAppContext } from "../../context/appContext";

const AllArticles = () => {
  const { getArticles, isLoading } = useAppContext();

  useEffect(() => {
    getArticles();
  }, []);

  if (isLoading) return <Loading center />;

  return (
    <>
      <StatsContainer />
      <SearchContainer />
      <ArticlesContainer />
    </>
  );
};
export default AllArticles;
