import * as React from "react";

export default function CharacterEditorWrapper(props) {
  return (
    <div className="relative w-full min-h-[calc(100vh-112px)] bg-black">
      {props.children}
    </div>
  );
}
