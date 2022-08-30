import * as React from "react";

export default function Input(props) {
  const { label, name, value, onChange, type, placeholder } = props;
  return (
    <div>
      <label className="flex flex-start uppercase leading-5 text-[9px] text-white tracking-[.25em]">
        {label}
      </label>
      <input
        className="px-2 py-1.5 w-full h-8 bg-[#161616] border border-[#404040] ring-offset-0 focus:border-white focus:outline-none placeholder-[#5F5F5F] rounded-md text-[12px] text-white"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
