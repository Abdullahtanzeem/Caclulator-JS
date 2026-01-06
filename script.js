

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => addNumberValue(inputBtn.value));
  }else if(inputBtn.classList.contains("operator")){
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  }
  else if(inputBtn.classList.contains("decimal")){
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

function resetAll(){
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calculatorDisplay.textContent = "0";
}
clearBtn.addEventListener("click", resetAll);