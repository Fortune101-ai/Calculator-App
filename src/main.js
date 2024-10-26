const display = document.getElementById("display");

const addToDisplay = input => display.value += input;

const clearDisplay = () => display.value = "";

const calculate = () => {
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "Syntax error";
    }
};
