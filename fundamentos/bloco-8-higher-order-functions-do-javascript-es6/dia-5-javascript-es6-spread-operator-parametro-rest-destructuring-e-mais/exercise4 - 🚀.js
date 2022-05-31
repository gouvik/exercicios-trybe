/*  4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20: */

const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];

// escreva filterPeople abaixo

const filterPeopleUsingFilter = () => {
    return people.filter((person) => {
        return person.bornIn < 1999 && person.nationality === 'Australian'
    })
}

// console.log(filterPeopleUsingFilter());

const filterPeople = arr => arr.filter(({ bornIn, nationality }) => nationality === 'Australian' && bornIn < 2000)


console.log(filterPeople(people))