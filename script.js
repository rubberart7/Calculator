function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
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
// select all of the buttons and put those button elments into an array
console.log(buttonsArray);

buttonsArray.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        let numOperations = [];
        if (value === "C") {
            screen.textContent = "";
            numOperations = [];
            console.log(numOperations);
        }
        // else if (['+', '-', '*', '/'].includes(value)) {

        // }
        else  {
            if (value === "1") {
                num = 1;
                screen.textContent = num;
                numOperations.push(num);
                console.log(numOperations)
                
            }

            else if (value === "3") {
                
            }
        }
    });
});

