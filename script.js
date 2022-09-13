
function rgb_gen(){
  let r = Math.floor(Math.random()*255) 
  let g = Math.floor(Math.random()*255) 
  let b = Math.floor(Math.random()*255) 
  console.log([r,g,b])
  let color = 'rgb(' + `${r},${g},${b}` + ")";
  return {"color":color,"arr":[r,g,b]};
}


function btn_click(btn){
  let color = rgb_gen();
  document.getElementById("body").style.background = color["color"];
  document.getElementById("btn-clk").style.background = color["color"];
  let rgb = color["arr"];
  let hexval = ConvertRGBtoHex(rgb[0],rgb[1],rgb[2]);
  document.getElementById("hexcode").innerHTML = hexval;
  
}

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}



