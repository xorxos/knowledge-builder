import EditButtons from "./EditButtons";

const Numbers = ({ list }) => {
  const { items } = list;
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <EditButtons />
        </li>
      ))}
    </ol>
  );
};
export default Numbers;
