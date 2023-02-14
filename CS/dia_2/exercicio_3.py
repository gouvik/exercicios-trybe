# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:
#
# 1 - lê todas essas informações;
# 2 - aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# 3 - escreva seus nomes em outro arquivo.
#
# Considere que a nota miníma para aprovação é 6.

alunos = [ "Marcos 10\n", "Felipe 4\n", "José 6\n", "Ana 10\n", "Maria 9\n", "Miguel 5\n" ]

recup = []

with open("alunos.txt", mode="w") as file:
    file.writelines(alunos)
    file.close()

with open("alunos.txt") as grades:
    for line in grades:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recup.append(student_grade[0] + "\n")
    grades.close()

with open("recup.txt", mode="w") as recupStudents:
    recupStudents.writelines(recup)
    print(recup)
    recupStudents.close()