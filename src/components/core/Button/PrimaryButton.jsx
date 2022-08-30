import * as React from "react";

export default function PrimaryLink(props) {
  const { label, handleClick } = props;
  return (
    <div
      className="flex justify-center rounded-md px-[9px] py-[6px] text-center w-28 h-8 text-white bg-gradient-to-r from-[#FEAC6D] to-[#AE61ED] font-bold text-[10px] tracking-[.25em] leading-5 cursor-pointer"
      onClick={() => handleClick()}
    >
      {label}
    </div>
  );
}
