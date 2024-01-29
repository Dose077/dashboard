import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-white w-[20%] p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-500">Dlever</h2>
        <button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 15H12.5C12.9583 15 13.3333 14.625 13.3333 14.1667C13.3333 13.7083 12.9583 13.3333 12.5 13.3333H3.33333C2.875 13.3333 2.5 13.7083 2.5 14.1667C2.5 14.625 2.875 15 3.33333 15ZM3.33333 10.8333H10C10.4583 10.8333 10.8333 10.4583 10.8333 10C10.8333 9.54167 10.4583 9.16667 10 9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333ZM2.5 5.83333C2.5 6.29167 2.875 6.66667 3.33333 6.66667H12.5C12.9583 6.66667 13.3333 6.29167 13.3333 5.83333C13.3333 5.375 12.9583 5 12.5 5H3.33333C2.875 5 2.5 5.375 2.5 5.83333ZM16.9167 12.4L14.5167 10L16.9167 7.6C17.2417 7.275 17.2417 6.75 16.9167 6.425C16.5917 6.1 16.0667 6.1 15.7417 6.425L12.75 9.41667C12.425 9.74167 12.425 10.2667 12.75 10.5917L15.7417 13.5833C16.0667 13.9083 16.5917 13.9083 16.9167 13.5833C17.2333 13.2583 17.2417 12.725 16.9167 12.4Z"
              fill="#5B77A0"
            />
            <defs>
              <clipPath id="clip0_481_1700">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
        <ul className="p-4 flex  flex-col gap-6 mt-4 ">
          <li className=" p-2 rounded  hover:text-white hover:bg-blue-500 active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white ">
            <NavLink>Ползователи</NavLink>
          </li>
          <li  className=" p-2 rounded  hover:text-white hover:bg-blue-500 active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
            <NavLink>Персонал</NavLink>
          </li>
          <li className=" p-2 rounded  hover:text-white hover:bg-blue-500 active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
            <NavLink to='/settings-company'>Компания</NavLink>
          </li>
          <li className=" p-2 rounded  hover:text-white hover:bg-blue-500 active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
            <NavLink>Товары</NavLink>
          </li>
          <li className=" p-2 rounded  hover:text-white hover:bg-blue-500 active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white">
            <NavLink>Интеграции</NavLink>
          </li>
        </ul>
    </div>
  );
};

export default SideBar;
