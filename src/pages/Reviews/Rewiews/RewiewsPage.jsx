import SideBar from "../../Orders/SideBar"
import SidBar from "../SidBar"
import RewiewsData from "./RewiewsData"
import TopBar from "./TopBar"

const RewiewsPage = () => {
  return (
    <div className=" h-screen flex my-0 mx-auto">
    <SideBar/> 
    <SidBar/>
    <div className="flex flex-col w-full">
      <TopBar/>
      <RewiewsData/>
    </div>
  </div>
  
  )
}

export default RewiewsPage