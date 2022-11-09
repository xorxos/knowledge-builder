import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import SaveButtons from "./SaveButtons";

const Numbers = ({ list, module, index, noEdit }) => {
  const { displayAlert, article, editArticle } = useAppContext();

  // combine list items and add new line at the end of each
  const combineList = (list) => {
    if (list) {
      const length = list.length;
      let text = ``;

      for (let index = 0; index < length; index++) {
        if (index < length - 1) {
          text += `${list[index]}\n`;
        } else text += list[index];
      }
      return text;
    }

    return ``;
  };

  const [numberText, setNumberText] = useState(combineList(list));

  const [numberList, setNumberList] = useState(list || []);
  const [isEditingNumbers, setIsEditingNumbers] = useState(false);

  const handleSave = () => {
    if (numberText === "") {
      displayAlert("Numbered list cannot be empty!", "danger");
      return;
    }

    // split by each new line and create array for bullet items
    const newArray = numberText.split(String.fromCharCode(10));
    article.modules[index].listText = newArray;
    setNumberList(newArray);

    editArticle({ article });
    setIsEditingNumbers((prev) => !prev);
  };

  const handleCancel = () => {
    setNumberText(combineList(module.listText));
    setNumberList(module.listText);
    setIsEditingNumbers((prev) => !prev);
  };

  const handleClick = () => {
    if (noEdit) return;
    setIsEditingNumbers((prev) => !prev);
  };

  const handleDelete = () => {
    article.modules.splice(index, 1);
    editArticle({ article });
  };

  if (isEditingNumbers)
    return (
      <>
        <textarea
          rows="5"
          className="bullets"
          placeholder="Each new bullet should be on its own line"
          value={numberText}
          onChange={(e) => setNumberText(e.target.value)}
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
        <ol onClick={handleClick}>
          {numberList.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ol>
      </>
    );
};
export default Numbers;
