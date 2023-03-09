class Calculadora:
    def soma(self, x, y):
        return x + y
    

class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def numberConverter(self, numero):
        if not isinstance(numero, str):
            return numero
        
        return {
            "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5,
            "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10, 
        }.get(numero)
    

    def soma(self, x, y):
        return self.calculadora.soma(
            self.numberConverter(x), self.numberConverter(y)
        )

class CalcDecorated:
    def __init__(self, calculadora) -> int:
        self.calculadora = calculadora

    def numberConverter(self, numero):
        if not isinstance(numero, str):
            return numero
        
        return {
            "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
            "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10, 
        }.get(numero)
    

    def soma(self, x, y):
        return self.calculadora.soma(
            self.numberConverter(x), self.numberConverter(y)
        )
    
calculadora = Calculadora()

calculadoraDecorada = CalcDecorated(calculadora)
print(calculadoraDecorada.soma("five", "ten"))