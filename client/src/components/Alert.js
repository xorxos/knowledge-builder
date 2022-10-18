import { useAppContext } from "../context/appContext";

const Alert = ({absolute}) => {
  const {alertType, alertText} = useAppContext()
  return <div className={`alert alert-${alertType} ${absolute && "absolute"}`} id="alert">{alertText}</div>;
};
export default Alert;