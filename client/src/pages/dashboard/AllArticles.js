import { useEffect } from "react";
import {StatsContainer, ArticlesContainer} from "../../components/";
import SearchContainer from "../../components/SearchContainer";
import { useAppContext } from "../../context/appContext";

const AllArticles = () => {
  const {showStats, isLoading} = useAppContext();

  useEffect(()=>{
    showStats();
  }, [])

  return (
    <>
      <StatsContainer />
      <SearchContainer />
      <ArticlesContainer />
    </>
  );
};
export default AllArticles;
