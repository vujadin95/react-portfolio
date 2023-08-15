import { Outlet } from "react-router-dom";
import ParticlesBackground from "../components/Particles/ParticlesBackground";
import SocialsIcons from "../components/Social/SocialsIcons";

import Header from "../components/Header/Header.component";
import ScrollToTop from "../components/ScrollToTop/SrcollToTop.component";

const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <ParticlesBackground />
        <ScrollToTop />
        <Outlet />
      </main>
      <SocialsIcons />
    </div>
  );
};
export default MainLayout;
