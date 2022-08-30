import React, { useState } from "react";

// svg
import {
  MsgCircle,
  OptionIcon,
  ShuffleIcon,
  VoiceMemo,
  PieChartIcon,
  OptionVerticalIcon,
} from "../../../Svg";

// components
import ToolbarWrapper from "./components/ToolbarWrapper";
import OptionalSection from "./OptionalSection";
import CommentSection from "./CommentSection";
import VoiceSection from "./VoiceSection";

// project context
import { ProjectContext } from "../../../../pages/context/ProjectContext";

const ToolBar = (props) => {
  const { currentProjectType } = React.useContext(ProjectContext);
  const [value, setValue] = useState(0);
  const { state, setState } = props;
  const handleClick = (val) => (event) => {
    event.preventDefault();
    setValue(val);
  };
  const tabClass = (val) => {
    return (
      `tab text-[#5F5F5F] ` +
      (value === val
        ? "border-b-2 tab-bordered border-cyan-500 !text-white"
        : "")
    );
  };
  return (
    <ToolbarWrapper>
      {currentProjectType === 1 && (
        <>
          <div className="tabs w-[24rem] border-b border-[#262626] pt-2">
            <div className={tabClass(0)} onClick={handleClick(0)}>
              <ShuffleIcon />
            </div>
            <div className={tabClass(1)} onClick={handleClick(1)}>
              <OptionIcon />
            </div>
            <div className={tabClass(2)} onClick={handleClick(2)}>
              <MsgCircle />
            </div>
            <div className={tabClass(3)} onClick={handleClick(3)}>
              <VoiceMemo />
            </div>
          </div>
          <div className="w-[24rem] max-h-[calc(100vh-154px)] ">
            {value === 0 && <div></div>}
            {value === 1 && (
              <OptionalSection state={state} setState={setState} />
            )}
            {value === 2 && <CommentSection />}
            {value === 3 && <VoiceSection />}
          </div>
        </>
      )}
      {currentProjectType === 2 && (
        <>
          <div className="tabs w-[24rem] border-b border-[#262626] pt-2">
            <div className={tabClass(0)} onClick={handleClick(0)}>
              <PieChartIcon />
            </div>
            <div className={tabClass(1)} onClick={handleClick(1)}>
              <OptionVerticalIcon />
            </div>
            <div className={tabClass(2)} onClick={handleClick(2)}>
              <MsgCircle />
            </div>
            <div className={tabClass(3)} onClick={handleClick(3)}>
              <VoiceMemo />
            </div>
          </div>
        </>
      )}
    </ToolbarWrapper>
  );
};

export default ToolBar;
