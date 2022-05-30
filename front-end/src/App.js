import logo from './logo.svg';

import { useState, useRef } from 'react';

import './App.css';

function App() {
  const NUM_DIVS = 9;
  const [colors, setColors] = useState([])
  function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);;
  }
  const getRandomColors = (numColors) => {
    return Array.from({length:
      numColors}).map(getRandomColor)
  }
  function switchAllColors(){
    setColors(getRandomColors(NUM_DIVS))
  }
  return (
    <div className="container">
      <div className="grid-container-1">
        <div className='grid-item grid-item-1' style={{backgroundColor: colors[0]}} onClick={switchAllColors}>1</div>
        <div className='grid-item grid-item-2' style={{backgroundColor: colors[1]}} onClick={switchAllColors}>2</div>
        <div className='grid-item grid-item-3' style={{backgroundColor: colors[2]}} onClick={switchAllColors}>3</div>
        <div className='grid-item grid-item-4' style={{backgroundColor: colors[3]}} onClick={switchAllColors}>4</div>
      </div>
      <div className="grid-container-2">
        <div className='grid-item grid-item-5' style={{backgroundColor: colors[4]}} onClick={switchAllColors}>5</div>
        <div className='grid-item grid-item-6' style={{backgroundColor: colors[5]}} onClick={switchAllColors}>6</div>
        <div className='grid-item grid-item-7' style={{backgroundColor: colors[6]}} onClick={switchAllColors}>7</div>
        <div className='grid-item grid-item-8' style={{backgroundColor: colors[7]}} onClick={switchAllColors}>8</div>
        <div className='grid-item grid-item-9' style={{backgroundColor: colors[8]}} onClick={switchAllColors}>9</div>
      </div>
    </div>


  );
}

export default App;
