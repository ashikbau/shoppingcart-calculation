
function updateCaseField(isCaseNumber){
    
        const caseNumberField = document.getElementById('case-number-field');
        const caseNumberFieldString = caseNumberField.value;
        const previousNumberField = parseInt(caseNumberFieldString);
       let newCaseNumber;
       if(isCaseNumber === true){
        newCaseNumber = previousNumberField + 1;
    
       }
       else {
        newCaseNumber = previousNumberField -1;
       }
        caseNumberField.value = newCaseNumber;
        return newCaseNumber;
    }
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElent = document.getElementById('case-total');
    caseTotalElent.innerText = caseTotalPrice;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumber = updateCaseField(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
})



document.getElementById('btn-case-minus').addEventListener('click', function(){
const newCaseNumber =  updateCaseField(false);

updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();

})