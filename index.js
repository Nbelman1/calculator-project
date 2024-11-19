function operate(a, operator, b) { // runs given operation based on two numbers
    if (operator == "plus") {
        return a + b;
    } else if (operator == "minus") {
        return a - b;
    } else if (operator == "times") {
        return a * b;
    } else if (operator == "divided by") {
        return a / b;
    } else {
        return "Error: result not found";
    }
}



