import { Outlet } from "react-router-dom";
import Wrapper from "../../wrappers/SharedLayout";
import { Navbar, BigSidebar, SmallSidebar } from "../../components/";
import { useAppContext } from "../../context/appContext";
import { Alert } from "../../components/";

const SharedLayout = () => {
  const { showAlert } = useAppContext();

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            {showAlert && <Alert absolute />}
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
