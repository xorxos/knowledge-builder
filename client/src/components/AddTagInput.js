import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const AddTagInput = ({ setShowAddTag, saveTag, tags }) => {

  // Combine tags into one string, separated by commas
  let reducedTags = "";
  for (let index = 0; index < tags.length; index++) {
    reducedTags += tags[index] + ", "
  }
  
  const [inputValue, setInputValue] = useState(reducedTags || "");

  return (
    <div className="add-tag-container">
      <input
        type="text"
        value={inputValue}
        name="tag"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <FaCheck
        className="tag-button green"
        onClick={() => saveTag(inputValue)}
      />
      <FaTimes className="tag-button red" onClick={setShowAddTag} />
    </div>
  );
};
export default AddTagInput;
