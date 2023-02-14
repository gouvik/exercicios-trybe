import random

def magic_numbers():
    ''' Um jogo de adivinhação de números '''
    x = random.randint(1,11)
    meu_num = 0
    rodada = 0
    num_escolhidos = []

    while meu_num != x:
        print("------------------------------------")
        meu_num = int(input("Qual o seu palpite?: ")) ## retorna uma string convertida em número
        print(" ")
        rodada += 1
        print(f'Rodada {rodada} / Número: {meu_num}')
        print(" ")
        print("Você errou! Tente novamente.")
        num_escolhidos.append(meu_num)
        print(" ")
        print(f'Os números escolhidos foram: { num_escolhidos }')
        print("------------------------------------")

    print(f'Você acertou! O número é: {x}!')

magic_numbers()