import { useAppContext } from "../context/appContext";

const Tags = ({ tags }) => {
  const { selectTag } = useAppContext();

  return (
    <div className="tags">
      Search tags:{" "}
      {tags.map((tag, index) => (
        <div key={index} className="tag" onClick={() => selectTag(tag)}>
          {tag}
        </div>
      ))}
      {(!tags || tags.length === 0) && "None"}
    </div>
  );
};
export default Tags;
