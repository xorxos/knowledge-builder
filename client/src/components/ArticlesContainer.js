import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/ArticlesContainer";
import ArticleItem from "./ArticleItem";

const ArticlesContainer = () => {
  const {articles} = useAppContext();

  return (
    <Wrapper>
        <ArticleItem />
    </Wrapper>
  );
};

export default ArticlesContainer;