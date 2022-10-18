import Wrapper from "../../wrappers/CreateArticle";
import { ArticleModule } from "../../components/article modules";
import { useAppContext } from "../../context/appContext";

const CreateArticle = () => {
  const { isEditing, article } = useAppContext();

  if (isEditing) {
    return (
      <Wrapper>
        <div className="article-content">
          <ArticleModule
            module={{
              moduleType: "title",
              title: article.title,
            }}
          />
          {article.modules.length > 0 &&
            article.modules.map((item, index) => (
              <ArticleModule key={index} module={item} />
            ))}
        </div>
      </Wrapper>
    );
  }

  if (!isEditing) {
    return (
      <Wrapper>
        <div className="article-content">
          <ArticleModule
            module={{
              moduleType: "title",
              title: "",
            }}
          />
        </div>
      </Wrapper>
    );
  }
};
export default CreateArticle;
