import { useState } from "react";
import { EDIT_ARTICLE_BEGIN } from "../../context/actions";
import { useAppContext } from "../../context/appContext";
import { EditButtons, SaveButtons } from "./";

const Title = () => {
  const { title, handleChange, displayAlert, isEditing, article, editArticle } =
    useAppContext();
  const [isEditingTitle, setIsEditingTitle] = useState(
    isEditing ? false : true
  );

  const handleSave = () => {
    if (isEditing && title === "") {
      displayAlert("Title cannot be empty!", "danger");
      return;
    }
    if (title === "") {
      displayAlert("Title cannot be empty!", "danger");
      return;
    }

    article.title = title;
    editArticle({ article });
    setIsEditingTitle((prev) => !prev);
  };

  const handleCancel = () => {
    if (isEditing) {
      handleChange({ name: "title", value: article.title });
      setIsEditingTitle((prev) => !prev);
      return;
    }
    if (title === "") {
      setIsEditingTitle((prev) => !prev);
      return;
    }
    displayAlert("Title cannot be empty!", "danger");
  };

  const changeHandler = (e) => {
    handleChange({ name: "title", value: e.target.value });
  };

  if (isEditingTitle)
    return (
      <>
        <textarea
          className="title"
          name="title"
          placeholder="Please enter a title here"
          value={title}
          onChange={(e) => changeHandler(e)}
        />
        <SaveButtons save={handleSave} cancel={handleCancel} />
      </>
    );
  else
    return (
      <h2 onClick={() => setIsEditingTitle((prevState) => !prevState)}>
        {title}
        <EditButtons />
      </h2>
    );
};
export default Title;
