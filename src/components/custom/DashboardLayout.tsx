import {  useState } from "react";
import { Outlet, } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

function DashboardLayout() {
  const [maximize, setMaximize] = useState<boolean>(true)
  return (
    <div className="flex flex-1">
      <NavigationMenu maximize={maximize} setMaximize={setMaximize} />
      <div className={` w-full h-[100vh] bg-gray-100 ${maximize ? "ml-[270px]" : "ml-20"}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;