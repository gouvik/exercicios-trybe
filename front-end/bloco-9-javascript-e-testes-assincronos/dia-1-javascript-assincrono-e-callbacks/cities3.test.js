/* Agora, se você tem um bloco de describe agrupando os testes, e o beforeEach ou afterEach estiverem dentro desse describe, ele rodará apenas dentro dos testes que estão nesse describe.
Ou seja, se criarmos um segundo describe, aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.
Para visualizar melhor, veja outro exemplo dentro do mesmo contexto.
 */

 let cities = [];

 const addCity = (city) => {
 cities.push(city);
 };

 const removeCity = (city) => {
 cities = cities.filter((eachCity) => eachCity !== city);
 };

describe('Agrupa o primeiro bloco de testes', () => {
    beforeEach(() => {
        cities = ['Pindamonhangaba'];
    });

    afterEach(() => {
        cities = [];
    });

    test('Testa a função addCity dentro do primeiro bloco de testes', () => {
        expect.assertions(3);
        addCity('Piraporinha');
        expect(cities).toHaveLength(2);
        expect(cities).toContain('Pindamonhangaba');
        expect(cities).toContain('Piraporinha');
    });

    test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
        expect.assertions(2);
        removeCity('Pindamonhangaba');
        expect(cities).not.toContain('Pindamonhangaba');
        expect(cities).toHaveLength(0);
    });
});

describe('Agrupa o segundo bloco de testes', () => {
    beforeEach(() => {
        cities = ['Tangamandapio'];
    });

    afterEach(() => {
        cities = [];
    });

    test('Testa a função addCity dentro do segundo bloco de testes', () => {
        expect.assertions(3);
        expect(cities).toHaveLength(1);
        expect(cities).not.toContain('Pindamonhangaba');
        expect(cities).toContain('Tangamandapio');
    });

    test('Testa a função removeCity dentro do segundo bloco de testes', () => {
        expect.assertions(2);
        removeCity('Tangamandapio');
        expect(cities).not.toContain('Pindamonhangaba');
        expect(cities).toHaveLength(0);
    });
});