# lista_items = ["dois", "two", "dos", 2]

# tupla_dois = lista_items

# for item in tupla_dois:
#     print(len(str(item)))


# restaurants = [
#     {"name": "Restaurante A", "nota": 4.5},
#     {"name": "Restaurante B", "nota": 3.0},
#     {"name": "Restaurante C", "nota": 4.2},
#     {"name": "Restaurante D", "nota": 2.3},
# ]

# min_rating = 3.0
# filtered_restaurants = [
#     restaurant["name"]
#     for restaurant in restaurants
#     if restaurant["nota"] > min_rating
# ]
# print(filtered_restaurants)

# count = 0

# names_list = ["Duda", "Rafa", "Cris", "Yuri", "Dângela"]

# Comprenhen

# new_names_list = [name for name in names_list if name[3] == 'a']


# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a" nele,

# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"

# for name in names_list:
#     if name[3] == "a":
#         count = count + 1

# print(count)

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next


languages = enumerate(['Python', 'Java', 'JavaScript'])
newTuple = (list(languages))

print(newTuple)


for index, language in languages:

    print(f'{index} - {language}')

# print(list(enumerate_prime))


# converte um objeto enumerate em uma lista

numero = 5
counter = 1
result = 1

while counter <= numero:
    result *= counter
    counter += 1
result

print(result)

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]

for rate in new_ratings:
    if (rate % 3 == 0):
        print(f'{rate} é múltiplo de 3')


print(new_ratings)
