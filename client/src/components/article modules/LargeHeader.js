import EditButtons from "./EditButtons";

const LargeHeader = ({ text }) => {
  return (
    <h3>
      {text}
      <EditButtons />
    </h3>
  );
};
export default LargeHeader;
