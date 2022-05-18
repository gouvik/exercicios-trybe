const wakeningUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const partiu = () => 'Partiu dormir!!';


const doingThings = (func) => {
    console.log(func());
}
// Ao chamar a função doingThings:
doingThings(partiu);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!


const sumRound = (n1, n2) => Math.round(n1 + n2);

const calculator = (func) => console.log(func);
console.log("--------------------------");
calculator(sumRound(10, 5));