

const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (e)=>{
    const screen = document.querySelector(".screen .screen-content");


    if (e.target.classList.contains("screen")){
        

    } else if(e.target.classList.contains("ac")){
        screen.textContent = "0";
        tempVar = 0;

    } else if(e.target.classList.contains('erase')){
        let content = screen.textContent;
        screen.textContent = content.slice(0, content.length-1);

    } else if(e.target.classList.contains("one")) {
        buttonClick(e.target.textContent);
        
    } else if(e.target.classList.contains("two")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("three")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("four")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("five")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("six")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("seven")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("eight")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("nine")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("zero")) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("dot")) {
        if (!screen.textContent.includes(".")){
            screen.textContent += ".";
        }

    } else if(e.target.classList.contains('divide')) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains('multiply')) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains('plus')) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains('minus')) {
        buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("percent")) {
        // buttonClick(e.target.textContent);

    } else if(e.target.classList.contains("equal-to")) {
        equalToClick();
    }
})


let tempVar = 0;
function buttonClick(buttonMark) {
    const screen = document.querySelector(".screen .screen-content");

    if(tempVar===0){
        screen.textContent = "";
        screen.textContent += buttonMark;
        tempVar++;
    } else {
        screen.textContent += buttonMark;
    }
}


function equalToClick() {
    let screen = document.querySelector(".screen .screen-content");
    screen = screen.textContent;
    const signs = ['+', '-', 'x', '÷', '%'];
    
    let signsOfScreen = [];
    for (let character of screen) {
        for (let sign of signs) {
            if(character===sign) {
                signsOfScreen.push(sign);
            }
        }
    }    
    
    
    let operands = [];
    for (let i=0; i<signsOfScreen.length; i++) {
        operands.push(+screen.slice(0, screen.indexOf(signsOfScreen[i])));
        screen = screen.slice(screen.indexOf(signsOfScreen[i])+1);
    } 
    operands.push(+screen);
    
    
    while(true) {
    
        if(signsOfScreen.length===0) {
            break;
    
        } else {
            if(signsOfScreen.includes("÷")) {
                let index = signsOfScreen.indexOf("÷");
                let div = (operands[index]/operands[index+1]);
                signsOfScreen.splice(index, 1);
                operands.splice(index, 2, div);
    
            } else {
                if(signsOfScreen.includes('x')) {
                let index = signsOfScreen.indexOf("x");
                let multiply = (operands[index]*operands[index+1]);
                signsOfScreen.splice(index, 1);
                operands.splice(index, 2, multiply);
    
                } else {
                    if (signsOfScreen.includes("+")) {
                        let index = signsOfScreen.indexOf("+");
                        let add = (operands[index]+operands[index+1]);
                        signsOfScreen.splice(index, 1);
                        operands.splice(index, 2, add);
    
                    } else {
                        if (signsOfScreen.includes("-")) {
                            let index = signsOfScreen.indexOf("-");
                            let minus = (operands[index]-operands[index+1]);
                            signsOfScreen.splice(index, 1);
                            operands.splice(index, 2, minus);
    
                        } else {
                            break;
    
                        }
                    }
                }
            }
        }
    }

    document.querySelector(".screen .screen-content").textContent = operands[0];
    
}

