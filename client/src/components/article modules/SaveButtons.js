import { FaCheck, FaTimes } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";

const SaveButtons = ({ cancel, save }) => {
  const { isEditing } = useAppContext();

  return (
    <div className="save-buttons">
      <button type="button" className="btn save-btn" onClick={save}>
        <FaCheck />
        Save
      </button>
      {isEditing && (
        <button type="button" className="btn cancel-btn" onClick={cancel}>
          <FaTimes />
          Cancel
        </button>
      )}
    </div>
  );
};
export default SaveButtons;
