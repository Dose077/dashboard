import Sidebar from "../Dashboard/Sidebar";
import ClientData from "./ClientData";
import TopBar from "./TopBar";

export default function Clients() {
  return (
    <>
      <div className="max-w-[1920px] h-screen flex my-0 mx-auto">
        <Sidebar />
        <div className="flex flex-col w-full">
          <TopBar />
          <ClientData />
        </div>
      </div>
    </>
  );
}
