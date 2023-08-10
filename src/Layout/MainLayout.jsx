import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.component";

const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
