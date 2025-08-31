let num1 = +(prompt("Enter the first number:"));
let num2 = +(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /, %):");

let result;

if (operator == "+") {
    result = num1 + num2;
}
else if (operator == "-") {
    result = num1 - num2;
}
else if (operator == "*") {
    result = num1 * num2;
}
else if (operator == "/") {
    if (num1 !== 0 && num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Please enter another number. Not a Zero.";
    }
} 
else if (operator == "%") {
    result = num1 % num2;
}
else {
    result = "Invalid operator";
}

console.log("Result: " + result);