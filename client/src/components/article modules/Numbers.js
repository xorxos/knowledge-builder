import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import EditButtons from "./EditButtons";
import SaveButtons from "./SaveButtons";

const Numbers = ({ list, module, index }) => {
  const { displayAlert, article, editArticle } = useAppContext();

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
      displayAlert("You must add at least one bu!", "danger");
      return;
    }
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
        <SaveButtons save={handleSave} cancel={handleCancel} />
      </>
    );
  else
    return (
      <>
        <ol onClick={() => setIsEditingNumbers((prev) => !prev)}>
          {numberList.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ol>
        <EditButtons />
      </>
    );
};
export default Numbers;
