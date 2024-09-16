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
let numOperations = ["0"];
screen.textContent = numOperations[0];
// select all of the buttons and put those button elments into an array
console.log(buttonsArray);

buttonsArray.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent.trim();
        if (value === "C") {
            screen.textContent = "0";
            numOperations = ["0"];
            console.log(numOperations);
        }
        else  {
            if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(value)) {
                if (numOperations.length === 1) {
                    if (numOperations[0] !== "0") {
                        // if there is only one item in the list then concatenate the string and display it
                        numOperations[0] += value;
                        screen.textContent = numOperations[0];
                        console.log(numOperations);
                    }

                    else if (numOperations[0] === "0"){
                        // change this to just else but if its 0 then add the number and not concatenate
                        console.log(numOperations);
                        value = Number(value);
                        value += Number(numOperations[0]);
                        numOperations[0] = String(value);
                        screen.textContent = value;
                        console.log(numOperations);
                    }
                }
                else if (numOperations.length === 2){
                    // if the length is 2 that means there is a number and operator so push the value
                    numOperations.push(value);
                    screen.textContent = value;
                    console.log(numOperations);
                }

                else if (numOperations.length === 3) {
                    // so if you click a number when the length is 3 then concatenate
                    numOperations[2] += value;
                    screen.textContent = numOperations[2];
                    console.log(numOperations);
                }
            }

            // if you hit an operator again make sure to push operator, evaluate the stuff before and then push it the evaluation to the front

            else if (['+', '-', '*', '/'].includes(value)) {
                if (numOperations.length < 2) {
                    // so if there is one number then push the operator but dont show it
                    numOperations.push(value);
                    console.log(numOperations);
                }

                else if (numOperations.length === 3) {
                    // so if you hit an operator when there are 3 numbers already then add the previous 2 numbers first, remove the list and then add the result to keep adding
                    let result = operate(numOperations[0], numOperations[2], numOperations[1]);
                    console.log(numOperations);
                    numOperations.splice(0, 3);
                    numOperations.push(result);
                    screen.textContent = result;
                    numOperations.push(value);
                }

            }

            else if (value === "="){
                // if you hit equals it will also perform the operation again
                console.log(numOperations);
                let result = operate(numOperations[0], numOperations[2], numOperations[1]);
                numOperations.push(result);
                numOperations.splice(0, 3);
                screen.textContent = result;
                console.log(`Result: ${result}`);
            }
            

            else if (value === "0") {
                // if you hit 0 when the values are already 0, nothing will happen
                if ((numOperations[0] === "0" && numOperations.length === 1)) {
                    // do nothing
                }

                else if (numOperations[2] === "0" && numOperations.length === 3) {
                    // do nothing
                }
                else if (numOperations.length === 0 || numOperations.length === 2) {
                    // the length will never be 0 but if its 2 then you can add the 0 so if you have a number and operator then you can push the 0 and add
                    numOperations.push(value);
                    screen.textContent = value;
                    console.log(numOperations);
                }

                else {
                    // otherwise depending on the length you just have to concatenate the 0
                    if (numOperations.length === 1) {
                        numOperations[0] += value;
                        screen.textContent = numOperations[0];
                        console.log(numOperations);
                    }

                    else if (numOperations.length === 3) {
                        numOperations[2] += value;
                        screen.textContent = numOperations[2];
                        console.log(numOperations);
                    }
                }
            }

            else {
                // just for safety if you hit any other button its just gonna clear the screen but this is not needed
                numOperations = ["0"];
                screen.textContent = "0";
                console.log(numOperations);
            }
            
        }
    });
});

