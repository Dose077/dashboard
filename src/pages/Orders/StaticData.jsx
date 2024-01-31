import { useState } from "react";
import { personalData,  } from "../../components/data";
import { FaCar, FaCheck } from "react-icons/fa6";
import {  MdEdit } from "react-icons/md";
import { IoMdClose, IoMdRefresh } from "react-icons/io";
import { Pagination } from "@mui/material";

export default function StaticData() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPersonalData = personalData.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleShow = (id) => {
    personalData.map((item) => {
      if (item.id === id) {
        item.isEdit = !item.isEdit
      }
      console.log(item.isEdit);
    });
    return personalData
  };

  return (
    <>
      <div className="w-full h-16 border flex justify-between items-center pl-4 bg-white relative">
        <input
          type="text"
          placeholder="Поиск"
          className="w-96 border-2 pl-8 py-1 outline-none rounded-md"
          onChange={handleSearchChange}
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

      <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5 ">
        <div className="bg-white w-[97%] h-[1000px] flex flex-col items-center gap-5 rounded-md">
          <div className="w-[95%] border-b-2 flex items-center h-[5%]">
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Курьер в пути
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Новый
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Оператор принял
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Загатовка
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Завершен
            </p>
            <p className="text-[#6E8BB7] text-sm font-semibold px-5 border-b-[3px] h-full border-transparent hover:text-blue-500 transition-all cursor-pointer flex items-center hover:border-blue-500">
              Все заказы
            </p>
          </div>
          <div className="w-[95%] h-[90%] border-2 rounded-md relative">
            <div className="border-b-2 w-full h-12 flex justify-between">
              <span className="flex items-center w-14 h-full justify-center">
                <input type="checkbox"  className="w-5" />
              </span>
              <b className="w-12 h-full flex items-center justify-center">№</b>
              <b className=" px-1 w-[224px] h-full flex items-center justify-center">
                Клиент
              </b>
              <b className=" px-1 w-[104px] h-full flex items-center justify-center">
                Ид.заказа
              </b>
              <b className=" px-1 w-[120px] h-full flex items-center justify-center">
                Таймер
              </b>
              <b className=" px-1 w-[88px] h-full flex items-center justify-center">
                Курьер
              </b>
              <b className=" px-1 w-[224px] h-full flex items-center justify-center">
                Филиал
              </b>
              <b className=" px-1 w-[136px] h-full flex items-center justify-center">
                Тип доставки
              </b>
              <b className=" px-1 w-32 h-full flex items-center justify-center">
                Цена заказа
              </b>
              <b className=" px-1 w-36 h-full flex items-center justify-center">
                Адресс клиента
              </b>
              <span className="w-12 h-full"></span>
            </div>
            {filteredPersonalData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="border-b-2 w-full h-16 flex justify-between relative"
                >
                  <span className="flex items-center w-14 h-full justify-center">
                    <input type="checkbox" className="w-5" />
                  </span>
                  <b className="w-12 h-full flex items-center justify-center">
                    <p >{data.id}</p>
                  </b>
                  <span className="px-1 w-[224px] h-full flex flex-col justify-center items-center gap-1">
                    <p>{data.name}</p>
                    <p className="text-blue-500">{data.number}</p>
                  </span>
                  <p className="px-1 w-[104px] h-full flex items-center justify-center">
                  5262261
                  </p>
                  <span className="px-1 w-[120px] h-full flex items-center justify-center">
                    <p className="bg-[#38D9B933] px-2 py-1 rounded-md text-green-500">
                      {data.timer}
                    </p>
                  </span>
                  <b className="px-1 w-[88px] h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="2"
                      viewBox="0 0 14 2"
                      fill="none"
                    >
                      <path d="M14 0.5H0V1.5H14V0.5Z" fill="#6E8BB7" />
                    </svg>
                  </b>
                  <span className="px-1 w-[224px] h-full flex flex-col justify-center items-center gap-1">
                    <p>{data.branch}</p>
                    <p className="text-blue-500">{data.phone}</p>
                  </span>
                  <span className="px-1 w-[136px] h-full flex items-center justify-center capitalize">
                    <p className="bg-[#F8DD4E4D] px-2 py-1 rounded-md text-[#D29404]">
                      {data.type}
                    </p>
                  </span>
                  <p className="px-1 w-32 h-full flex items-center justify-center">
                    {data.price}$
                  </p>
                  <p className="px-1 w-36 h-full flex items-center">
                    {data.clientAddress}
                  </p>
                  <span className="w-12 h-full flex items-center justify-center">
                    <button
                      onClick={() => handleShow(data.id)}
                      className="border-2 p-1 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.66671 9.99992C6.66671 10.4419 6.49111 10.8659 6.17855 11.1784C5.86599 11.491 5.44207 11.6666 5.00004 11.6666C4.55801 11.6666 4.13409 11.491 3.82153 11.1784C3.50897 10.8659 3.33337 10.4419 3.33337 9.99992C3.33337 9.55789 3.50897 9.13397 3.82153 8.82141C4.13409 8.50885 4.55801 8.33325 5.00004 8.33325C5.44207 8.33325 5.86599 8.50885 6.17855 8.82141C6.49111 9.13397 6.66671 9.55789 6.66671 9.99992ZM11.6667 9.99992C11.6667 10.4419 11.4911 10.8659 11.1786 11.1784C10.866 11.491 10.4421 11.6666 10 11.6666C9.55801 11.6666 9.13409 11.491 8.82153 11.1784C8.50897 10.8659 8.33337 10.4419 8.33337 9.99992C8.33337 9.55789 8.50897 9.13397 8.82153 8.82141C9.13409 8.50885 9.55801 8.33325 10 8.33325C10.4421 8.33325 10.866 8.50885 11.1786 8.82141C11.4911 9.13397 11.6667 9.55789 11.6667 9.99992ZM15 11.6666C15.4421 11.6666 15.866 11.491 16.1786 11.1784C16.4911 10.8659 16.6667 10.4419 16.6667 9.99992C16.6667 9.55789 16.4911 9.13397 16.1786 8.82141C15.866 8.50885 15.4421 8.33325 15 8.33325C14.558 8.33325 14.1341 8.50885 13.8215 8.82141C13.509 9.13397 13.3334 9.55789 13.3334 9.99992C13.3334 10.4419 13.509 10.8659 13.8215 11.1784C14.1341 11.491 14.558 11.6666 15 11.6666Z"
                          fill="#4094F7"
                        />
                      </svg>
                    </button>
                  </span>
                  {data.isEdit === true && (
                    <div className="z-30 w-64 h-64 bg-[#fff] flex flex-col rounded-md justify-between absolute left-[75%] shadow-xl">
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#FDF5CA] text-[#D29404] flex items-center justify-center">
                          <IoMdRefresh />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Повторить выставить счет
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#F6EBFD] text-[#C479F3] flex items-center justify-center">
                          <FaCar />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Курьер отменил
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#E3EFFE] text-[#4094F7] flex items-center justify-center">
                          <MdEdit />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Изменить
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#FEE8E6] text-[#F76659] flex items-center justify-center">
                          <IoMdClose />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Отменено
                        </p>
                      </button>
                      <button className="w-full py-2 flex items-center justify-between px-3">
                        <span className="w-8 h-8 rounded-md text-xl bg-[#DDF6F1] text-[#1AC19D] flex items-center justify-center">
                          <FaCheck />
                        </span>
                        <p className="text-black text-sm font-medium">
                          Завершить
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Pagination className=" mb-4" count={86} shape="rounded" />

        </div>
      </div>
    </>
  );
}
