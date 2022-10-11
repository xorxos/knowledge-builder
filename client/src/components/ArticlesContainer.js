import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/ArticlesContainer";
import ArticleItem from "./ArticleItem";

const ArticlesContainer = () => {
  const { articles } = useAppContext();

  return (
    <Wrapper>
      {articles.map((item, index) => {
        return <ArticleItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default ArticlesContainer;
