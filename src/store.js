import { createStore } from "redux";

const buttonsOne = [
  {
    id: "Chord1",
    name: "Chord 1",
    letter: "Q",
    keyCode: 81,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {

    id: "Chord2",
    name: "Chord 2",
    letter: "W",
    keyCode: 87,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    id: "Chord3",
    name: "Chord 3",
    letter: "E",
    keyCode: 69,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    id: "Shaker",
    name: "Shaker",
    letter: "A",
    keyCode: 65,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    id: "OpenHH",
    name: "Open HH",
    letter: "S",
    keyCode: 83,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    id: "ClosedHH",
    name: "Closed HH",
    letter: "D",
    keyCode: 68,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    id: "PunchyKick",
    name: "Punchy Kick",
    letter: "Z",
    keyCode: 90,
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    id: "SideStick",
    name: "Side Stick",
    letter: "X",
    keyCode: 88,
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    id: "Snare",
    name: "Snare",
    letter: "C",
    keyCode: 67,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const buttonsTwo = [
  {
    id: "Heater1",
    name: "Heater 1",
    letter: "Q",
    keyCode: 81,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "Heater2",
    name: "Heater 2",
    letter: "W",
    keyCode: 87,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "Heater3",
    name: "Heater 3",
    letter: "E",
    keyCode: 69,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "Heater4",
    name: "Heater 4",
    letter: "A",
    keyCode: 65,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "Clap",
    name: "Clap",
    letter: "S",
    keyCode: 83,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "OpenHH",
    name: "Open HH",
    letter: "D",
    keyCode: 68,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Kickn'Hat",
    name: "Kick n' Hat",
    letter: "Z",
    keyCode: 90,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "Kick",
    name: "Kick",
    letter: "X",
    keyCode: 88,
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "ClosedHH",
    name: "Closed HH",
    letter: "C",
    keyCode: 67,
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const initialState = {
  power: true,
  currentSound: "",
  bank: false
}

const reducerDrum = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return {
        ...state,
        currentSound: action.text
      };
    case "CHANGE_BANK":
      if (state.bank) {
        return {
          ...state,
          bank: !state.bank,
          currentSound: "Heater Kit"
        };
      } else {
        return {
          ...state,
          bank: !state.bank,
          currentSound: "Smooth Piano Kit"
        };
      }
    case "CHANGE_POWER":
      return {
        ...state,
        power: !state.power,
        currentSound: ""
      };
    default:
      return state;
  }
}

export default createStore(reducerDrum);
export { buttonsOne, buttonsTwo };