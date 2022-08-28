import * as React from "react";

// core components
import { Dropdown } from "../../../core/Dropdown/Dropdown";

// components
import CharacterEditorWrapper from "./components/CharacterEditorWrapper";
import ActSceneSelectWrapper from "./components/ActSceneSelectWrapper";
import TopWrapper from "./components/TopWrapper";
import AddCharacterWrapper from "./components/AddCharacterWrapper";
import LeaderCard from "./components/LeaderCard";
import PrimaryAvatar from "./components/Avatar/PrimaryAvatar";

// svg
import { BigPlusButtonIcon, LaurelA, LaurelB } from "../../../Svg";

const acts = ["Act 1", "Act 2", "Act 3", "Custom"];
const scenes = ["scene 1", "scene 2", "scene 3", "Custom"];

export default function CharacterEditor(props) {
  return (
    <CharacterEditorWrapper>
      <ActSceneSelectWrapper>
        <Dropdown menus={acts} />
        <Dropdown menus={scenes} />
      </ActSceneSelectWrapper>

      <TopWrapper>
        <LeaderCard
          bg="assets/img/workspace/leadA.png"
          name="John Wick"
          laurel={<LaurelA />}
          avatar={<PrimaryAvatar url="assets/img/dashboard/dreamcast1.png" />}
          direction="left"
        />
        <LeaderCard
          bg="assets/img/workspace/leadB.png"
          name="Adam Milton"
          laurel={<LaurelB />}
          avatar={<PrimaryAvatar url="assets/img/dashboard/dreamcast4.png" />}
          direction="right"
        />
      </TopWrapper>

      <AddCharacterWrapper>
        <div className="flex flex-col justify-center items-center gap-1">
          <button className="flex justify-center items-center border border-[#404040] w-20 h-20 rounded-[40px] outline-none">
            <BigPlusButtonIcon />
          </button>

          <label className="uppercase mt-2 text-center text-[#1DAEFF] text-[9px] w-[72px] h-[24px] font-bold  leading-3 tracking-[.21em] cursor-pointer">
            ADD Character
          </label>
        </div>
      </AddCharacterWrapper>
    </CharacterEditorWrapper>
  );
}
