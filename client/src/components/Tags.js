const Tags = ({ tags }) => {
  return (
    <div className="tags">
      tags:{" "}
      {tags.map((tag) => (
        <div className="tag">{tag}</div>
      ))}
    </div>
  );
};
export default Tags;
