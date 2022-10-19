import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import EditButtons from "./EditButtons";
import SaveButtons from "./SaveButtons";

const LargeHeader = ({ text, module, index }) => {
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

  if (isEditingHeader)
    return (
      <>
        <textarea
          className="largeHeader"
          placeholder="Type some text for your large header here"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <SaveButtons save={handleSave} cancel={handleCancel} />
      </>
    );
  else
    return (
      <>
        <h3 onClick={() => setIsEditingHeader((prevState) => !prevState)}>
          {text}
        </h3>
        <EditButtons />
      </>
    );
};
export default LargeHeader;
