import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./HeaderDash";
import SidebarDash from "./SidebarDash";
import dashboardBg from "../assets/dashboard-bg.png";
import { BackDrop } from "../components/Utility";

const RootDash = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <div className="bg-[#0B002B]">
      <BackDrop showSidebar={showSidebar} onClick={toggleSidebar} />

      <main className="xl:flex overflow-hidden relative p-4 md:p-6 min-h-screen font-inria-sans">
        <div
          className="w-full h-full absolute top-0 start-0 bottom-0 end-0 bg-cover bg-center rounded-bl-2xl rounded-br-2xl"
          style={{ backgroundImage: `url(${dashboardBg})` }}
        ></div>
        <SidebarDash showSidebar={showSidebar} onHideSidebar={toggleSidebar} />
        <div className="xl:w-[calc(100%_-_256px)] relative z-10 xl:ml-6">
          <div className="mb-6">
            <DashboardHeader onToggleSidebar={toggleSidebar} />
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootDash;
