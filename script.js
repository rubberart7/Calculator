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
let numOperations = [];
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
                if (numOperations.length < 3) {
                    screen.textContent = value;
                    numOperations.push(value);
                    console.log(numOperations);
                }
                else {
                    console.log(numOperations);
                    let result = operate(numOperations[0], numOperations[2], numOperations[1]);
                    console.log(`Result: ${result}`);
                    screen.textContent = result;
                    numOperations.splice(0, 3);
                    numOperations.push(result);
                }

            }
            
            else if (['+', '-', '*', '/'].includes(value)) {
                numOperations.push(value);
                console.log(numOperations);
            }

            else if (value === "=") {
                console.log(numOperations);
                let result = operate(numOperations[0], numOperations[2], numOperations[1]);
                console.log(`Result: ${result}`);
                screen.textContent = result;
                numOperations.splice(0, 3);
                numOperations.push(result);
                console.log(numOperations);
            }


        }
    });
});

