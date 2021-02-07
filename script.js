
let remove = false;
let colorArray = []

function randomCol(){
    
    let colorBox = document.createElement('div')
    colorBox.className ="box-color"
    
    let colorsPicked = document.getElementById('color-selector').value

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
   
    for(let i = 0; i < colorsPicked; i++){
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    rgb = `rgb(${r},${g},${b})`;
    

    let colorDiv = document.createElement('div')
    colorDiv.className = 'color-box'
    colorDiv.id = 'colors'+(i+1)

    colorDiv.appendChild(document.createTextNode(rgb));
    
    colorDiv.style.backgroundColor = rgb;

    
    colorBox.append(colorDiv)

    let hexString = rgbToHex(r,g,b)
    colorArray.push(hexString)
    
   } 

   let containerBox = document.getElementsByClassName('color-container')
   let container = containerBox[0]
 
   container.appendChild(colorBox)

   let formatedColors = "{  " + colorArray.join(", ") + "   }; "
   console.log(formatedColors)
   
   let string_of_colors = document.createElement('p')
   string_of_colors.innerHTML = formatedColors
   string_of_colors.id = "color-string"

   document.body.appendChild(string_of_colors)
   remove = !remove;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


function color(){
    if(remove){
        remove = false
        let checker = document.getElementsByName("check")[0].checked
        console.log(checker)
        let arrayList = document.getElementById('color-string')
        if(checker !== true){
          colorArray = []
        }
        let idRemove = document.getElementsByClassName('box-color')
        idRemove[0].remove() 
        arrayList.remove()
        
     }
    randomCol()
   
}