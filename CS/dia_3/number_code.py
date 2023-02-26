def number_code(string: str) -> str:

    if not 1 < len(string) <= 30:
        raise ValueError("Expression with invalid length")

    number: str = ""

    for letter in string:
        if letter in "ABC":
            number += "2"
        elif letter in "DEF":
            number += "3"
        elif letter in "GHI":
            number += "4"
        elif letter in "JKL":
            number += "5"
        elif letter in "MNO":
            number += "6"
        elif letter in "PQRS":
            number += "7"
        elif letter in "TUV":
            number += "8"
        elif letter in "WXYZ":
            number += "9"
        elif letter in "-01":
            number += letter
        else: 
            raise ValueError("Invalid characters")
    return number

print(number_code("JARBAS"))