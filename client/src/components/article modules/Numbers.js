import EditButtons from "./EditButtons";

const Numbers = ({ list }) => {
  return (
    <ol>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <EditButtons />
        </li>
      ))}
    </ol>
  );
};
export default Numbers;
