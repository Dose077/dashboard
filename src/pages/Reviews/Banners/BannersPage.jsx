import SideBar from "../../Orders/SideBar"
import SidBar from "../SidBar"
import BannersData from "./BannersData"
import TopBar from "./TopBar"

const BannerPage = () => {
  return (
    <>
    <div className=" h-screen flex my-0 mx-auto">
      <SideBar/> 
      <SidBar/>
      <div className="flex flex-col w-full">
        <TopBar/>
        <BannersData/>
      </div>
    </div>
    
  </>
  )
}

export default BannerPage