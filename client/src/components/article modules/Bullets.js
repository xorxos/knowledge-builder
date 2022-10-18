import EditButtons from "./EditButtons";

const Bullets = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item} <EditButtons />
        </li>
      ))}
    </ul>
  );
};
export default Bullets;
