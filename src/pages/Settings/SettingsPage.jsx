import Sidebar from "../Dashboard/Sidebar"
import SideBar from "./SideBar"
import TopBar from "./TopBar"

const SettingsPage = () => {
  return (
    <div className='max-w-[1920px] h-screen flex my-0 mx-auto'>
    <Sidebar />
    <SideBar/>
    <div className='flex flex-col w-full'>
        <TopBar />
    </div>
    
</div>
  )
}

export default SettingsPage