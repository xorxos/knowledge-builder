import { useEffect } from "react";
import {StatsContainer, ArticlesContainer} from "../../components/";
import { useAppContext } from "../../context/appContext";

const AllArticles = () => {
  const {showStats, isLoading} = useAppContext();

  useEffect(()=>{
    showStats();
  }, [])

  return (
    <>
      <StatsContainer />
      <ArticlesContainer />
    </>
  );
};
export default AllArticles;
