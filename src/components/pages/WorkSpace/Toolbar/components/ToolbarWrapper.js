import * as React from "react";

export default function ToolbarWrapper(props) {
  const { children } = props;

  return <div className="w-[24rem] bg-[#161616]  select-none">{children}</div>;
}
