import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  if (!isClicked)
    return (
      <div className="add-button">
        <FaPlus className="add-icon" onClick={() => setIsClicked((prev) => !prev)} />
      </div>
    );
  else
    return (
      <div className="add-button">
        <FaTimes className="add-icon" onClick={() => setIsClicked((prev) => !prev)} />
        <div className="add-dropdown">
          <button type="button">Choice 1</button>
          <button type="button">Choice 3</button>
          <button type="button">Choice 3</button>
        </div>
      </div>
    );
};
export default AddButton;
