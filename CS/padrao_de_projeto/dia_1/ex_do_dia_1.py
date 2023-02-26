class TV:

    def __init__(self, tamanho, modelo = 'Generic'):
        self._volume = 50
        self._canal = 1
        self._tamanho = tamanho
        self._ligada = False
        self._modelo = modelo


    def aumentar_volume(self):
        if self._volume < 99:
            self._volume += 1
        else:
            print("Volume máximo atingido")


    def diminuir_volume(self):
        if self._volume > 1:
            self._volume -= 1
        else:
            print("Volume mínimo atingido")



    def modificar_canal(self, novo_canal):
        if 1 < novo_canal > 99:
            raise ValueError("Canal indisponível")
        else:
            self._canal = novo_canal


    def ligar_desligar(self):
        self._ligada = not self._ligada
