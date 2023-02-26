class Estatistica:
    @classmethod
    def media(cls, numbers: list[int]):
        return sum(numbers)/len(numbers)
    

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2

        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2
        
        return numbers[index]
    

calc_media = Estatistica().media([9, 5, 1])

calc_mediana = Estatistica().mediana([9, 5, 1])

print(calc_media)