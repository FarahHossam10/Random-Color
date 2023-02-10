const hexValues =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn = document.getElementById("btn");
let h1 = document.getElementById("colorname");
btn.addEventListener("click", ()=>{
  let hexColor = "#";
  for(i=0 ; i< 6 ; i++){
    let randomValue = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[randomValue];
  }
  document.body.style.backgroundColor = hexColor; 
  h1.textContent = "Color : " + hexColor; 
  }
);
