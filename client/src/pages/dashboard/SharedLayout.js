import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div>Shared</div>
      <Outlet />
    </>
  );
};
export default SharedLayout;
