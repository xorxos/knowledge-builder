import { FaCheck, FaTimes } from "react-icons/fa";

const SaveButtons = ({ cancel, save, title }) => {
  return (
    <div className="save-buttons">
      <button type="button" className="btn save-btn" onClick={save}>
        <FaCheck />
        Save
      </button>
      {title !== "" && (
        <button type="button" className="btn cancel-btn" onClick={cancel}>
          <FaTimes />
          Cancel
        </button>
      )}
    </div>
  );
};
export default SaveButtons;
