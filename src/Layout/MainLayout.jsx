import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.component";
import ParticlesBackground from "../components/Particles/ParticlesBackground";

const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <ParticlesBackground />
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
