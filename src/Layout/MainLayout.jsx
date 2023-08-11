import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.component";
import ParticlesBackground from "../components/Particles/ParticlesBackground";
import SocialsIcons from "../components/Social/SocialsIcons";

const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <ParticlesBackground />
        <Outlet />
      </main>
      <SocialsIcons />
    </div>
  );
};
export default MainLayout;
