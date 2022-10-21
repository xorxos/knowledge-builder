import { useAppContext } from "../../context/appContext";
import { useState } from "react";
import SaveButtons from "./SaveButtons";

const SmallHeader = ({ text, module, index, noEdit }) => {
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

  if (isEditingHeader)
    return (
      <>
        <textarea
          placeholder="Type some text for your small header here"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <SaveButtons save={handleSave} cancel={handleCancel} />
      </>
    );
  else
    return (
      <>
        <h4 onClick={handleClick}>{text}</h4>
      </>
    );
};
export default SmallHeader;
