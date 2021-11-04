// Codigo de calculo del cuadrado


const perimetroCuadrado = (lado) => lado*4;

const areaCuadrado = (lado) => lado**2;


// Codigo de calculo de triangulo

const perimetroTriangulo = (lado1,lado2,base) => lado1+ lado2+ base;

const areaTriangulo =(altura,base) =>(altura*base)/2;


//COdigo de calculo de circunferencia

const diametroCircunferencia = (radio) =>radio*2;
const pi = Math.PI;

const perimetroCircunferencia = (radio) => diametroCircunferencia(radio)*pi;

const areaCircunferencia = (radio)=>(radio**2)*pi;

