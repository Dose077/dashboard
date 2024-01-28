import { IoMdAdd } from "react-icons/io"
import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <div className="w-full h-16 border flex justify-between items-center pl-4 text-xl font-bold">
        <h2>Клиенты</h2>
        <div className=" flex">
          <Link className="flex text-lg p-3 items-center text-[#1AC19D] justify-center gap-1 hover:bg-[#1AC19D] hover:text-white">
            <IoMdAdd />
            <p>Добавить</p>
          </Link>
        </div>
    </div>
    
  )
}

export default TopBar