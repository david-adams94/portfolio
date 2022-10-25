let total = 0;

document.getElementById('strawBtn').onclick = function(){
    if(document.getElementById('smlStraw').selected){
        document.getElementById('selectedCart').innerHTML += `1x Sml Bundle of Straw<br>`;
        document.getElementById('cartPrompt').style.display = "none";
        document.getElementById('cart').style.display = "block";
        total += 20;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else if(document.getElementById('medStraw').selected){
        document.getElementById('selectedCart').innerHTML += `1x Med Bundle of Straw<br>`;
        document.getElementById('cartPrompt').style.display = "none";
        document.getElementById('cart').style.display = "block";
        total += 35;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else if(document.getElementById('lrgStraw').selected){
        document.getElementById('selectedCart').innerHTML += `1x Lrg Bundle of Straw<br>`;
        document.getElementById('cartPrompt').style.display = "none";
        document.getElementById('cart').style.display = "block";
        total += 80;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else{
        let error = window.prompt('Please select the quantity prior to adding to cart!');
        return error;
    }
}

document.getElementById('woodBtn').onclick = function(){
    if(document.getElementById('smlWood').selected){
        document.getElementById('selectedCart').innerHTML += `1x Sml Pile of Wood<br>`;
        document.getElementById('cartPrompt').style.display = "none";
        document.getElementById('cart').style.display = "block";
        total += 50;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else if(document.getElementById('medWood').selected){
        document.getElementById('selectedCart').innerHTML += `1x Med Pile of Wood<br>`;
        document.getElementById('cartPrompt').style.display = "none";
        document.getElementById('cart').style.display = "block";
        total += 75;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else if(document.getElementById('lrgWood').selected){
        document.getElementById('selectedCart').innerHTML += `1x Lrg Pile of Wood<br>`;
        document.getElementById('cartPrompt').style.display = "none";
        document.getElementById('cart').style.display = "block";
        total += 175;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else{
        let error = window.prompt('Please select the quantity prior to adding to cart!');
        return error;
    }
}

document.getElementById('brickBtn').onclick = function(){
    if(document.getElementById('smlBrick').selected){
        document.getElementById('selectedCart').innerHTML += `1x Sml Stack of Bricks<br>`;
        total += 100;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else if(document.getElementById('medBrick').selected){
        document.getElementById('selectedCart').innerHTML += `1x Med Stack of Bricks<br>`;
        total += 175;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else if(document.getElementById('lrgBrick').selected){
        document.getElementById('selectedCart').innerHTML += `1x Lrg Stack of Bricks<br>`;
        total += 500;
        document.getElementById('cartTotal').innerHTML = `Total: $${total}`;
    } else{
        let error = window.prompt('Please select the quantity prior to adding to cart!');
        return error;
    }
    document.getElementById('cartPrompt').style.display = "none";
    document.getElementById('cart').style.display = "block";
}

document.getElementById('payNowBtn').onclick = function(){
    document.getElementById('paymentPrompt').style.display = "none";
    document.getElementById('payment').style.display = "block";
    document.getElementById('directDebitDetails').style.display = "none";
}

document.querySelector("#visaRadio").onclick = function(){
    document.getElementById('cardDetails').style.display = "block";
    document.getElementById('payPalDetails').style.display = "none";
    document.getElementById('directDebitDetails').style.display = "none";
}

document.querySelector("#mcRadio").onclick = function(){
    document.getElementById('cardDetails').style.display = "block";
    document.getElementById('payPalDetails').style.display = "none";
    document.getElementById('directDebitDetails').style.display = "none";
}

document.querySelector("#amexRadio").onclick = function(){
    document.getElementById('cardDetails').style.display = "block";
    document.getElementById('payPalDetails').style.display = "none";
    document.getElementById('directDebitDetails').style.display = "none";
}

document.querySelector("#payPalRadio").onclick = function(){
    document.getElementById('cardDetails').style.display = "none";
    document.getElementById('payPalDetails').style.display = "block";
    document.getElementById('directDebitDetails').style.display = "none";
}

document.querySelector("#directDebitRadio").onclick = function(){
    document.getElementById('cardDetails').style.display = "none";
    document.getElementById('payPalDetails').style.display = "none";
    document.getElementById('directDebitDetails').style.display = "block";
}