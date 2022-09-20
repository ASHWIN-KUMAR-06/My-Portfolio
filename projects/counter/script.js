
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

const number = document.querySelector(".number");


decrease.addEventListener("click", ()=>{
    let output = +number.textContent - 1
    number.textContent = output;
    if(+number.textContent < 0) {
        number.style.color = 'darkred';
    } else if (+number.textContent === 0) {
        number.style.color = "black";
    }
})

reset.addEventListener("click", ()=>{
    number.textContent = 0;
    number.style.color = "black"
})

increase.addEventListener("click", ()=>{
    let output = +number.textContent + 1;
    number.textContent = output;
    if(+number.textContent > 0) {
        number.style.color = "green";
    } else if (+number.textContent === 0) {
        number.style.color = "black";
    }
})

