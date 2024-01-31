import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="bg-white  border w-24 h-[1200px]  flex flex-col items-center justify-center">
        <div className="  h-[95%] flex flex-col items-center gap-8">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="20"
                cy="20"
                r="20"
                fill="url(#paint0_linear_195_1736)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.3883 29.0181C24.0668 29.0181 26.0475 27.9131 27.3306 25.7032C28.2769 24.0638 28.75 22.0628 28.75 19.7001C28.75 18.7679 28.6377 17.7875 28.4132 16.7588C28.1887 15.7302 27.7676 14.7739 27.1502 13.8899C26.3803 12.797 25.3739 12.0456 24.1309 11.6357C23.4012 11.3947 22.487 11.2661 21.3883 11.25H13.75V29.0181H21.3883Z"
                fill="white"
              />
              <mask
                id="mask0_195_1736"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="13"
                y="11"
                width="16"
                height="19"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.3883 29.0181C24.0668 29.0181 26.0475 27.9131 27.3306 25.7032C28.2769 24.0638 28.75 22.0628 28.75 19.7001C28.75 18.7679 28.6377 17.7875 28.4132 16.7588C28.1887 15.7302 27.7676 14.7739 27.1502 13.8899C26.3803 12.797 25.3739 12.0456 24.1309 11.6357C23.4012 11.3947 22.487 11.2661 21.3883 11.25H13.75V29.0181H21.3883Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_195_1736)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.3465 25.932V14.3358H20.7627C22.4467 14.3358 23.5714 14.8199 24.1368 15.7883C24.7022 16.7567 24.9848 18.1449 24.9848 19.9531C24.9848 21.263 24.7964 22.3921 24.4195 23.3404C23.7298 25.0681 22.5109 25.932 20.7627 25.932H17.3465Z"
                  fill="#0E73F6"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_195_1736"
                  x1="-7.73094e-06"
                  y1="40"
                  x2="40"
                  y2="-1.72677e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0974E9" />
                  <stop offset="1" stopColor="#3593F9" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <ul className="bg-[#6e8bb727] gap-1 rounded-md w-10  flex flex-col ul-item overflow-hidden">
            <Link
              to="/orders"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="6" fill="#4094F7" />
                  <path
                    d="M19 30C17.9 30 17.01 30.9 17.01 32C17.01 33.1 17.9 34 19 34C20.1 34 21 33.1 21 32C21 30.9 20.1 30 19 30ZM13 15C13 15.55 13.45 16 14 16H15L18.6 23.59L17.25 26.03C16.52 27.37 17.48 29 19 29H30C30.55 29 31 28.55 31 28C31 27.45 30.55 27 30 27H19L20.1 25H27.55C28.3 25 28.96 24.59 29.3 23.97L32.88 17.48C33.25 16.82 32.77 16 32.01 16H17.21L16.54 14.57C16.38 14.22 16.02 14 15.64 14H14C13.45 14 13 14.45 13 15ZM29 30C27.9 30 27.01 30.9 27.01 32C27.01 33.1 27.9 34 29 34C30.1 34 31 33.1 31 32C31 30.9 30.1 30 29 30Z"
                    fill="white"
                  />
                  <defs>
                    <clipPath id="clip0_5598_2306">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(12 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            </Link>
            <Link to='/clients' className="rounded-md text-[#6E8BB7]  active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white ">
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8ZM19 8C19 8.39397 18.9224 8.78407 18.7716 9.14805C18.6209 9.51203 18.3999 9.84274 18.1213 10.1213C17.8427 10.3999 17.512 10.6209 17.1481 10.7716C16.7841 10.9224 16.394 11 16 11C15.606 11 15.2159 10.9224 14.8519 10.7716C14.488 10.6209 14.1573 10.3999 13.8787 10.1213C13.6001 9.84274 13.3791 9.51203 13.2284 9.14805C13.0776 8.78407 13 8.39397 13 8C13 7.20435 13.3161 6.44129 13.8787 5.87868C14.4413 5.31607 15.2044 5 16 5C16.7956 5 17.5587 5.31607 18.1213 5.87868C18.6839 6.44129 19 7.20435 19 8ZM14.93 19C14.976 18.673 15 18.34 15 18C15.0023 16.4289 14.4737 14.903 13.5 13.67C14.2601 13.2312 15.1223 13.0001 16 13.0001C16.8776 13.0001 17.7399 13.2311 18.4999 13.67C19.26 14.1088 19.8912 14.74 20.3301 15.5C20.7689 16.2601 21 17.1223 21 18V19H14.93ZM8 13C9.32608 13 10.5979 13.5268 11.5355 14.4645C12.4732 15.4021 13 16.6739 13 18V19H3V18C3 16.6739 3.52678 15.4021 4.46447 14.4645C5.40215 13.5268 6.67392 13 8 13Z"
                    fill="#6E8BB7"
                  />
                </svg>
              </li>
            </Link>
            <Link to='/reviews' className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white ">
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                    fill="#6E8BB7"
                  />
                  <defs>
                    <clipPath id="clip0_5598_2314">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            </Link>
            <Link
              to="/dashboard"
              className="rounded-md text-[#6E8BB7]  active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white "
            >
              <li>
                <i className="fa-solid fa-square-poll-vertical"></i>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
