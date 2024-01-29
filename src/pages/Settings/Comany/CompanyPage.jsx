import Sidebar from "../../Dashboard/Sidebar"
import SideBar from "../SideBar"
import Table from "./Table"
import TopBar from "./TopBar"

const CompanyPage = () => {
  return (
    <div className='max-w-[1920px] h-screen flex my-0 mx-auto'>
    <Sidebar />
    <SideBar/>
    <div className='flex flex-col w-full'>
        <TopBar />
        <Table/>
    </div>
    
</div>
  )
}

export default CompanyPage