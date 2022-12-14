import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { SaveButtons } from "./";

const Title = ({ text }) => {
  const { displayAlert, isEditing, article, editArticle, createArticle } =
    useAppContext();
  const [title, setTitle] = useState(text || "");
  const [isEditingTitle, setIsEditingTitle] = useState(
    isEditing ? false : true
  );

  const handleSave = () => {
    if (title === "") {
      displayAlert("Title cannot be empty!", "danger");
      return;
    }

    if (isEditing) {
      article.title = title;
      editArticle({ article });
    } else {
      createArticle(title);
    }

    setIsEditingTitle((prev) => !prev);
  };

  const handleCancel = () => {
    if (isEditing && article.title === "") {
      displayAlert("Title cannot be empty!", "danger");
      return;
    }
    setTitle(article.title);
    setIsEditingTitle((prev) => !prev);
  };

  if (isEditingTitle)
    return (
      <>
        <textarea
          className="title"
          name="title"
          placeholder="Please enter a title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <SaveButtons save={handleSave} cancel={handleCancel} isTitle />
      </>
    );
  else
    return (
      <>
        <h2 onClick={() => setIsEditingTitle((prevState) => !prevState)}>
          {title}
        </h2>
      </>
    );
};
export default Title;
