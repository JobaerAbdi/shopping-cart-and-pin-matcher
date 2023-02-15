
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const prevCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = prevCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

    const casePrice = document.getElementById('case-price');
    const caseTotalPrice = newCaseNumber * 59;
    casePrice.innerText = caseTotalPrice;



    const currentCasePrice = document.getElementById('case-price');
    const currentCasePriceString = currentCasePrice.innerText;
    const currentCasePriceTotal = parseInt(currentCasePriceString);

    const currentPhonePrice = document.getElementById('phone-price');
    const currentPhonePriceString = currentPhonePrice.innerText;
    const currentPhonePriceTotal = parseInt(currentPhonePriceString); 

    const totalPhoneCasePrice = currentPhonePriceTotal + currentCasePriceTotal;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = totalPhoneCasePrice;


    const totalPhoneCaseTax = totalPhoneCasePrice * 15 / 100;
    const taxTotal = document.getElementById('tax-total');
    taxTotal.innerText = totalPhoneCaseTax;



    const subTotalElement = document.getElementById('sub-total');
    const subTotalElementString = subTotalElement.innerText;
    const subTotalAmount = parseFloat(subTotalElementString);

    const taxTotalElement = document.getElementById('tax-total');
    const taxTotalElementString = taxTotalElement.innerText;
    const taxTotalAmount = parseFloat(taxTotalElementString);

    const finalTotalAmount = subTotalAmount + taxTotalAmount;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = finalTotalAmount;
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const prevCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = prevCaseNumber - 1;
    caseNumberField.value = newCaseNumber;

    const casePrice = document.getElementById('case-price');
    const caseTotalPrice = newCaseNumber * 59;
    casePrice.innerText = caseTotalPrice;



    const currentCasePrice = document.getElementById('case-price');
    const currentCasePriceString = currentCasePrice.innerText;
    const currentCasePriceTotal = parseInt(currentCasePriceString);

    const currentPhonePrice = document.getElementById('phone-price');
    const currentPhonePriceString = currentPhonePrice.innerText;
    const currentPhonePriceTotal = parseInt(currentPhonePriceString); 

    const totalPhoneCasePrice = currentPhonePriceTotal + currentCasePriceTotal;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = totalPhoneCasePrice;



    const totalPhoneCaseTax = totalPhoneCasePrice * 15 / 100;
    const taxTotal = document.getElementById('tax-total');
    taxTotal.innerText = totalPhoneCaseTax;


    

    const subTotalElement = document.getElementById('sub-total');
    const subTotalElementString = subTotalElement.innerText;
    const subTotalAmount = parseFloat(subTotalElementString);

    const taxTotalElement = document.getElementById('tax-total');
    const taxTotalElementString = taxTotalElement.innerText;
    const taxTotalAmount = parseFloat(taxTotalElementString);

    const finalTotalAmount = subTotalAmount + taxTotalAmount;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = finalTotalAmount;

})  


/* function updateNumber(isUpdate){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const prevCaseNumber = parseInt(caseNumberString);

    let newNumber = 0;
    if(isUpdate){
        newNumber = prevCaseNumber + 1;
    }
    else{
        newNumber = prevCaseNumber - 1;
    }
    caseNumberField.value = newNumber;
    return newNumber;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateNumber(true);

    const casePrice = document.getElementById('case-price');
    const totalCasePrice = newCaseNumber * 59;
    casePrice.innerText = totalCasePrice;
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateNumber(false);

    const casePrice = document.getElementById('case-price');
    const totalCasePrice = newCaseNumber * 59;
    casePrice.innerText = totalCasePrice;
})  */ 