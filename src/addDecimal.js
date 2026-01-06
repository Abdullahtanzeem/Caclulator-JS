import { getAwaitingNextValue } from "./values";
import { calculatorDisplay } from "./selectors.js";

function addDecimal(){
  if(getAwaitingNextValue()){
    return;
  }
  if(!calculatorDisplay.textContent.includes(".")){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
  
}

export default addDecimal;