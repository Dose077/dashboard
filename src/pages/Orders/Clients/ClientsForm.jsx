import SideBar from "../SideBar"
import TopBarSecond from "../TopBarSecond"

const ClientsForm = () => {
  return (
    <div className="max-w-[1920px] h-screen flex my-0 mx-auto">
    <SideBar/> 
    <div className="flex flex-col w-full">
      <TopBarSecond />
    </div>
  </div>
  )
}

export default ClientsForm