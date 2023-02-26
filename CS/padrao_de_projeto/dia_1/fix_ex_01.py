

class Eletrodomestico:

    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True


    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0


    def esta_ligado(self):
        return self.__ligado
    

    def __str__(self) -> str:
        return f"""
        Cor do Produto: {self.cor}
        Potencia do Produto: {self._potencia}
        Tensão do Produto: {self._tensao}
        Preço do Produto: {self.preco}
        """
    
   


    @property
    def cor(self):
        return self.__cor.upper()


    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor

class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, modelo: str):
        super().__init__(cor, potencia, tensao, preco)
        self._modelo = modelo


    def __str__(self) -> str:
        return f"""
        Modelo: {self._modelo}
        Cor do Produto: {self.cor}
        Potencia do Produto: {self._potencia}
        Tensão do Produto: {self._tensao}
        Preço do Produto: {self.preco}
        """



class Wash_Machine(Eletrodomestico):
    pass


class Pessoa:
    def __init__(self, nome, saldo_na_conta, idade=None):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.idade = idade 
        self.ventilador = None
        self.eletrodomesticos = []

    def comprar_eletro_domestico(self, eletro: Eletrodomestico):
        if eletro.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletro.preco
            self.eletro = eletro
            self.eletrodomesticos.append(eletro)
            
    def __str__(self) -> str:
        return f"""
        - {self.nome} possui um eletro de cor {self.ventilador.cor} que custou {f'{self.ventilador.preco: ,.2f}'}
        """

ventilador_azul: Ventilador = Ventilador("Azul", 900, 220, 129.90, "Turbo Silence")

cliente = Pessoa("Gouveia", 1000)

wash1 = Wash_Machine("Rosa", 800, 110, 890.95)

cliente.comprar_eletro_domestico(ventilador_azul)

for n in cliente.eletrodomesticos:
    print(n)


