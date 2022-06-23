let pizza = document.querySelectorAll('input[name=pizza]')
let pizzaPrice;
function getPizza(){
    let pizza = document.getElementsByName('pizza')
    console.log(pizza)
    let topingPrice = 0
    for(let i = 0; i < toping.length; i++){
        if(pizza[i].checked){
            topingPrice = parseInt(toping[i].value);
        }
    }
   console.log(topingPrice)
}