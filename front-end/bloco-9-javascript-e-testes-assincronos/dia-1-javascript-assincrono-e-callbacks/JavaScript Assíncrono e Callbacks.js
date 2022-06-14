// Operações Assíncronas

/* console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro'); */ 

// Agora imagine que o nosso estoque de parafusos está chegando ao fim e é necessário que façamos uma reposição para que a linha de produção não pare.No entanto, nossa operação não cobre este tipo situação e nossa linha de produção para enquanto uma pessoa funcionária irá comprar os parafusos e repor o estoque.

/* console.log('1 - Comprar parafusos');
console.log('2 - Adicionar ao estoque');
console.log('3 - Receber roda');
console.log('4 - Encaixar parafusos');
console.log('5 - Fixar roda no carro'); */ 

// Rode em seu editor o código abaixo e veja como nossa linha de produção já não depende mais das etapas de compra de parafusos e de reposição do estoque.

/* setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro */

// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1, 2 e 3, mesmo assim o retorno das chamadas só ocorre ao final.Isto acontece pois utilizamos a função setTimeout.É muito comum que esta função seja utilizada para simular comportamentos assíncronos.Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados.É aí que o conceito de assincronicidade entra a nosso favor para que nossa aplicação não perca eficiência.

const pushNumber1 = (list, number) => list.push(number);

let numbers1 = [];

pushNumber1(numbers1, 1);
pushNumber1(numbers1, 2);
pushNumber1(numbers1, 3);

//console.log(numbers) -> [1, 2, 3]

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// Por que o primeiro código retorna o array[1, 2, 3] enquanto o segundo retorna o array[2, 3] ? Isso ocorre por causa da função setTimeout.Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro.No código acima, ela espera 3000 milissegundos(3 segundos) para executar o pushNumber(numbers, 1).Como o console.log é uma função síncrona, ele é executado antes do setTimeout terminar.
333
// Para que o console.log mostre o array correto, é necessário chamá - lo após 3000 milissegundos:

const pushNumber2 = (list, number) => list.push(number);

let numbers3 = [];

setTimeout(() => pushNumber2(numbers3, 1), 3000);
pushNumber2(numbers3, 2);
pushNumber2(numbers3, 3);
/*console.log('Operação iniciada. Recebendo dados:');
setTimeout(() => console.log(numbers3), 3000);
setTimeout(()=> console.log('Finalizado.'), 4000);*/

// Callbacks

/* callback é uma função passada como parâmetro para outra função.*/

/* Sem perceber, você viu um exemplo de função callback quando chamamos a função setTimeout.Esta função recebe dois parâmetros, o primeiro é a função callback que passamos através de uma arrow function, e o segundo é o tempo(em milissegundos) que o interpretador irá esperar para executar a função.Observe a estrutura dela:

setTimeout(1parametro, 2parametro);

O primeiro parâmetro é uma callback sem nome: () => {}. O segundo parâmetro será o tempo de espera: 2000 (2000 milissegundos ou 2 segundos, por exemplo).

*/

const despesas = [
    {
        gym: 99,
    },
    {
        ifood: 200,
    },
    {
        phone: 60,
    },
    {
        internet: 100,
    },
];

const renda = 1000;

/* Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas, despesas, é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, renda, representa o quanto esta pessoa recebeu neste mesmo mês.

Nosso próximo passo será implementar uma função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês. */

const despesaMensal = (renda, despesas, callback) => {

    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;

   /* console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);*/
};

/* Neste trecho da implementação, podemos notar que foi adicionada a função despesaMensal, que recebe três parâmetros: renda, despesas, e callback. Acredito que você deva estar pensando: "O que este parâmetro callback está fazendo nesta função?".

Como vimos anteriormente, callback é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos despesas e retornará este valor para a constante despesaTotal. */

const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
};

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

despesaMensal(renda, despesas, somaDespesas);

/* Por fim, podemos observar a implementação da função callback, representada pela função somaDespesas.Essa função está tratando as informações contidas no array de objetos despesas e retornando o valor total de gastos.
Em síntese o que fizemos foi:
1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback.
3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.
4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal. */

/* Para fixar
Lembre - se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução / chamada dessa função, o parâmetro deve ser um valor definido.No nosso caso, vamos utilizar uma função como parâmetro(callback).
Vamos ver um exemplo de como esse processo acontece: */

// Definição da função userFullName
/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
    const userToReturn = {
        firstName: "Ivan",
        lastName: "Ivanovich",
        nationality: "Russian"
    };
    // Retornamos nosso parâmetro, que será uma função (callback)
    return param(userToReturn);
}; */

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.

/* 1 - Adicione uma callback como parâmetro da função getUser.
No código abaixo você tem a função getUser, que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
Insira o retorno da função getUser;
Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian". */

/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
    const userToReturn = {
        firstName: "Ivan",
        lastName: "Ivanovich",
        nationality: "Russian"
    };
    // Insira o retorno da função `getUser`
    return callback(userToReturn);
};

console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian" */

/* 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser.
No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo.Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
Insira uma callback como parâmetro da função getUser;
Retorne a callback passada como parâmetro na função getUser; */

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
    setTimeout(() => {
        const user = {
            firstName: "Ivan",
            lastName: "Ivanovich",
            nationality: "Russian",
        };
        // Retorne a `callback` passada como parâmetro na função `getUser`
        // Dica: você pode manter o `console.log()`
      //  console.log(callback(user));
        return callback(user);
    }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

/* Lidando com erros em operações assíncronas */

/* 1 - Adicione uma callback e trate o erro retornado.
A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.
Adicione um segundo parâmetro, que deve ser uma callback, na função getCountry;
Retorne essa callback na função getCountry de forma que trate a mensagem de erro.
 */

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay2 = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, errorCallback) => {
    setTimeout(() => {
        const didOperationSucceed = Math.random() >= 0.5;
        if (didOperationSucceed) {
            const country = {
                name: "Brazil",
                hdi: 0.759,
                currency: "Real",
            };
            onSuccess(country);
        } else {
            const errorMessage = "Country could not be found";
            errorCallback(errorMessage);
        }
    }, delay2());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);