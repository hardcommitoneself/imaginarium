import * as React from "react";

// core components
import { Dropdown } from "../../../core/Dropdown/Dropdown";

// components
import CharacterEditorWrapper from "./components/CharacterEditorWrapper";
import ActSceneSelectWrapper from "./components/ActSceneSelectWrapper";

const acts = ["Act 1", "Act 2", "Act 3", "Custom"];
const scenes = ["scene 1", "scene 2", "scene 3", "Custom"];

export default function CharacterEditor(props) {
  return (
    <CharacterEditorWrapper>
      <ActSceneSelectWrapper>
        <Dropdown menus={acts} />
        <Dropdown menus={scenes} />
      </ActSceneSelectWrapper>
    </CharacterEditorWrapper>
  );
}
