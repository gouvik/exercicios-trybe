const lengthvalidator = (callback) => callback === 6;


const charCounter = (password) => {
    let passLength = 0;
    for (const i in password) {
        passLength += 1;
    }
    return lengthvalidator(passLength);
}

// HOF

const passwordLogin = (password, callback) => {
    return callback(password) ? console.log("Login aprovado") : console.log("Senha não corresponde às especificações.");
}

passwordLogin([1, 2, 3, 4, 5, 6], charCounter);