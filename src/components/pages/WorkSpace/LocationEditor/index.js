import * as React from "react";

// components
import LocationEditorWrapper from "./components/LocationEditorWrapper";

// module
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// svg
import {
  UnconfirmedIcon,
  ConfirmedIcon,
  PendingIcon,
  LocationPlusIcon,
} from "../../../Svg";

export default function LocationEditor(props) {
  const carouselProp = {
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    stopOnHover: true,
    emulateTouch: true,
    showArrows: false,
    showThumbs: false,
    animationHandler: "fade",
    swipeable: false,
  };

  return (
    <LocationEditorWrapper>
      <div className="w-full h-[216px] flex flex-col border rounded-[16px] border-[#2B2B2B] cursor-pointer">
        <div className="w-full h-40 rounded-t-[16px]">
          <Carousel {...carouselProp}>
            <div className="screen1 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div>
            <div className="screen2 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat"></div>
            {/* <div className="screen2">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
            {/* <div className="screen3">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
          </Carousel>
        </div>
        <div className="w-full h-14 flex flex-row items-center justify-between px-[18px] py-4 bg-[#161616] rounded-b-[16px]">
          <div className="flex flex-row items-center gap-4">
            <p className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              Sahara Desert
            </p>
            <div className="flex items-center">
              <UnconfirmedIcon />
              <p className="pl-1 uppercase font-bold text-[9px] text-[#5F5F5F] leading-5	tracking-[.21em]">
                Unconfirmed
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-row relative">
              <div className="absolute z-5 right-[56px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar1.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-4 right-[42px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar2.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-3 right-[28px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar3.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-2 right-[14px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar4.png"
                  alt="avatar"
                />
              </div>
              <div className="w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="z-10 w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar5.png"
                  alt="avatar"
                />
              </div>
            </div>
            <span className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              +17
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[216px] flex flex-col border rounded-[16px] border-[#2B2B2B] cursor-pointer">
        <div className="w-full h-40 rounded-t-[16px]">
          <Carousel {...carouselProp}>
            <div className="screen1 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div>
            <div className="screen2 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat"></div>
            {/* <div className="screen2">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
            {/* <div className="screen3">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
          </Carousel>
        </div>
        <div className="w-full h-14 flex flex-row items-center justify-between px-[18px] py-4 bg-[#161616] rounded-b-[16px]">
          <div className="flex flex-row items-center gap-4">
            <p className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              body in the pool
            </p>
            <div className="flex items-center">
              <ConfirmedIcon />
              <p className="pl-1 uppercase font-bold text-[9px] text-[#5F5F5F] leading-5	tracking-[.21em]">
                Confirmed
              </p>
            </div>
            <div className="rounded-[16px] px-3 py-0.5 border border-[#404040]">
              <p className="uppercase font-bold text-[9px] text-[#5F5F5F] leading-5	tracking-[.21em]">
                $5000/day
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-row relative">
              <div className="absolute z-5 right-[56px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar6.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-4 right-[42px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar7.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-3 right-[28px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar8.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-2 right-[14px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar9.png"
                  alt="avatar"
                />
              </div>
              <div className="w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="z-10 w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar10.png"
                  alt="avatar"
                />
              </div>
            </div>
            <span className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              +5
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[216px] flex flex-col border rounded-[16px] border-[#2B2B2B] cursor-pointer">
        <div className="w-full h-40 rounded-t-[16px]">
          <Carousel {...carouselProp}>
            <div className="screen1 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div>
            <div className="screen2 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat"></div>
            {/* <div className="screen2">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
            {/* <div className="screen3">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
          </Carousel>
        </div>
        <div className="w-full h-14 flex flex-row items-center justify-between px-[18px] py-4 bg-[#161616] rounded-b-[16px]">
          <div className="flex flex-row items-center gap-4">
            <p className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              statues room
            </p>
            <div className="flex items-center">
              <PendingIcon />
              <p className="pl-1 uppercase font-bold text-[9px] text-[#5F5F5F] leading-5	tracking-[.21em]">
                Pending
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-row relative">
              <div className="absolute z-5 right-[56px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar11.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-4 right-[42px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar12.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-3 right-[28px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar3.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-2 right-[14px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar4.png"
                  alt="avatar"
                />
              </div>
              <div className="w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="z-10 w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar13.png"
                  alt="avatar"
                />
              </div>
            </div>
            <span className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              +6
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[216px] flex flex-col border rounded-[16px] border-[#2B2B2B] cursor-pointer">
        <div className="w-full h-40 rounded-t-[16px]">
          <Carousel {...carouselProp}>
            <div className="screen1 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div>
            <div className="screen2 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat"></div>
            {/* <div className="screen2">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
            {/* <div className="screen3">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
          </Carousel>
        </div>
        <div className="w-full h-14 flex flex-row items-center justify-between px-[18px] py-4 bg-[#161616] rounded-b-[16px]">
          <div className="flex flex-row items-center gap-4">
            <p className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              main Kentucky street
            </p>
            <div className="flex items-center">
              <PendingIcon />
              <p className="pl-1 uppercase font-bold text-[9px] text-[#5F5F5F] leading-5	tracking-[.21em]">
                Pending
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-row relative">
              <div className="absolute z-5 right-[56px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar1.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-4 right-[42px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar2.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-3 right-[28px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar14.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-2 right-[14px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar15.png"
                  alt="avatar"
                />
              </div>
              <div className="w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="z-10 w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar16.png"
                  alt="avatar"
                />
              </div>
            </div>
            <span className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              +21
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[216px] flex flex-col border rounded-[16px] border-[#2B2B2B] cursor-pointer">
        <div className="w-full h-40 rounded-t-[16px]">
          <Carousel {...carouselProp}>
            <div className="screen1 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div>
            <div className="screen2 !w-full h-40 bg-[url('/public/assets/img/Workspace/location/Editor/image1.png')] bg-center bg-cover bg-no-repeat"></div>
            {/* <div className="screen2">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
            {/* <div className="screen3">
              <img
                className="!w-full h-40 rounded-t-[16px]"
                src="assets/img/Workspace/location/Editor/image1.png"
                alt="desert"
              />
            </div> */}
          </Carousel>
        </div>
        <div className="w-full h-14 flex flex-row items-center justify-between px-[18px] py-4 bg-[#161616] rounded-b-[16px]">
          <div className="flex flex-row items-center gap-4">
            <p className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              Execution
            </p>
            <div className="flex items-center">
              <UnconfirmedIcon />
              <p className="pl-1 uppercase font-bold text-[9px] text-[#5F5F5F] leading-5	tracking-[.21em]">
                Unconfirmed
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-row relative">
              <div className="absolute z-5 right-[56px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar17.png"
                  alt="avatar"
                />
              </div>
              <div className="z-4 absolute right-[42px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className=" w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar2.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-3 right-[28px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar18.png"
                  alt="avatar"
                />
              </div>
              <div className="absolute z-2 right-[14px] w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className="w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar19.png"
                  alt="avatar"
                />
              </div>
              <div className="z-1 w-[20px] h-[20px] rounded-[24px] border border-[#404040]">
                <img
                  className=" w-[20px] h-[20px] rounded-[24px]"
                  src="assets/img/Workspace/location/Editor/avatar20.png"
                  alt="avatar"
                />
              </div>
            </div>
            <span className="uppercase font-extrabold text-[9px] text-white leading-5	tracking-[.21em]">
              +13
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[216px] flex flex-col items-center justify-center gap-6 border rounded-[16px] border-[#2B2B2B] cursor-pointer">
        <LocationPlusIcon />
        <p className="uppercase font-extrabold text-[9px] text-[#1DAEFF] leading-5	tracking-[.21em]">
          Add location
        </p>
      </div>
    </LocationEditorWrapper>
  );
}
