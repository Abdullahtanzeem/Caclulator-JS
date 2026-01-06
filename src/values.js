let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = "";

export function getFirstvalue(){
  return firstValue
}
export function setFirstvalue(value){
   firstValue = value;
}
export function getAwaitingNextValue(){
  return awaitingNextValue
}
export function setAwaitingNextValue(value){
   awaitingNextValue = value;
}
export function getOperatorValue(){
  return operatorValue;
}
export function setOperatorValue(value){
   operatorValue = value;
}