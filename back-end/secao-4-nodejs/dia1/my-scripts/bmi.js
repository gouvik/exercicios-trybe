const readline = require("readline-sync");

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const w = readline.questionInt("What's your weight? ");
const h = readline.questionFloat("What's your height? ")


function handleBMI(weight, height) {
  const bmi = (weight) / (height ^ 2).toFixed(2);

  return bmi;
}

function handleBMIResult(bmi) {
  const results = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = results.find((result) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[result]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

// A função main é o ponto de partida do nosso programa
function main() {
  const bmi = handleBMI(w, h);
  const bmiResult = handleBMIResult(bmi);

  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(`Your BMI classification is: ${bmiResult}.`);
}

main();

// function bmi(weight, height) {
//     const result = (weight) / (height ^ 2).toFixed(2);
//     console.log("resultado ", result);

//     switch (true) {
//         case result <= 18.5:
//             console.log("Abaixo do peso (magreza)");
//             break;
//         case result >= 18.5 && result <= 24.9:
//             console.log("Peso normal");
//             break;
//         case result >= 25.0 && result <=29.9:
//             console.log("Acima do peso - sobrepeso");
//             break;
//         case result >= 30.0 && result <= 34.9:
//             console.log("Obesidade grau I");
//             break;
//         case result >= 35.0 && result <= 39.9:
//             console.log("Obesidade grau II");
//             break;
//         default:
//             console.log("Obesidade graus III e IV");
//             break;
//     }
// }

// bmi(w, h);
