// Select color input
// Select size input
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
const canvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()}   
document.addEventListener('submit', function (create) {
    makeGrid();
    create.preventDefault();
})

canvas.addEventListener('click', function (fill) {
    let colorPick = document.querySelector('#colorPicker').value;
    if (fill.target.nodeName === 'TD') {
        if (fill.target.style.backgroundColor == false) {
            fill.target.style.backgroundColor = colorPick;
        } else {
            fill.target.style.backgroundColor = '';
        }
    }
});


function makeGrid() {

    // Your code goes here!

    // remove previous children
    // while (canvas.hasChildNodes()) {
    //     canvas.removeChild(canvas.firstChild);
    // }
    canvas.innerHTML = "";
    for (let row = 1; row <= height.value; row++) {
        // const newRow = document.createElement('tr');
        // canvas.appendChild(newRow);
        const newRow = canvas.insertRow(0);
        for (let column = 1; column <= width.value; column++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
    }

}
