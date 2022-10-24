const readline = require("readline-sync");

console.log("Eu queria tanto que você não fugisse de mim...");

const name = readline.question("Qual o seu nome? ");
const age = readline.questionInt("Qual a sua idade? ");

console.log(`Olá, ${name}! Seja bem-vindo à Nest. Você tem, atualmente ${age} anos.`);
