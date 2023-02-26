def fizzbuzz(num: int):
    numbers = []
    for n in range(1, num + 1):
        if n % 3 == 0 and n % 5 == 0:
            numbers.append("FizzBuzz")
        elif n % 3 == 0:
            numbers.append("Fizz")
        elif n % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(n)
        
    return numbers