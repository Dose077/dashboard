import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex flex-col w-full bg-white border-l">
      <div className="w-full h-16 flex justify-between items-center pl-4">
        <h2 className="text-xl font-bold text-[#303940]">Список акций</h2>
        <div className="h-full flex items-center gap-5">
          <Link>
           <div className="flex items-center gap-2  ">
           <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M14.7083 5.29182C13.35 3.93349 11.425 3.15016 9.30831 3.36682C6.24998 3.67516 3.73331 6.15849 3.39164 9.21682C2.93331 13.2585 6.05831 16.6668 9.99998 16.6668C12.6583 16.6668 14.9416 15.1085 16.0083 12.8668C16.275 12.3085 15.875 11.6668 15.2583 11.6668C14.95 11.6668 14.6583 11.8335 14.525 12.1085C13.5833 14.1335 11.325 15.4168 8.85831 14.8668C7.00831 14.4585 5.51664 12.9502 5.12498 11.1002C4.42498 7.86682 6.88331 5.00016 9.99998 5.00016C11.3833 5.00016 12.6166 5.57516 13.5166 6.48349L12.2583 7.74182C11.7333 8.26682 12.1 9.16682 12.8416 9.16682H15.8333C16.2916 9.16682 16.6666 8.79182 16.6666 8.33349V5.34182C16.6666 4.60016 15.7666 4.22516 15.2416 4.75016L14.7083 5.29182Z"
                  fill="#4094F7"
                />
              <defs>
                <clipPath id="clip0_427_649">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-blue-500">Обновить Telegram</p>
           </div>
          </Link>
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
