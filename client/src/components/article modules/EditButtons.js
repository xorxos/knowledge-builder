import { FaArrowDown, FaArrowUp, FaEdit, FaPlus } from "react-icons/fa";

const EditButtons = () => {
  return (
    <span className="btn-container">
      <FaEdit className="edit-icon" />
      {/* <FaArrowUp className="edit-icon" />
      <FaArrowDown className="edit-icon" />
      <FaPlus className="edit-icon" /> */}
    </span>
  );
};
export default EditButtons;
