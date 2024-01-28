import Sidebar from "../Dashboard/Sidebar"
import TopBar from "./TopBar"

const SettingsPage = () => {
  return (
    <div className='max-w-[1920px] h-screen flex my-0 mx-auto'>
    <Sidebar />
    <div className='flex flex-col w-full'>
        <TopBar />
    </div>
    
</div>
  )
}

export default SettingsPage