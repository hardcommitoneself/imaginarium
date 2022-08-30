import * as React from "react";

export default function SecondaryAvatar(props) {
  const { start, end, middle, url, name, brand } = props;
  return (
    <div className="relative flex flex-col gap-2 items-center justify-center">
      <div className="w-full">
        <div className="w-full grid grid-cols-2">
          {start && (
            <>
              <div className="w-full h-4 border-gray-500"></div>
              <div className="w-full h-4 border-gray-500 border-t-2 border-l-2 rounded-tl"></div>
            </>
          )}
          {end && (
            <>
              <div className="w-full h-4 border-gray-500 border-t-2 border-r-2 rounded-tr"></div>
              <div className="w-full h-4 border-gray-500"></div>
            </>
          )}
          {middle && (
            <>
              <div className="w-full h-4 border-gray-500 border-t-2"></div>
              <div className="w-full h-4 border-gray-500 border-t-2 border-l-2"></div>
            </>
          )}
          {start || end || middle ? (
            ""
          ) : (
            <>
              <div className="w-full h-4"></div>
              <div className="w-full h-4"></div>
            </>
          )}
        </div>
        <div className="relative w-full flex justify-center">
          <div
            className={`w-20 h-20 self-center flex items-center justify-center bg-[#2B2B2B] ${
              url === "" && "ring-[1px] ring-gray-600"
            } rounded-full overflow-hidden ${
              brand ? "ring ring-purple-500" : ""
            }`}
          >
            {url ? (
              <img src={url} alt="avatar" width={80} height={80} />
            ) : (
              <span className=" uppercase text-center text-[10px] font-bold tracking-[.15rem]">
                {name.split(" ")[0][0] + name.split(" ")[1][0]}
              </span>
            )}
          </div>

          {brand && (
            <div className="absolute -bottom-1 p-[1px] bg-purple-500 uppercase text-center text-[10px] font-bold tracking-[.15rem] rounded">
              {brand}
            </div>
          )}
        </div>
      </div>

      <span className="absolute top-full pt-2 uppercase text-center text-[9px] font-bold leading-3 tracking-[.21rem]">
        {name}
      </span>
    </div>
  );
}
