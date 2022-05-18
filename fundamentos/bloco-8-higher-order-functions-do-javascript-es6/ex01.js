const createId = (string) => {
    const newString = string.replace(" ", "_").toLowerCase();
    const email = `${newString}@trybe.com`;
    return {
        name: string,
        email,
    };
}

const object = createId('Eduardo Simões');
console.log(object);

const newEmployees = (callback) => {
    return {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
};

console.log(newEmployees(createId));