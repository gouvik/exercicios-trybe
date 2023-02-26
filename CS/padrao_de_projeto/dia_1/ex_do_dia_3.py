from abc import ABC, abstractmethod

class FigGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError
    
    @abstractmethod
    def perimeter(self):
        raise NotImplementedError
    



class Square(FigGeometrica):
    def __init__(self, lado):
        self._lado = lado


    def area(self):
        return self._lado * self._lado
    

    def perimeter(self):
        return 4 * self._lado
    

class Rectangle(FigGeometrica):
    def __init__(self, base, altura) -> int:
        self._base = base
        self._altura = altura

    def area(self):
        return self._base * self._altura
    
    def perimeter(self):
        return 2 * (self._base + self._altura)
    
class Circle(FigGeometrica):
    def __init__(self, raio) -> int:
        self._raio = raio

    def area(self):
        return 3.14 * (self._raio * self._raio)
    
    def perimeter(self):
        return 2 * 3.14 * self._raio
    