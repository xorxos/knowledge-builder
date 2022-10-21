import { useAppContext } from "../context/appContext";
import Wrapper from "../wrappers/AddItemsList";
import { ArticleModule } from "./article modules";
import { Draggable, Droppable } from "react-beautiful-dnd";

const AddItemsList = () => {
  const { articleModuleOptions } = useAppContext();

  const returnModule = (item, index) => {
    if (item === "largeHeader")
      return (
        <ArticleModule
          noEdit
          key={index}
          module={{ moduleType: item, mainText: "Large heading" }}
        />
      );
    if (item === "smallHeader")
      return (
        <ArticleModule
          noEdit
          key={index}
          module={{ moduleType: item, mainText: "Small heading" }}
        />
      );
    if (item === "paragraph")
      return (
        <ArticleModule
          noEdit
          key={index}
          module={{ moduleType: item, mainText: "Normal text" }}
        />
      );
    if (item === "bulletList")
      return (
        <ArticleModule
          noEdit
          key={index}
          module={{ moduleType: item, listText: ["Bullets"] }}
        />
      );
    if (item === "numberedList")
      return (
        <ArticleModule
          noEdit
          key={index}
          module={{ moduleType: item, listText: ["Numbers"] }}
        />
      );
    if (item === "image")
      return (
        <ArticleModule
          noEdit
          key={index}
          module={{
            moduleType: item,
            imagePath:
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
            imageCaption: "An image",
          }}
        />
      );
  };

  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <Wrapper>
      {articleModuleOptions.map((item, index) => returnModule(item, index))}
    </Wrapper>
  );
};
export default AddItemsList;
