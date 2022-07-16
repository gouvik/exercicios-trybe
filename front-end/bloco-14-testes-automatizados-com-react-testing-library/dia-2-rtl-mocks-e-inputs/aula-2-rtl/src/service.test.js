const service  = require('./Service');

// afterEach(() => jest.clearAllMocks());

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).not.toBe(20);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test("Se ao receber dois parâmetros, retorna, a divisão do primeiro pelo segundo.", () => {
const result = service.randomNumber = jest.fn().mockImplementationOnce((a,b) => a / b);

expect(service.randomNumber(4, 2)).toBe(2);
expect(result).toHaveBeenCalled();
expect(result).toBeCalledTimes(1);
});

describe('Testa implementações na função #randomNumber', () => {
  it('Três parâmetros e a multiplicação deles.', () => {
    const result = service.randomNumber = jest.fn().mockImplementation((a,b,c) => a * b * c);
  
    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(result).toHaveBeenCalled();
    expect(result).toHaveBeenCalledTimes(1);
  });
  it('Retorna o dobro do valor do parâmetro passado.', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(service.randomNumber(25)).toBe(50)
    expect(service.randomNumber).toHaveBeenCalledWith(25);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);

  });
})

describe('Novas funções, novos testes.', () => {
  it('Testa se o retorno da função Upper acontece em caixa baixa', () => {
jest.spyOn(service, "upper").mockImplementation(a => a.toLowerCase());


    // service.upper = jest.fn().mockImplementation((str) => str.toLowerCase());
    expect(service.upper('BATATA')).toBe('batata');
  });

  it('Testa se a segunda função retorna o último caractere.', () => {

    service.firstLetter = jest.fn().mockImplementation((str) => str.charAt(str.length-1));
    expect(service.firstLetter('JavaScript')).toBe('t');
    expect(service.upper).toHaveBeenCalledTimes(1)
  });

  it('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
    service.glue = jest.fn().mockImplementation((a, b, c) => `${a +b + c}`);
    expect(service.glue('Holá!', "Mr.", "Bond")).toBe("Holá!Mr.Bond");
  })
  it('Restaurando a primeira função', () => {
    service.upper.mockRestore();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.upper('batata')).toBe('BATATA');
  })
  it('Testando a restaração da segunda função. Ela não é restaurada ao padrão quando usamos o "jest.fn()"', () => {
    service.firstLetter.mockReset();
    expect(service.firstLetter).toHaveBeenCalledTimes(0)
    expect(service.firstLetter('Bomba')).not.toBe('B');
  })
})

describe('Requisões para a API Dog Pictures', () => {
  service.dogFetch = jest.fn();
  afterEach(service.dogFetch.mockReset);

  it('Testa se a requisição ocorreu.', async () => {
    service.dogFetch.mockResolvedValue('request success');
    // service.dogFetch();

    // expect(service.dogFetch).toHaveBeenCalled();
    // expect(service.dogFetch).toHaveBeenCalledTimes(1);
    await expect(service.dogFetch()).resolves.toBe('request success');

 });
 it('Testa requisição caso a promise seja rejeitada.', async () => {
    service.dogFetch.mockRejectedValue('request failed'); // Quando quero mockar uma rejeição

    expect(service.dogFetch).toHaveBeenCalledTimes(0)
    await expect(service.dogFetch()).rejects.toMatch("request failed"); })
})