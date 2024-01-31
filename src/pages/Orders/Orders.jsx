import { Outlet } from "react-router";
import StaticData from "./StaticData";
import TopBarSecond from "./TopBarSecond";
import SideBar from "./SideBar";

export default function Orders() {
  return (
    <>
      <div className="max-w-[1920px] h-screen flex my-0 mx-auto">
        <SideBar/> 
        <div className="flex flex-col w-full">
          <TopBarSecond />
          <StaticData />
          <Outlet />
        </div>
      </div>
      
    </>
  );
}
