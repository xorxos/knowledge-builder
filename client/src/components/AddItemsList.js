import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/AddItemsList";
import { ArticleModule } from "./article modules";

const AddItemsList = () => {
  const { articleModuleOptions, editArticle, article } = useAppContext();

  const handleClick = ({ item, mainText, listText }) => {
    const newModule = {
      moduleType: item,
      mainText,
      listText,
    };
    article.modules.push(newModule);
    editArticle({ article });
  };

  const returnModule = (item, index) => {
    if (item === "largeHeader")
      return (
        <div
          onClick={() => handleClick({ item, mainText: "Large heading" })}
          key={index}
        >
          <ArticleModule
            noEdit
            module={{ moduleType: item, mainText: "Large heading" }}
          />
        </div>
      );
    if (item === "smallHeader")
      return (
        <div
          onClick={() => handleClick({ item, mainText: "Small heading" })}
          key={index}
        >
          <ArticleModule
            noEdit
            module={{ moduleType: item, mainText: "Small heading" }}
          />
        </div>
      );
    if (item === "paragraph")
      return (
        <div
          onClick={() => handleClick({ item, mainText: "Normal text" })}
          key={index}
        >
          <ArticleModule
            noEdit
            key={index}
            module={{ moduleType: item, mainText: "Normal text" }}
          />
        </div>
      );
    if (item === "bulletList")
      return (
        <div
          onClick={() => handleClick({ item, listText: ["Bullets"] })}
          key={index}
        >
          <ArticleModule
            noEdit
            key={index}
            module={{ moduleType: item, listText: ["Bullets"] }}
          />
        </div>
      );
    if (item === "numberedList")
      return (
        <div
          onClick={() => handleClick({ item, listText: ["Numbers"] })}
          key={index}
        >
          <ArticleModule
            noEdit
            key={index}
            module={{ moduleType: item, listText: ["Numbers"] }}
          />
        </div>
      );
  };

  return (
    <Wrapper>
      {articleModuleOptions.map((item, index) => returnModule(item, index))}
    </Wrapper>
  );
};
export default AddItemsList;
