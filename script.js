const btnCol = document.querySelector("#btn-color");
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


btnCol.addEventListener("click", function()
{
 let hexColor = "#"
 for (let i=0; i<6; i++)
 {
     hexColor += arr[getRandomColor()]
     
 }

document.body.style.backgroundColor = hexColor;
})
 function getRandomColor()
 {
    console.log("comes here")
     return Math.floor(Math.random() * arr.length)
 }