import EditButtons from "./EditButtons";

const SmallHeader = ({ text }) => {
  return (
    <h4>
      {text}
      <EditButtons />
    </h4>
  );
};
export default SmallHeader;
