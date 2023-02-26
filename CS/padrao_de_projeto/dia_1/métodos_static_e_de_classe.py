class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()

# Classe.método_estático()
# objeto.método_estático()

# Saída:
# Olá
# Olá


class Classe2:
    atributo_da_classe = 1


objeto_1 = Classe2()


class Classe3:
    _atributo_da_classe = 1

    @classmethod

    def metodo_de_classe(cls):

        print(cls)


objeto_2 = Classe3()

objeto_2._atributo_da_classe = 3

print(objeto_2.metodo_de_classe())

