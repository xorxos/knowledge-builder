import EditButtons from "./EditButtons";

const Paragraph = ({ text }) => {
  return (
    <p>
      {text}
      <EditButtons />
    </p>
  );
};
export default Paragraph;
