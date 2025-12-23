const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

inputBtns.forEach((inputBtn)=> {
  if(inputBtn.classList.length === 0){
    inputBtn.addEventListener("click", ()=> {console.log(inputBtn.value)});
  }
});