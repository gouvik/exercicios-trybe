# escrita

file = open("arquivo2.txt", mode="w")

file.write("Trybe S2")

file.close()


# leitura

file = open("arquivo2.txt", mode="r")

content = file.read()

print(content)

file.close()  # não podemos esquecer de fechar o arquivo

# escrita
file = open("arquivo3.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo3.txt", mode="r")
for line in file:
    print(line)  # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo


# escrita

file = open("arquivo5.dat", mode="wb")

file.write(b"C\xc3\xa1ssio 30")  # o prefixo b em uma string indica que seu valor está codificado em bytes

file.close()


# leitura

file = open("arquivo5.dat", mode="rb")

content = file.read()

print(content)  # saída: b'C\xc3\xa1ssio 30'

file.close()  # não podemos esquecer de fechar o arquivo