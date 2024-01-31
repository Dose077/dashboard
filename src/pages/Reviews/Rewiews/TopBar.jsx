import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex flex-col w-full bg-white border-l">
      <div className="w-full h-16 flex justify-between items-center pl-4">
        <h2 className="text-xl font-bold text-[#303940]">Список отзывов</h2>
        <div className="h-full flex items-center gap-5">
          <Link className="border-l-2 transition-all w-[130px] h-full flex items-center text-[#1AC19D] justify-center gap-1 hover:bg-[#1AC19D] hover:text-white">
            <IoMdAdd />
            <p>Добавить</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
