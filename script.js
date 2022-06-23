let pizzaPrice = 0;
let sizePrice = 0;
let topingPrice = 0


function getPizza(value){
    if(value == "pizza 1"){
        pizzaPrice = 8;
        document.querySelector('input[name=small]').disabled = false;
        document.querySelector('input[name=medium]').disabled = false;
        document.querySelector('input[name=large]').disabled = false;
        document.querySelector('input[class=avocado]').disabled = false;
        document.querySelector('input[class=lobster]').disabled = true;
        document.querySelector('input[class=lobster]').checked = false;
        document.querySelector('input[class=bacon]').disabled = true;
        document.querySelector('input[class=bacon]').checked = false;
        document.querySelector('input[class=brocoli]').disabled = false;
        document.querySelector('input[class=oyster]').disabled = true;
        document.querySelector('input[class=oyster]').checked = false;
        document.querySelector('input[class=duck]').disabled = true;
        document.querySelector('input[class=duck]').checked = false;
        document.querySelector('input[class=onions]').disabled = false;
        document.querySelector('input[class=salmon]').disabled = true;
        document.querySelector('input[class=salmon]').checked = false;
        document.querySelector('input[class=ham]').disabled = false;
        document.querySelector('input[class=zucchuni]').disabled = false;
        document.querySelector('input[class=tuna]').disabled = false;
        document.querySelector('input[class=sausage]').disabled = true;
        document.querySelector('input[class=sausage]').checked = false;
    }else if(value == "pizza 2"){
        pizzaPrice = 10;
        document.querySelector('input[name=small]').disabled = false;
        document.querySelector('input[name=medium]').disabled = false;
        document.querySelector('input[name=large]').disabled = false;
        document.querySelector('input[class=avocado]').disabled = true;
        document.querySelector('input[class=avocado]').checked = false;
        document.querySelector('input[class=lobster]').disabled = false;
        document.querySelector('input[class=bacon]').disabled = false;
        document.querySelector('input[class=brocoli]').disabled = false;
        document.querySelector('input[class=oyster]').disabled = false;
        document.querySelector('input[class=duck]').disabled = true;
        document.querySelector('input[class=duck]').checked = false;
        document.querySelector('input[class=onions]').disabled = false;
        document.querySelector('input[class=salmon]').disabled = false;
        document.querySelector('input[class=ham]').disabled = false;
        document.querySelector('input[class=zucchuni]').disabled = false;
        document.querySelector('input[class=tuna]').disabled = true;
        document.querySelector('input[class=tuna]').checked = false;
        document.querySelector('input[class=sausage]').disabled = true;
        document.querySelector('input[class=sausage]').checked = false;
    }else{
        pizzaPrice = 12;
        document.querySelector('input[name=small]').disabled = false;
        document.querySelector('input[name=medium]').disabled = false;
        document.querySelector('input[name=large]').disabled = false;
        document.querySelector('input[class=avocado]').disabled = true;
        document.querySelector('input[class=avocado]').checked = false;
        document.querySelector('input[class=lobster]').disabled = false;
        document.querySelector('input[class=bacon]').disabled = false;
        document.querySelector('input[class=brocoli]').disabled = false;
        document.querySelector('input[class=oyster]').disabled = true;
        document.querySelector('input[class=oyster]').checked = false;
        document.querySelector('input[class=duck]').disabled = false;
        document.querySelector('input[class=onions]').disabled = false;
        document.querySelector('input[class=salmon]').disabled = true;
        document.querySelector('input[class=salmon]').checked = false;
        document.querySelector('input[class=ham]').disabled = false;
        document.querySelector('input[class=zucchuni]').disabled = false;
        document.querySelector('input[class=tuna]').disabled = false;
        document.querySelector('input[class=sausage]').disabled = false;
    }
    topingPrice = recountToping()
    let total = document.getElementById('total')
    let sum = pizzaPrice + topingPrice + sizePrice;
    total.innerHTML = "$" + sum 
}

function getSize(value){
    topingPrice = recountToping()
    if(value == "small"){
        document.querySelector("input[name=small]").checked = true;
        document.querySelector("input[name=medium]").checked = false;
        document.querySelector("input[name=large]").checked = false;
        sizePrice = -1
    }else if(value == "medium"){
        document.querySelector("input[name=small]").checked = false;
        document.querySelector("input[name=medium]").checked = true;
        document.querySelector("input[name=large]").checked = false;
        sizePrice = 0
    }else{
        document.querySelector("input[name=small]").checked = false;
        document.querySelector("input[name=medium]").checked = false;
        document.querySelector("input[name=large]").checked = true;
        sizePrice = 2
    }
    let total = document.getElementById('total')
        let sum = pizzaPrice + sizePrice + topingPrice;
        total.innerHTML = "$" + sum
     
}

function reCountSize(){
    if(value == "small"){
        sizePrice = -1
        document.querySelector("input[name=small]").checked = true;
        document.querySelector("input[name=medium]").checked = false;
        document.querySelector("input[name=large]").checked = false;
    }else if(value == "medium"){
        sizePrice = 0
        document.querySelector("input[name=small]").checked = false;
        document.querySelector("input[name=medium]").checked = true;
        document.querySelector("input[name=large]").checked = false;
    }else if(value == "large"){
        sizePrice = 2
        document.querySelector("input[name=small]").checked = false;
        document.querySelector("input[name=medium]").checked = false;
        document.querySelector("input[name=large]").checked = true;
    }
    return sizePrice
}

function getToping(){
        let toping = document.getElementsByName("toping")
        let topingPrice = 0
            for(let i = 0; i < toping.length; i++){
                if(toping[i].checked){
                    topingPrice += parseFloat(toping[i].value);
                }
            }
            let total = document.getElementById('total')
            let sum = pizzaPrice + topingPrice + sizePrice;
            total.innerHTML = "$" + sum 
        
}

function recountToping(){
    let toping = document.getElementsByName("toping")
        let topingPrice = 0
            for(let i = 0; i < toping.length; i++){
                if(toping[i].checked){
                    topingPrice += parseFloat(toping[i].value);
                }
            }
        return topingPrice;
}