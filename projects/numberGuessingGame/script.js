
const inputBox = document.getElementById("input-box");
const playButton = document.querySelector(".play-button button");
const guessButton = document.querySelector(".playing-area button");
const winningNumberContainer = document.querySelector(".winning-number p");
const remark = document.querySelector(".remark");
const guessCount = document.querySelector(".guess-count");


let winningNumber = 0;
let userGuessTimes = 1;






playButton.addEventListener("click", playButtonFunc);

function playButtonFunc() {

    inputBox.value = "";
    guessButton.textContent = "Guess";

    inputBox.removeAttribute("disabled");
    inputBox.setAttribute("autofocus", "autofocus");

    inputBox.style.backgroundColor = "white";
    inputBox.style.border = "3px solid black";
    inputBox.style.transition = "all 0.1s ease-in-out"

    this.textContent = "Re-start";

    winningNumber = Math.floor(Math.random()*100);

    winningNumberContainer.textContent = winningNumber;

    document.querySelector(".cover").style.transform = "translate(0, 0%)";

    guessButton.addEventListener("click", guessButtonFunc);

    guessCount.textContent = 0;
    remark.textContent = "Hints";
    remark.style.color = "white";
    remark.style.borderBottom = "none";

    userGuessTimes = 1;

    document.querySelector(".new-game").style.display = "block";

}





function guessButtonFunc(){

    let userValue = +inputBox.value;
    
    if(!userValue) {
        remark.textContent = "invalid input please put numbers only";
        userGuessTimes += 1;

    } else if(userValue===winningNumber) {
        remark.textContent = `You won and you guessed in ${userGuessTimes} times`;
        remark.style.color = "yellow";
        remark.style.fontSize = "1.8rem";
        remark.style.borderBottom = "1px solid yellow";

        document.querySelector(".cover").style.transition = "all 1s ease";
        document.querySelector(".cover").style.transform = "translate(0, -100%)";

        this.removeEventListener("click", guessButtonFunc);

    } else {
        if(userValue<winningNumber) {
            remark.textContent = `${userValue} is too low`;
            remark.style.color = 'red';
            userGuessTimes += 1;

        } else {
            remark.textContent = `${userValue} is too high`;
            remark.style.color = "green";
            userGuessTimes += 1;
        }
    }

    this.textContent = "Guess again";
    inputBox.value = "";
    inputBox.setAttribute("autofocus", 'autofocus');

    guessCount.textContent = +guessCount.textContent + 1;

    document.querySelector(".new-game").style.display = "none";
}




