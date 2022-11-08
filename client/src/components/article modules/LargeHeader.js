import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import SaveButtons from "./SaveButtons";

const LargeHeader = ({ text, module, index, noEdit }) => {
  const { displayAlert, article, editArticle } = useAppContext();
  const [header, setHeader] = useState(text || "");
  const [isEditingHeader, setIsEditingHeader] = useState(false);

  const handleSave = () => {
    if (header === "") {
      displayAlert("Header cannot be empty!", "danger");
      return;
    }

    article.modules[index].mainText = header;
    editArticle({ article });
    setIsEditingHeader((prev) => !prev);
  };

  const handleCancel = () => {
    setHeader(module.mainText);
    setIsEditingHeader((prev) => !prev);
  };

  const handleClick = () => {
    if (noEdit) return;
    setIsEditingHeader((prev) => !prev);
  };

  const handleDelete = () => {
    article.modules.splice(index, 1);
    editArticle({ article });
  };

  if (isEditingHeader)
    return (
      <>
        <textarea
          placeholder="Type some text for your large header here"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <SaveButtons
          save={handleSave}
          cancel={handleCancel}
          deleteModule={handleDelete}
        />
      </>
    );
  else
    return (
      <>
        <h3 onClick={handleClick}>{text}</h3>
      </>
    );
};
export default LargeHeader;
