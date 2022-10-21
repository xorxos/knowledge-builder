import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import SaveButtons from "./SaveButtons";

const Paragraph = ({ text, module, index, noEdit }) => {
  const { displayAlert, article, editArticle } = useAppContext();
  const [paragraph, setParagraph] = useState(text || "");
  const [isEditingParagraph, setIsEditingParagraph] = useState(false);

  const handleSave = () => {
    if (paragraph === "") {
      displayAlert("Paragraph cannot be empty!", "danger");
      return;
    }

    article.modules[index].mainText = paragraph;
    editArticle({ article });
    setIsEditingParagraph((prev) => !prev);
  };

  const handleCancel = () => {
    setParagraph(module.mainText);
    setIsEditingParagraph((prev) => !prev);
  };

  const handleClick = () => {
    if (noEdit) return;
    setIsEditingParagraph((prev) => !prev);
  };

  if (isEditingParagraph)
    return (
      <>
        <textarea
          placeholder="Type some text for your paragraph here"
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <SaveButtons save={handleSave} cancel={handleCancel} />
      </>
    );

  return (
    <>
      <p onClick={handleClick}>{text}</p>
    </>
  );
};
export default Paragraph;
