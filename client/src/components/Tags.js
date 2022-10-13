import { useAppContext } from "../context/appContext";

const Tags = ({ tags }) => {
  const {selectTag} = useAppContext();

  return (
    <div className="tags">
      tags:{" "}
      {tags.map((tag, index) => (
        <div key={index} className="tag"  onClick={() => selectTag(tag)}>{tag}</div>
      ))}
    </div>
  );
};
export default Tags;
