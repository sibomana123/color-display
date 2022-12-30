

const Color = ({colorValue, hexValue,isDarkText}) => {
  return (
    <section className="square" style={{
      backgroundColor:colorValue, 
      color:isDarkText ? "#000":"#FFF"}}>
    <p>{colorValue ? colorValue : "Empty color name"}</p>
    <p>{hexValue ? hexValue : null}</p>
    </section>
  )
  
}
Color.defaultProps={
  colorValue:"Empty color value"
}
export default Color