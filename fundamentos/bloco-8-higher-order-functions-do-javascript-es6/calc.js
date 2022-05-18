const operation = (n1, n2, sign) => {
    try {
        if (sign === "+") {
            return n1 + n2
        }
        else if (sign === '-') {
            return n1 - n2;
        }
        else if (sign === '/') {
            return Math.round(n1 / n2);
        }
        else if (sign === '*') {
            return n1 * n2;
        } else if (sign === '^') {
            return Math.pow(n1, n2);
        }
        else {
            throw new Error(`Os sinais permitidos são: +, -, *, /, e "^" para potenciação.`)
        }

    }
    catch (e) {
        console.error(e.message);
    }
}

const calculator = (callback) => {
    if (callback === undefined || isNaN(callback)) {
        return console.log(`Você digitou somente os números e o sinal da operação, né?`);
    }
    return console.log(callback);
}

calculator(operation(3, 4, "a"))

