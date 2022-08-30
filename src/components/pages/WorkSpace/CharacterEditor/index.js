import * as React from "react";

// core components
import { PrimaryButton } from "../../../core/Button";
import { Dropdown } from "../../../core/Dropdown/Dropdown";
import Modal from "../../../core/Modal/Modal";
import { Input } from "../../../core/Input";

// components
import CharacterEditorWrapper from "./components/CharacterEditorWrapper";
import ActSceneSelectWrapper from "./components/ActSceneSelectWrapper";
import TopWrapper from "./components/TopWrapper";
import AddCharacterWrapper from "./components/AddCharacterWrapper";
import LeaderCard from "./components/LeaderCard";
import PrimaryAvatar from "./components/Avatar/PrimaryAvatar";
import SecondaryAvatar from "./components/Avatar/SecondaryAvatar";
import CharacterBoardWrapper from "./components/CharacterBoardWrapper";
import CharacterSide from "./components/CharacterSide";

// svg
import { BigPlusButtonIcon, LaurelA, LaurelB } from "../../../Svg";

const acts = ["Act 1", "Act 2", "Act 3", "Custom"];
const scenes = ["scene 1", "scene 2", "scene 3", "Custom"];
const gender = ["Male", "Female"];
const races = ["white", "black"];
const sides = ["protagonist", "antagonist", "neutral"];

// TODO: should get relation from DB
const relations = [
  [
    {
      relation: "BROTHERS",
      span: "col-start-1 col-end-4",
    },
  ],
  [
    {
      relation: "MAFIA",
      span: "col-start-5 col-end-9",
    },
  ],
  [],
];

const characters = [
  [
    {
      start: true,
      url: "assets/img/Workspace/characters/1.png",
      name: "Bob Sand",
    },
    {
      middle: true,
      url: "assets/img/Workspace/characters/2.png",
      name: "Rob Sand",
    },
    {
      end: true,
      url: "assets/img/Workspace/characters/3.png",
      name: "Christie",
    },
    {
      url: "assets/img/Workspace/characters/4.png",
      name: "Jack frost",
    },
    {
      url: "assets/img/Workspace/characters/5.png",
      name: "Jason Pickels",
    },
    {
      url: "assets/img/Workspace/characters/6.png",
      name: "MS. west",
    },
    {
      url: "assets/img/Workspace/characters/7.png",
      name: "Chu wai",
    },
    {
      url: "assets/img/Workspace/characters/8.png",
      name: "Andrew swamper",
    },
    {
      url: "assets/img/Workspace/characters/9.png",
      name: "walter white",
    },
    {
      url: "assets/img/Workspace/characters/10.png",
      name: "teresa black",
    },
    {
      url: "assets/img/Workspace/characters/11.png",
      name: "howard martinez",
    },
  ],
  [
    {
      url: "assets/img/Workspace/characters/12.png",
      name: "dereck zex",
      brand: "margaret",
    },
    {
      url: "assets/img/Workspace/characters/13.png",
      name: "Rob Sand",
    },
    {
      url: "assets/img/Workspace/characters/14.png",
      name: "Christie",
    },
    {
      url: "assets/img/Workspace/characters/15.png",
      name: "Jack frost",
    },
    {
      start: true,
      url: "assets/img/Workspace/characters/16.png",
      name: "Jason Pickels",
    },
    {
      middle: true,
      url: "assets/img/Workspace/characters/17.png",
      name: "MS. west",
    },
    {
      middle: true,
      url: "assets/img/Workspace/characters/18.png",
      name: "Chu wai",
    },
    {
      end: true,
      url: "assets/img/Workspace/characters/19.png",
      name: "Andrew swamper",
    },
    {
      url: "assets/img/Workspace/characters/20.png",
      name: "walter white",
    },
    {
      url: "assets/img/Workspace/characters/21.png",
      name: "teresa black",
    },
    {
      url: "assets/img/Workspace/characters/22.png",
      name: "howard martinez",
    },
  ],
  [
    {
      url: "",
      name: "howard martinez",
    },
  ],
];

export default function CharacterEditor(props) {
  const [showNewCharacterModal, setShowNewCharacterModal] =
    React.useState(false);
  const [cSide, setCSide] = React.useState(0);

  const NewCharacterModalFooter = React.useMemo(() => {
    return (
      <div className="flex justify-end">
        <PrimaryButton label="ADD" handleClick={() => {}} />
      </div>
    );
  }, []);

  const NewCharacterModalBody = React.useMemo(() => {
    return (
      <div className="flex flex-col divide-y divide-[#161616] min-h-[450px] overflow-hidden">
        <div className="grid grid-cols-2 px-6 py-4 gap-3">
          <Input label="Name" name="name" placeholder="Ex. John Wick" />
          <Dropdown label="Gender" menus={gender} />
          <Input label="Age" name="age" placeholder="Ex. John Wick" />
          <Dropdown label="Race" menus={races} />
        </div>

        <div className="px-6 py-4 gap-3">
          <CharacterSide
            label="Character Side"
            items={sides}
            currentSide={cSide}
            handleSetCurrentSide={setCSide}
          />
        </div>
      </div>
    );
  }, [cSide]);
  
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
          <button
            className="flex justify-center items-center border border-[#404040] w-20 h-20 rounded-[40px] outline-none"
            onClick={() => setShowNewCharacterModal(true)}
          >
            <BigPlusButtonIcon />
          </button>

          <label className="uppercase mt-2 text-center text-[#1DAEFF] text-[9px] w-[72px] h-[24px] font-bold  leading-3 tracking-[.21em] cursor-pointer">
            ADD Character
          </label>
        </div>
      </AddCharacterWrapper>

      {/* Main Board */}
      <CharacterBoardWrapper>
        {characters.map((row, index) => (
          <div key={index} className="grid grid-cols-11">
            {relations[index].length === 0 ? (
              <div className="col-span-11 h-4 mb-2" />
            ) : (
              relations[index].map((relation, index) => (
                <div key={index} className="col-span-11 h-4 mb-2">
                  <div className="grid grid-cols-11 h-4">
                    <div className={`${relation.span} text-center`}>
                      <span className="uppercase text-[9px] font-bold leading-3 tracking-[.21rem]">
                        {relation.relation}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
            {row.map((row, index) => (
              <SecondaryAvatar
                key={index}
                start={row.start}
                middle={row.middle}
                end={row.end}
                url={row.url}
                name={row.name}
                brand={row.brand}
              />
            ))}
          </div>
        ))}
      </CharacterBoardWrapper>

      {/* Modals */}
      {showNewCharacterModal && (
        <Modal
          title="New Characters"
          handleClose={() => setShowNewCharacterModal(false)}
          body={NewCharacterModalBody}
          footer={NewCharacterModalFooter}
        />
      )}
    </CharacterEditorWrapper>
  );
}
