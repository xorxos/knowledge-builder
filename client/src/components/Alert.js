import { useAppContext } from "../context/appContext";

const Alert = ({fixed}) => {
  const {alertType, alertText} = useAppContext()
  return <div className={`alert alert-${alertType} ${fixed && "fixed-top"}`} id="alert">{alertText}</div>;
};
export default Alert;