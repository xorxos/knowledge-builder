import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import SaveButtons from "./SaveButtons";

const Bullets = ({ list, module, index, noEdit }) => {
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

  const [bulletText, setBulletText] = useState(combineList(list));

  const [bulletList, setBulletList] = useState(list || []);
  const [isEditingBullets, setIsEditingBullets] = useState(false);

  const handleSave = () => {
    if (bulletText === "") {
      displayAlert("You must add at least one bullet point!", "danger");
      return;
    }
    const newArray = bulletText.split(String.fromCharCode(10));
    article.modules[index].listText = newArray;
    setBulletList(newArray);
    editArticle({ article });
    setIsEditingBullets((prev) => !prev);
  };

  const handleCancel = () => {
    setBulletText(combineList(module.listText));
    setBulletList(module.listText);
    setIsEditingBullets((prev) => !prev);
  };

  const handleClick = () => {
    if (noEdit) return;
    setIsEditingBullets((prev) => !prev);
  };

  if (isEditingBullets)
    return (
      <>
        <textarea
          rows="5"
          className="bullets"
          placeholder="Each new bullet should be on its own line"
          value={bulletText}
          onChange={(e) => setBulletText(e.target.value)}
        />
        <SaveButtons save={handleSave} cancel={handleCancel} />
      </>
    );
  else
    return (
      <>
        <ul onClick={handleClick}>
          {bulletList.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      </>
    );
};
export default Bullets;
