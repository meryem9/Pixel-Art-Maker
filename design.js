// Select color input
// Select size input
const color = document.getElementById("colorPicker");
const tableElement = document.getElementById("pixelCanvas");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");


$('#sizePicker').submit(function(event) {
  event.preventDefault();
  makeGrid(height, width);
} )
// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

  for(let i = 0; i < inputHeight.value; i++) {
    let row = tableElement.insertRow(i);
  for(let j = 0; j < inputWidth; j++) {
    let cell = row.insertCell(j);
    cell.addEventListener("click", function(event) {
      cell.style.backgroundColor = color.value;
     });
   }
 }
}
