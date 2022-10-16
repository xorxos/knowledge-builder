import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { EditButtons, SaveButtons } from "./";

const Title = () => {
  const { title, handleChange, displayAlert } = useAppContext();
  const [isEditingTitle, setIsEditingTitle] = useState(true);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    if (newTitle === "") {
      displayAlert("Title cannot be empty!", "danger");
      return;
    }
    // Once changeTitle is made in appcontext
    // changeTitle(newTitle)
    setIsEditingTitle((prev) => !prev);
    setNewTitle(title);
    console.log("new: " + newTitle);
    console.log("title: " + title);
  };

  const handleCancel = () => {
    console.log("canceling");
    if (title !== "") {
      setNewTitle(title);
      setIsEditingTitle((prev) => !prev);
      return;
    }
    displayAlert("Title cannot be empty!", "danger");
  };

  const changeHandler = (e) => {
    setNewTitle(e.target.value);
  };

  if (isEditingTitle)
    return (
      <>
        <textarea
          className="title"
          name="title"
          placeholder="Please enter a title here"
          value={newTitle}
          onChange={(e) => changeHandler(e)}
        />
        <SaveButtons title={title} save={handleSave} cancel={handleCancel} />
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
