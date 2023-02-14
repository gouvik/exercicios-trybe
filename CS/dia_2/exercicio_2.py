nums = input("Insira os valores separados por espaço: ")
numArr = nums.split(" ")
sum = 0

for n in numArr:
    if(not n.isdigit()):    
        print(f"Erro ao somar valores. {n} não é um dígito.")
    else:
        sum += int(n)


print(f"A soma dos valores  é: {sum}")