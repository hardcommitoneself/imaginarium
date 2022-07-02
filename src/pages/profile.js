import * as React from "react";
import { Link } from "react-router-dom";

import moment from "https://cdn.skypack.dev/moment?min";

import "../github.scss";

import { AuthContext } from "./context/AuthContext";
import ProfileTable from "../components/core/table/ProfileTable";
import { CloseIcon } from "../components/Svg";

const DayNames = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WEN",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

function Cell({ color }) {
  let style = {
    backgroundColor: color,
  };

  return <div className="timeline-cells-cell" style={style}></div>;
}

function Month({ startDate, index }) {
  let date = moment(startDate).add(index * 7, "day");
  let monthName = date.format("MMM");

  return (
    <div className={`timeline-months-month ${monthName}`}>{monthName}</div>
  );
}

function WeekDay({ index }) {
  return <div className="timeline-weekdays-weekday">{DayNames[index]}</div>;
}

function Timeline({ range, data, colorFunc }) {
  let days = Math.abs(range[0].diff(range[1], "days"));
  let cells = Array.from(new Array(days));
  let weekDays = Array.from(new Array(7));
  let months = Array.from(new Array(Math.floor(days / 7)));

  let min = Math.min(0, ...data.map((d) => d.value));
  let max = Math.max(...data.map((d) => d.value));

  let colorMultiplier = 1 / (max - min);

  let startDate = range[0];
  const DayFormat = "DDMMYYYY";

  return (
    <div className="timeline">
      <div className="timeline-months">
        {months.map((_, index) => (
          <Month key={index} index={index} startDate={startDate} />
        ))}
      </div>

      <div className="timeline-body">
        <div className="timeline-weekdays">
          {weekDays.map((_, index) => (
            <WeekDay key={index} index={index} startDate={startDate} />
          ))}
        </div>

        <div className="timeline-cells">
          {cells.map((_, index) => {
            let date = moment(startDate).add(index, "day");
            let dataPoint = data.find(
              (d) =>
                moment(date).format(DayFormat) ===
                moment(d.date).format(DayFormat)
            );
            let alpha = colorMultiplier * dataPoint.value;
            let color = colorFunc({ alpha });

            return <Cell key={index} index={index} date={date} color={color} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Profile() {
  // 1 year range
  let startDate = moment().add(-364, "days");
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(364)).map((_, index) => {
    return {
      date: moment(startDate).add(index, "day"),
      value: Math.floor(Math.random() * 100),
    };
  });

  const { setIsAuthenticated } = React.useContext(AuthContext);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  return (
    <div className="px-[15%] pt-16 bg-neutral-850 w-full h-[calc(100vh-112px)] overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded-[120px] w-[120px] h-[120px]"
          src="assets/img/Avatar.png"
          alt="Avatar"
        />
        <label className="mt-6 font font-bold text-[24px] text-white leading-6">
          Julia Ellei
        </label>
        <label className="mt-1 text-[14px] leading-5 text-[#5F5F5F]">
          @juliaellei
        </label>
        <div className="flex flex-row mt-6">
          <button
            className="bg-[#1DAEFF] text-white text-[10px] font-extrabold tracking-[.21em] text-center w-[100px] h-8 rounded-[4px]"
            onClick={() => {
              setShowEditModal(true);
            }}
          >
            EDIT
          </button>
          <button
            className="ml-6 bg-[#DD5E5E] text-white text-[10px] font-extrabold tracking-[.21em] text-center w-[100px] h-8 rounded-[4px]"
            onClick={() => {
              setShowLogoutModal(true);
            }}
          >
            LOG OUT
          </button>
        </div>
      </div>
      <div className="mt-[88px] work-info">
        <label className="text-[24px] text-white font-bold leading-6">
          Work Info
        </label>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <label className="mt-5 text-white text-[14px] leading-5">
              95 edits in the last year
            </label>
            <div className="mt-2 flex flex-row">
              <div className="w-4 h-4 opacity-30 bg-[#1DAEFF] rounded-[4px]"></div>
              <label className="ml-2 text-[12px] leading-5">136 low days</label>
            </div>
            <div className="mt-2 flex flex-row">
              <div className="w-4 h-4 opacity-[.65] bg-[#1DAEFF] rounded-[4px]"></div>
              <label className="ml-2 text-[12px] leading-5">
                69 normal days
              </label>
            </div>
            <div className="mt-2 flex flex-row">
              <div className="w-4 h-4 bg-[#1DAEFF] rounded-[4px]"></div>
              <label className="ml-2 text-[12px] leading-5">20 hard days</label>
            </div>

            <label className="text-[10px] leading-5 text-[#1DAEFF]">
              Learn how we count edits
            </label>
          </div>
          <div className="flex flex-col">
            <Timeline
              range={dateRange}
              data={data}
              colorFunc={({ alpha }) => `rgba(29, 174,  255, ${alpha})`}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 shard-projects flex flex-col w-full">
        <div className="flex flex-row justify-between items-center">
          <label className="text-[24px] text-white font-bold leading-6">
            Shared Projects
          </label>
          <div className="flex items-center justify-between w-52 bg-[#161616] border border-[#404040] rounded-[4px] px-2 py-1.5">
            <input
              className=" bg-transparent w-40 text-white focus:outline-none text-[12px] placeholder-[#5F5F5F]"
              type="text"
              placeholder="Search shared project"
            />
            <button>
              <img
                width={20}
                height={20}
                src="assets/img/profile/search.png"
                alt="search"
              />
            </button>
          </div>
        </div>
        <div className="mt-[20px]">
          <ProfileTable />
        </div>
      </div>

      {showEditModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                EDIT PROFILE
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowEditModal(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <div className="flex flex-row">
                <img
                  className="my-2 w-[100px] h-[100px] border border-[#1C1C1C] opacity-50 rounded-[50px]"
                  src="assets/img/Avatar.png"
                  alt="logo"
                />
                <div className="ml-[24px] flex flex-col w-full">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                    placeholder="Julia Ellei"
                  />
                  <label className="mt-2 text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    USERNAME
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                    placeholder="juliaellei"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mt-[12px] email">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    EMAIL
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                    placeholder="juliaellei@gmail.com"
                  />
                </div>
                <div className="mt-[12px] current-password">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    CURRENT PASSWORD
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                    placeholder="Enter current password"
                  />
                </div>
                <div className="mt-[12px] new-password">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    NEW PASSWORD
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="mt-[12px] confirm-new-password">
                  <label className="text-white text-[9px] font-extrabold leading-5 tracking-[.21em]">
                    CONFIRM NEW PASSWORD
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] focus:border-white placeholder-[#5F5F5F] focus:outline-none rounded-md text-[12px] focus:ring-1 text-white"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                onClick={() => {
                  setShowEditModal(false);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </>
      ) : null}

      {showLogoutModal ? (
        <>
          <div className="drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)] z-10 fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto bg-[#2B2B2B] border border-[#161616] rounded-md">
            <div className="edit-modal-header flex flex-row justify-between items-center py-[14px] w-full h-8 border-b border-[#161616]">
              <label className="ml-[24px] text-[9px] text-white font-extrabold leading-5 tracking-[.21em]">
                LOGING OUT
              </label>
              <button
                className="mr-[10px] hover:bg-[#4F4F4F]"
                onClick={() => {
                  setShowLogoutModal(false);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_3305_13642"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="5"
                    y="4"
                    width="11"
                    height="11"
                  >
                    <path
                      d="M11.1785 9.99996L14.756 6.42246C15.0819 6.09663 15.0819 5.56996 14.756 5.24413C14.4302 4.9183 13.9035 4.9183 13.5777 5.24413L10.0002 8.82163L6.42271 5.24413C6.09687 4.9183 5.57021 4.9183 5.24437 5.24413C4.91854 5.56996 4.91854 6.09663 5.24437 6.42246L8.82187 9.99996L5.24437 13.5775C4.91854 13.9033 4.91854 14.43 5.24437 14.7558C5.40687 14.9183 5.62021 15 5.83354 15C6.04687 15 6.26021 14.9183 6.42271 14.7558L10.0002 11.1783L13.5777 14.7558C13.7402 14.9183 13.9535 15 14.1669 15C14.3802 15 14.5935 14.9183 14.756 14.7558C15.0819 14.43 15.0819 13.9033 14.756 13.5775L11.1785 9.99996Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_3305_13642)">
                    <rect width="20" height="20" fill="#CDCDCD" />
                  </g>
                </svg>
              </button>
            </div>
            <div className="edit-modal-content px-[24px] py-4 border-b border-[#161616]">
              <label className="text-white text-[12px] leading-5">
                You are about to sign out of your account. Confirm the action.
              </label>
            </div>
            <div className="flex justify-end edit-modal-footer py-4 px-[24px]">
              <button
                className="mr-4 flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-transparent border border-[#404040] font-extrabold text-[10px] tracking-widest leading-5 hover:bg-[#404040]"
                onClick={() => {
                  setShowLogoutModal(false);
                }}
              >
                CANCEL
              </button>
              <Link
                className="cursor-pointer	flex justify-center items-center rounded-md px-[6px] text-center w-28 h-8 text-white bg-[#DD5E5E] font-extrabold text-[10px] tracking-widest leading-5 hover:opacity-80"
                to="/login"
                onClick={() => {
                  setIsAuthenticated(false);
                  localStorage.removeItem("auth");
                }}
              >
                LOG OUT
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Profile;
