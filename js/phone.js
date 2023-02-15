document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const prevPhoneNumber = parseInt(phoneNumberFieldString);
    const newPhoneNumber = prevPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
    const phonePrice = document.getElementById('phone-price');
    const totalPhonePrice = newPhoneNumber * 1219;
    phonePrice.innerText = totalPhonePrice;




    const currentPhonePrice = document.getElementById('phone-price');
    const currentPhonePriceString = currentPhonePrice.innerText;
    const currentPhonePriceTotal = parseInt(currentPhonePriceString); 

    const currentCasePrice = document.getElementById('case-price');
    const currentCasePriceString = currentCasePrice.innerText;
    const currentCasePriceTotal = parseInt(currentCasePriceString);

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

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const prevPhoneNumber = parseInt(phoneNumberFieldString);
    const newPhoneNumber = prevPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber;

    const phonePrice = document.getElementById('phone-price');
    const totalPhonePrice = newPhoneNumber * 1219;
    phonePrice.innerText = totalPhonePrice;




    const currentPhonePrice = document.getElementById('phone-price');
    const currentPhonePriceString = currentPhonePrice.innerText;
    const currentPhonePriceTotal = parseInt(currentPhonePriceString); 

    const currentCasePrice = document.getElementById('case-price');
    const currentCasePriceString = currentCasePrice.innerText;
    const currentCasePriceTotal = parseInt(currentCasePriceString);

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