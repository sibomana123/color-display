import './App.css';
import Color from './Color';
import InputColor from './InputColor';
import { useState} from 'react';

function App() {
  const [colorValue, setColorValue]=useState('')
  const [hexValue, setHexValue]=useState('')
  const [isDarkText, setIsDarkText]=useState(true)
  return (
  <div className="App">
   <Color 
   colorValue={colorValue}
   hexValue={hexValue}
   isDarkText={isDarkText}
   />
   <InputColor
   colorValue={colorValue}
   setColorValue={setColorValue}
   hexValue={hexValue}
   setHexValue={setHexValue}
   isDarkText={isDarkText}
   setIsDarkText={setIsDarkText}
   />
  </div>
 
  );

  }
export default App;
