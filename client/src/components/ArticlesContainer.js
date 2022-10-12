import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/ArticlesContainer";
import ArticleItem from "./ArticleItem";
import Loading from "./Loading";

const ArticlesContainer = () => {
  const { articles, isLoading } = useAppContext();

  if (isLoading) return <Loading center />;

  if (articles.length === 0) {
    return (
      <Wrapper>
        <h2>No articles to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {articles.length} article{articles.length > 1 && "s"} found
      </h5>
      <div className="articles">
        {articles.map((item, index) => {
          if (index === 1) console.log(item);
          return <ArticleItem key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ArticlesContainer;
