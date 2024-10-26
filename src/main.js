const display = document.getElementById("display");

const addToDisplay = input => {
    if (isValidInput(input)) {
        display.value += input;
    }
};

const clearDisplay = () => display.value = "";

const calculate = () => {
    const result = evaluateExpression(display.value);
    display.value = result !== null ? result : "Error";
};

const isValidInput = input => {
    const validInputs = /^[\d.+\-x/]*$/;
    return validInputs.test(input);
};

const isOperator = char => ['+', '-', 'x', '/'].includes(char);

const evaluateExpression = expr => {
    try {
        expr = expr.replace(/x/g, '*');

        const components = expr.match(/(\d+(\.\d+)?|[+\-*/])/g);
        if (!components) return null;

        let total = parseFloat(components[0]);

        for (let i = 1; i < components.length; i += 2) {
            const operator = components[i];
            const nextValue = parseFloat(components[i + 1]);

            switch (operator) {
                case '+':
                    total += nextValue;
                    break;
                case '-':
                    total -= nextValue;
                    break;
                case '*':
                    total *= nextValue;
                    break;
                case '/':
                    if (nextValue === 0) return null;
                    total /= nextValue;
                    break;
                default:
                    return null;
            }
        }
        return total;
    } catch {
        return null;
    }
};





