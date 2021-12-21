const btnCol = document.querySelector("#btn-color");
let color = ["red", "blue", "green"]


btnCol.addEventListener("click", function()
{
 let hexColor = "#"
 for (let i=0; i<color.length; i++)
 {
     hexColor = color[getRandomColor()]
     
 }

document.body.style.backgroundColor = hexColor;
})
 function getRandomColor()
 {
    console.log("comes here")
     return Math.floor(Math.random() * color.length)
 }