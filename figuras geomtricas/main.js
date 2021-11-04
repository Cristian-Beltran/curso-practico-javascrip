// Codigo de calculo del cuadrado


const perimeterSquare = (side) => side * 4;

const areaSquare = (side) => side ** 2;


// Codigo de calculo de triangulo

const heightTriagle = (side, base) => Math.sqrt((side ** 2) - ((base ** 2) / 4));

const perimeterTriagle = (side1, side2, base) =>  side1 + side2 + base;

const areaTriagle = (height, base) => (height * base) / 2;


//COdigo de calculo de circunferencia

const diameterCircle = (radio) => radio * 2;
const pi = Math.PI;

const perimeterCircle = (radio) => diameterCircle(radio) * pi;

const areaCircle = (radio) => (radio ** 2) * pi;

// Obtener los elementos del html


const perimeter = document.getElementById("perimeter");
const area = document.getElementById("area");

function clear(){
    perimeter.innerHTML="";
    area.innerHTML="";
    document.getElementById("square_side").value="";
    document.getElementById("triagle_side1").value="";
    document.getElementById("triagle_side2").value="";
    document.getElementById("triagle_base").value="";
    document.getElementById("circle_radio").value="";
}

function calculate_square() {
    const side = parseInt(document.getElementById("square_side").value);
    perimeter.innerHTML = `${perimeterSquare(side).toFixed(2)} cm`;
    area.innerHTML = `${areaSquare(side).toFixed(2)} cm²`;
}

function calculate_triagle() {
    const side1 = parseInt(document.getElementById("triagle_side1").value);
    const side2 = parseInt(document.getElementById("triagle_side2").value);
    const base = parseInt(document.getElementById("triagle_base").value);
    if (((side1 + side2) > base) && ((side1 + base) > side2) && ((side2 + base) > side1)) {
        perimeter.innerHTML = `${perimeterTriagle(side1,side2,base).toFixed(2)} cm`;
        area.innerHTML = `${areaTriagle(heightTriagle(side1,base),base).toFixed(2)} cm²`;
    } else {
        alert("No es un triangulo")
    }
}

function calculate_circle() {
    const radio = parseInt(document.getElementById("circle_radio").value);
    perimeter.innerHTML = `${perimeterCircle(radio).toFixed(2)} cm`;
    area.innerHTML = `${areaCircle(radio).toFixed(2)} cm²`;
}

const data__square = document.getElementById("data__square");
const data__triagle = document.getElementById("data__triagle");
const data__circle = document.getElementById("data__circle");
const figura = document.getElementById("figura");

function square() {
    data__square.style.display = 'flex';
    data__triagle.style.display = 'none';
    data__circle.style.display = 'none';
    figura.src='cuadrado.png';
    clear()
}

function triagle() {
    data__square.style.display = 'none';
    data__triagle.style.display = 'flex';
    data__circle.style.display = 'none';
    figura.src='triangulo.png';
    clear()
}

function circle() {
    data__square.style.display = 'none';
    data__triagle.style.display = 'none';
    data__circle.style.display = 'flex';
    figura.src='circulo.png';
    clear()
}