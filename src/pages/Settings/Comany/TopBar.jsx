import { IoMdAdd } from "react-icons/io"
import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <div className="flex flex-col w-full bg-white">
    <div className="w-full h-16 flex justify-between items-center pl-4">
      <h2 className="text-base font-bold text-[#303940]">Список компаний</h2>
      <div className="h-full flex">
        <Link className="border-l-2 transition-all w-[130px] h-full flex items-center text-[#1AC19D] justify-center gap-1 hover:bg-[#1AC19D] hover:text-white">
          <IoMdAdd />
          <p>Добавить</p>
        </Link>
      </div>
    </div>
    <div className="w-full h-16 border flex justify-between items-center pl-4 bg-white relative">
        <input
          type="text"
          placeholder="Поиск"
          className="w-96 border-2 pl-8 py-1 outline-none rounded-md"
        />
    
        <span className="absolute left-[1.5%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_4634_805)">
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#B0BABF"
              />
            </g>
            <defs>
              <clipPath id="clip0_4634_805">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="px-5 flex items-center gap-2">
          <span className="flex items-center border-2 rounded-md">
            <button className="w-8 h-8 rounded-l-md bg-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clipPath="url(#clip0_4634_812)">
                  <path
                    d="M8.31003 1.49503C8.06503 1.25003 7.67003 1.25003 7.42503 1.49503L3.27003 5.65003C3.07503 5.84503 3.07503 6.16003 3.27003 6.35503L7.42503 10.51C7.67003 10.755 8.06503 10.755 8.31003 10.51C8.55503 10.265 8.55503 9.87003 8.31003 9.62503L4.69003 6.00003L8.31503 2.37503C8.55503 2.13503 8.55503 1.73503 8.31003 1.49503Z"
                    fill="#4094F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4634_812">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span className="border-x-2 h-8 w-20 flex items-center justify-center bg-white">
              Today
            </span>
            <button className="w-8 h-8 rounded-r-md bg-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clipPath="url(#clip0_4634_818)">
                  <path
                    d="M3.69 10.5049C3.935 10.7499 4.33 10.7499 4.575 10.5049L8.73 6.3499C8.925 6.1549 8.925 5.8399 8.73 5.6449L4.575 1.4899C4.33 1.2449 3.935 1.2449 3.69 1.4899C3.445 1.7349 3.445 2.1299 3.69 2.3749L7.31 5.9999L3.685 9.6249C3.445 9.8649 3.445 10.2649 3.69 10.5049Z"
                    fill="#4094F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4634_818">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </span>
          <p className="w-28 h-full flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_4634_827)">
                <path
                  d="M8.33333 8.35L12.5 8.35V17.5H8.33333L8.33333 8.35ZM14.1667 17.5H16.6667C17.5833 17.5 18.3333 16.75 18.3333 15.8333V8.33333L14.1667 8.33333V17.5ZM16.6667 2.5L4.16667 2.5C3.25 2.5 2.5 3.25 2.5 4.16667L2.5 6.66667L18.3333 6.66667V4.16667C18.3333 3.25 17.5833 2.5 16.6667 2.5ZM2.5 15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H6.66667L6.66667 8.33333H2.5L2.5 15.8333Z"
                  fill="#303940"
                />
              </g>
              <defs>
                <clipPath id="clip0_4634_827">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Столбцы
          </p>
          <button
            className="w-28 h-full flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.54169 4.67492C5.47503 7.15825 8.33336 10.8333 8.33336 10.8333L8.33336 14.9999C8.33336 15.9166 9.08336 16.6666 10 16.6666C10.9167 16.6666 11.6667 15.9166 11.6667 14.9999V10.8333C11.6667 10.8333 14.525 7.15825 16.4584 4.67492C16.8834 4.12492 16.4917 3.33325 15.7917 3.33325L4.20003 3.33325C3.50836 3.33325 3.11669 4.12492 3.54169 4.67492Z"
                fill="#303940"
              />
            </svg>
            Фильтр
          </button>
         
        </div>
      </div>
  </div>
  )
}

export default TopBar