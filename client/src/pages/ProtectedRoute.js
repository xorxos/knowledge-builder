import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //update when we start using context
  const user = true;
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectedRoute;
