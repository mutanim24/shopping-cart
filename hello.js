function updateProductNumber( product, increasing, price){
    const filedInput = document.getElementById(product + '-input');
    let filedInputNumber = filedInput.value;
    if(increasing == true){
        filedInputNumber = parseInt(filedInputNumber) + 1;
    }
    else if(filedInputNumber > 0){
        filedInputNumber = parseInt(filedInputNumber) - 1;
    }
    filedInput.value = filedInputNumber;

    //ammount update
    const productTotalPrice = document.getElementById(product + '-total');
    productTotalPrice.innerText = filedInputNumber * price;

    //overall calculation
    calculateTotal();
}

//phone calculasion event

document.getElementById('phone-plus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-input');
    // const caseInputNumber = caseInput.value;
    // caseInput.value = parseInt(caseInputNumber) + 1;
    updateProductNumber('phone', true, 999);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-input');
    // const caseInputNumber = caseInput.value;
    // caseInput.value = parseInt(caseInputNumber) - 1;
    updateProductNumber('phone', false, 999);
})


//case calculasin event

document.getElementById("case-plus").addEventListener('click', function(){
    // const caseInput = document.getElementById("case-input");
    // const caseInputNumber = caseInput.value;
    // caseInput.value = parseInt(caseInputNumber) + 1;

    // //ammount update
    // const caseTotal = document.getElementById('case-total');
    // caseTotalNumber = parseInt(caseTotal.innerText); 
    // caseTotal.innerText = caseTotalNumber * caseInputNumber;
    updateProductNumber('case', true, 59);
})


document.getElementById("case-minus").addEventListener('click', function(){
    updateProductNumber('case', false, 59);
})

//total calculation
function getInput(product){
    const phoneInput = document.getElementById(product + '-input');
    const phoneInputNumber = parseInt(phoneInput.value);
    return phoneInputNumber; 
}

function calculateTotal(){
    const phoneTotal = getInput('phone') * 999;
    const caseTotal = getInput('case') * 59;
    const priceTotal = phoneTotal + caseTotal;
    const tax = priceTotal / 10;
    const overallTotal = priceTotal + tax;
    document.getElementById('sub-total').innerText = priceTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('price-total').innerText = overallTotal;
}