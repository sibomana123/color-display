
import colorNames from "colornames";
const InputColor = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
   <form action="" onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="">Add color name:</label>
    <input type="text"
    autoFocus
    placeholder="add color name"
    required
    value={colorValue}
    onChange={(e)=>{
      setColorValue(e.target.value);
      setHexValue(colorNames(e.target.value))   //to translate color to hev value this colorNames  

    }}   />

    <button type="button"
    onClick={()=>setIsDarkText(!isDarkText)}
    >
toggle text color
</button>
   </form>
  )
}

export default InputColor