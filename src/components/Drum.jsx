import React from "react";
import { connect } from 'react-redux';
import DrumButton from './DrumButton.jsx';
import { buttonsOne, buttonsTwo } from '../store.js';

const Drum = ({currentSound, power, bank, changeBank, changeText, changePower}) => {

  let currentButton = (bank)? buttonsOne : buttonsTwo;

  return (
    <div id="drum-machine">
      <div className="buttons">
        { 
          currentButton.map((b, i) => (
            <DrumButton 
              key={i} 
              id={b.id} 
              letter={b.letter} 
              keyCode={b.keyCode}
              onClick={()=>changeText(b.name)} 
              power={power} 
              src={b.src}/>) 
          )
        }
      </div>
      <div className="right">
        <span>Power</span>
        <div className="black" style={(power)?{justifyContent: 'flex-end'}:{}} onClick={changePower}>
          <div className="blue"></div>
        </div>
        <span id="display">{currentSound}</span>
        <span>Bank</span>
        <div className="black" style={(bank)?{justifyContent: 'flex-end'}:{}} onClick={changeBank}>
          <div className="blue"></div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  currentSound: state.currentSound,
  power: state.power,
  bank: state.bank
});

const mapDispatchToProps = dispatch => ({
    changeText(text) {
        dispatch({
            type: "CHANGE_TEXT",
            text: text
        })
    },
    changeBank() {
        dispatch({
            type: "CHANGE_BANK"
        })
    },
    changePower() {
        dispatch({
            type: "CHANGE_POWER"
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Drum);