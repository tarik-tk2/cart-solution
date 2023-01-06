 let getDoc = document.getElementById("1stItem");
function updateValue(productId, isIncrease, priceID, price) {
  const phoneInput = document.getElementById(productId);
    let phoneValue = parseInt(phoneInput.value);
    const priceId = document.getElementById(priceID + "Price");
    const subId = document.getElementById("subTotal")
     
    //   let phonePrice = parseInt(priceId.innerText) 
  if (isIncrease ) {
    phoneValue = phoneValue + 1;
      phoneInput.value = phoneValue;
          priceId.innerText = phoneValue*price;
  } else {
      if (phoneValue>0) {
        phoneValue = phoneValue - 1;
          phoneInput.value = phoneValue;
          priceId.innerText = phoneValue*price;
      }
       
  }
  calculation();
    
}
function calculation() {
  const phoneValue = document.getElementById("phonePrice");
  const phonePrice = parseInt(phoneValue.innerText)
  const caseValue = document.getElementById("casePrice")
  const casePrice = parseInt(caseValue.innerText);
  const subTotal = phonePrice + casePrice;

  if (getDoc.style.display==='none') { 
    subTotal = subTotal- phonePrice;
    
  }
    document.getElementById("subTotal").innerText = subTotal;
    const tax = subTotal * 0.01;
    document.getElementById("tax").innerText = tax.toFixed();
    document.getElementById("total").innerText = (subTotal + tax).toFixed();
}
document.getElementById("phoneIncrement").addEventListener("click", () => {
  updateValue("phoneInput", true, "phone", 1219);
});
document.getElementById("phoneDecrement").addEventListener("click", () => {
  updateValue("phoneInput", false, "phone", 1219);
});
document.getElementById("caseIncrement").addEventListener('click', () => {
    updateValue("caseInput",true,"case",59)
})
document.getElementById("caseDecrement").addEventListener("click", () => {
  updateValue("caseInput", false,"case",59);
});

document.getElementById("deleteButton").addEventListener("click", () => {
 
  getDoc.style.display = 'none'
  
})