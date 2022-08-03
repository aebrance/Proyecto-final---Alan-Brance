// ***** INICIO ROMPECABEZAS *****

// ----- INICIO CONTENEDOR DE PIEZAS ----- 
let setPieces = document.getElementById("dragZone");
let pieces = setPieces.childNodes;
// ----- FIN CONTENEDOR DE PIEZAS ----- 

// ----- INICIO PIEZAS ----- 
let piece1 = document.getElementById("pp1");
let piece2 = document.getElementById("pp2");
let piece3 = document.getElementById("pp3");
// ----- FIN PIEZAS ----- 

// ----- INICIO TABLERO -----
let board = document.getElementById("dropZone");
let squares = board.childNodes;
let htmlInit = board.innerHTML
// ----- FIN TABLERO ----- 

// INICIO CONTENEDORES
let cont1 = document.getElementById("db1");
let cont2 = document.getElementById("db2");
let cont3 = document.getElementById("db3");
// ----- FIN CONTENEDORES ----- 

piece1.addEventListener("dragstart", setInfo);
piece2.addEventListener("dragstart", setInfo);
piece3.addEventListener("dragstart", setInfo);

piece1.addEventListener("dragend", changeVisibility);
piece2.addEventListener("dragend", changeVisibility);
piece3.addEventListener("dragend", changeVisibility);

cont1.addEventListener("dragover", notRegularBehavior)
cont2.addEventListener("dragover", notRegularBehavior)
cont3.addEventListener("dragover", notRegularBehavior)

cont1.addEventListener("drop", setPiece);
cont2.addEventListener("drop", setPiece);
cont3.addEventListener("drop", setPiece);

function setInfo(event) {
    event.dataTransfer.setData('Text', event.target.getAttribute("src"));
}

function notRegularBehavior(event) {
    event.preventDefault();
}

function changeVisibility(event) {
    event.target.style.visibility = "hidden";
}

function setPiece(event) {
    let srcElem = event.dataTransfer.getData("Text");
    let htmlElem = '<img src="' + srcElem + '"  alt="pieza rompecabezas" class="puzzlePiece" >'
    event.target.innerHTML = htmlElem;
}

function resetPuzzle() {
    var htmlInit = "<p>Arrastre y suelte la imagen aquí</p>"
    for (let i = 0; i < pieces.length; i++) {
        if (i % 2 == 1) {
            pieces[i].style.visibility = "visible";
        }
    };
    for (let i = 0; i < squares.length; i++) {
        if (i % 2 == 1) {
            squares[i].innerHTML = htmlInit;
        }
    };
};
// ***** FIN ROMPECABEZAS *****
