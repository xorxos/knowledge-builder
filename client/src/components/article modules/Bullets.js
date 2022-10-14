import EditButtons from "./EditButtons";

const Bullets = ({ list }) => {
  const { items } = list;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <EditButtons />
        </li>
      ))}
    </ul>
  );
};
export default Bullets;
