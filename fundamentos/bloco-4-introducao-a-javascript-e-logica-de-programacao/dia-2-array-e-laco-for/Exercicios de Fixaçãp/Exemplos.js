let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

/* Como podemos observar, é possível acessar os arrays pelo seu índice.
O fato curioso é que a primeira posição do array é representada pelo
número 0 . Desse modo, para acessarmos o último elemento da estrutura, 
devemos pegar a quantidade de seus elementos utilizando o .length e s
ubtrair 1 .*/

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

// Vamos agora adicionar uma nova atividade para nossa lista de arrays.

tasksList.push("Fazer exercícios da Trybe"); // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Se eu quiser mudar a posição de um índice específico dentro do Array.
tasksList[1] = "Hackeado";
console.log(tasksList);

/* Legal, né!? Repare que o método .push() adiciona um novo item no final 
do array. Se precisarmos adicionar no início, podemos usar o .unshift() */

tasksList.unshift("Estudar o conteúdo do dia seguinte");
console.log(tasksList);

// "Ok. Agora como faço para remover?" .

tasksList.pop(); // remove a última tarefa
console.log(tasksList);
// ["Estudar o conteúdo do dia seguinte","Tomar café", "Hackeado", "Brincar com o cachorro"];

tasksList.shift(); // remove a primeira tarefa
console.log(tasksList);
// ["Tomar café", "Hackeado", "Brincar com o cachorro"];

//Procurar por um item específico no array

let indexOfTask = tasksList.indexOf("Hackeado");
console.log(indexOfTask);

// 1
