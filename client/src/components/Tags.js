const Tags = ({ tags }) => {
  return (
    <div className="tags">
      tags:{" "}
      {tags.map((tag, index) => (
        <div key={index} className="tag">{tag}</div>
      ))}
    </div>
  );
};
export default Tags;
