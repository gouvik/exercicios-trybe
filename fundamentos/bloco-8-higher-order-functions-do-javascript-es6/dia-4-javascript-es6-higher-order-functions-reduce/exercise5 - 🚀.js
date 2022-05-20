const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA () {
    return names.reduce((acc, curr) => {
        return acc + curr.split('').reduce((acumulator, current) => {
            if (current === 'a' || current === 'A') return acumulator + 1;
            return acumulator;
        }, 0)
    }, 0)

}

// console.log(containsA());

// curr.includes('A') ? aFinder += 1 : acc

function cCounter () {
    return names.reduce((acc, curr) => {
        return acc + curr.split('').reduce((acumulator, current) => {
            if (current === 'c') {
                return acumulator + 1;
            } return acumulator;
        }, 0)
    }, 0)
}

console.log(cCounter());