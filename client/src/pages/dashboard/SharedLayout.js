import { Outlet } from "react-router-dom";
import Wrapper from "../../wrappers/SharedLayout";
import {
  Navbar,
  BigSidebar,
  SmallSidebar,
  AddItemsList,
} from "../../components/";
import { useAppContext } from "../../context/appContext";
import { Alert } from "../../components/";

const SharedLayout = () => {
  const { showAlert, showAddItems } = useAppContext();

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div className="relative">
          <Navbar />
          <div className="dashboard-page">
            {showAlert && <Alert fixed />}
            <Outlet />
          </div>

          {showAddItems && (
            <div className="add-item-sidebar">
              <AddItemsList />
            </div>
          )}
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
