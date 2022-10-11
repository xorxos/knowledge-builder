import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/ArticlesContainer";
import ArticleItem from "./ArticleItem";
import Loading from "./Loading";

const ArticlesContainer = () => {
  const { articles, isLoading } = useAppContext();

  if (isLoading) return <Loading center />;

  return (
    <Wrapper>
      {articles.map((item, index) => {
        return <ArticleItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default ArticlesContainer;
