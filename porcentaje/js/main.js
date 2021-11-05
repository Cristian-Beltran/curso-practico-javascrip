const totalPrice = (price,discount) => (price * (100-discount))/100;

const result = document.getElementById('result');
function calculate(){
    const price = parseInt(document.getElementById("price").value); 
    const discount = parseInt(document.getElementById("discount").value);
    result.innerText = `${totalPrice(price,discount).toFixed(2)}$`;
}