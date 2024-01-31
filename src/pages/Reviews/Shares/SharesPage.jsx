import SideBar from "../../Orders/SideBar"
import SidBar from "../SidBar"
import SharesData from "./SharesData"
import TopBar from "./TopBar"

const SharesPage = () => {
  return (
    <>
    <div className=" h-screen flex my-0 mx-auto">
      <SideBar/> 
      <SidBar/>
      <div className="flex flex-col w-full">
        <TopBar/>
        <SharesData/>
      </div>
    </div>
    
  </>
  )
}

export default SharesPage