import { FaArrowDown, FaArrowUp, FaPlus } from "react-icons/fa";

const EditButtons = ({ title }) => {
  if (title) {
    return (
      <span className="btn-container">
        <FaPlus className="edit-icon" />
      </span>
    );
  } else
    return (
      <span className="btn-container">
        <FaArrowUp className="edit-icon" />
        <FaArrowDown className="edit-icon" />
      </span>
    );
};
export default EditButtons;
