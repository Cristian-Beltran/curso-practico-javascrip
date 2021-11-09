
const cal_promedio = (lista) => {
    const suma = lista.reduce((acumulado,dato)=>parseInt(acumulado)+parseInt(dato));
    return suma/lista.length;
} 

const cal_mediana = (lista) => {
    const mitad = parseInt(lista.length/2);
    if (lista.length % 2 === 0){
       const element1 = lista[mitad];
       const element2 = lista[mitad-1]; 
       return cal_promedio([element1,element2])
    }else{
        const element = lista[mitad];
        return element
    }
}

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
}

const cal_moda = (lista) => {
    return lista.sort((a,b)=> lista.filter((v)=>v===a).length - lista.filter(v=> v===b).length).pop();
}
const promedio = document.getElementById('promedio');
const mediana = document.getElementById('mediana');
const moda = document.getElementById('moda');
function calculate(){
    const numbers = document.getElementById("data").value.split(',');
    promedio.innerText = cal_promedio(numbers)
    mediana.innerText = cal_mediana(numbers.sort())
    moda.innerText = cal_moda(numbers)
}
