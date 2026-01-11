import { calculatorDisplay } from "./selectors.js";
import { getFirstValue, getAwaitingNextValue, getOperatorValue, setFirstValue, setAwaitingNextValue, setOperatorValue } from "./values.js";
import calculate from "./calculate.js";

function useOperator(operator){
  const currentValue = Number(calculatorDisplay.textContent);
  if(getOperatorValue() && getAwaitingNextValue()){
    setOperatorValue(operator);
      return;
  }
  if(!getFirstValue()){
    setFirstValue(currentValue);
  }else{
    const calculation = calculate[getOperatorValue()](getFirstValue(), currentValue);
    calculatorDisplay.textContent = calculation;
    setFirstValue(calculation);
  }
  setAwaitingNextValue(true);
  setOperatorValue(operator);
}

export default useOperator;