// Select color input
// Select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const canvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()}   
document.addEventListener('submit', function (create) {
    makeGrid();
    create.preventDefault();
})

document.addEventListener('click', function (fill) {
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
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
    }
    for (let row = 1; row <= height.value; row++) {
        const newRow = document.createElement('tr');
        canvas.appendChild(newRow);
        for (let column = 1; column <= width.value; column++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
    }

}
