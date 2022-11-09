import { useAppContext } from "../context/appContext";
import { FaPlusCircle } from "react-icons/fa";
import AddTagInput from "./AddTagInput";
import { useState } from "react";

const Tags = ({ tags, id }) => {
  const { selectTag, setEditArticle, editArticle, article, displayAlert } =
    useAppContext();
  const [showAddTag, setShowAddTag] = useState(false);

  const toggleAddTag = () => {
    setShowAddTag((prev) => !prev);
    setEditArticle(id);
  };

  const saveTag = (tagString) => {
    if (tagString === "") {
      displayAlert("Cannot save empty tags", "danger");
      return;
    }

    // get rid of all empty spaces
    let newTags = tagString.replaceAll(" ", "");

    // check if comma is the last character
    // if so, then remove it
    const lastChar = newTags.slice(-1);
    if (lastChar === ",") {
      newTags = newTags.replace(/,$/, "")
    }
    newTags = newTags.split(",");

    article.tags = newTags;
    editArticle({ article });
  };

  return (
    <div className="tags">
      Search tags: {}
      {showAddTag ? (
        <AddTagInput
          tags={tags}
          setShowAddTag={toggleAddTag}
          saveTag={saveTag}
        />
      ) : (
        <>
          {tags.map((tag, index) => (
            <div key={index} className="tag" onClick={() => selectTag(tag)}>
              {tag}
            </div>
          ))}
          <FaPlusCircle className="add-tag" onClick={toggleAddTag} />
        </>
      )}
    </div>
  );
};
export default Tags;
