function add(operand1, operand2) {
    return Number(operand1) + Number(operand2);
}

function subtract(operand1, operand2) {
    return Number(operand1) - Number(operand2);
}

function multiply(operand1, operand2) {
    return Number(operand1) * Number(operand2);
}

function divide(operand1, operand2) {
    if (Number(operand2) === 0) {
        alert("DIVIDE BY ZERO ERROR");
        return;
    }
    return Number(operand1) / Number(operand2);
}

function operate(operand1, operand2, operation) {
    let result;

    if (operation === "+") {
        result = add(operand1, operand2);
    } else if (operation === "-") {
        result = subtract(operand1, operand2);
    } else if (operation === "*") {
        result = multiply(operand1, operand2);
    } else if (operation === "/") {
        result = divide(operand1, operand2);
    }

    return result;
};

const screen = document.querySelector(".screen");
const buttonsArray = Array.from(document.querySelectorAll(".buttons button"));
let numOperations = [""];
// select all of the buttons and put those button elments into an array
console.log(buttonsArray);

buttonsArray.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        // let numOperations = [];
        if (value === "C") {
            screen.textContent = "";
            numOperations = [];
            console.log(numOperations);
        }
        else  {
            if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(value)) {
                if (numOperations.length >= 0 && numOperations.length < 2) {
                    numOperations[0] += value;
                    screen.textContent = numOperations[0];
                    console.log(numOperations);
                }


                else if (numOperations.length === 2){
                    numOperations.push(value);
                    screen.textContent = value;
                    console.log(numOperations);
                }

                else if (numOperations.length === 3) {
                    numOperations[2] += value;
                    screen.textContent = numOperations[2];
                    console.log(numOperations);
                }
            }

            // if you hit an operator again make sure to push operator, evaluate the stuff before and then push it the evaluation to the front

            else if (['+', '-', '*', '/'].includes(value)) {
                if (numOperations.length < 2) {
                    numOperations.push(value);
                    console.log(numOperations);
                }

                else if (numOperations.length === 3) {
                    let result = operate(numOperations[0], numOperations[2], numOperations[1]);
                    console.log(numOperations);
                    numOperations.splice(0, 3);
                    numOperations.push(result);
                    screen.textContent = result;
                    numOperations.push(value);
                }

            }

            else if (value === "="){
                console.log(numOperations);
                let result = operate(numOperations[0], numOperations[2], numOperations[1]);
                numOperations.push(result);
                numOperations.splice(0, 3);
                screen.textContent = result;
                console.log(`Result: ${result}`);
            }
            // final else, if you click equals it will perform the operation

            else {
                numOperations = [];
                screen.textContent = "";
                console.log(numOperations);
            }
            
            
        }
    });
});

