import { EditButtons } from "./";

const Title = ({ title }) => {
  return (
    <h2>
      {title} <EditButtons />
    </h2>
  );
};
export default Title;
