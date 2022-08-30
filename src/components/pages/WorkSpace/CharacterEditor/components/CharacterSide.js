import * as React from "react";

export default function CharacterSide(props) {
  const { label, items, currentSide, handleSetCurrentSide } = props;
  return (
    <div>
      <label className="flex flex-start uppercase leading-5 text-[9px] text-white tracking-[.25em]">
        {label}
      </label>

      <div className="grid grid-cols-3 gap-2 p-1 w-full bg-[#161616] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none rounded-md">
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            label={item}
            active={index === currentSide}
            handleSetCurrentSide={handleSetCurrentSide}
          />
        ))}
      </div>
    </div>
  );
}

const Item = (props) => {
  const { index, active, label, handleSetCurrentSide } = props;
  return (
    <div
      className={`uppercase px-2 py-1 text-[9px] text-white tracking-[.21rem] ${
        active ? "bg-[#5F5F5F]" : ""
      } text-center rounded cursor-pointer`}
      onClick={() => handleSetCurrentSide(index)}
    >
      {label}
    </div>
  );
};
