import { calculatorDisplay } from "./selectors.js";
import { getFirstValue, getAwaitingNextValue, getOperatorValue, setFirstvalue, setAwaitingNextValue, setOperatorValue } from "./values.js";
import calculate from "./calculate.js";

function useOperator(operator){
  const currentValue = Number(calculatorDisplay.textContent);
  if(getOperatorValue() && getAwaitingNextValue()){
    setOperatorValue(operator);
      return;
  }
  if(!getFirstValue()){
    setFirstvalue(currentValue);
  }else{
    const calculation = calculate[getOperatorValue()](getFirstValue(), currentValue);
    calculatorDisplay.textContent = calculation;
    setFirstvalue(calculation);
  }
  setAwaitingNextValue(true);
  setOperatorValue(operator);
}

export default useOperator;