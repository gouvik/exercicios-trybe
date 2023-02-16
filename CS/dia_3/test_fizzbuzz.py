from fizzbuzz import fizzbuzz

def test_fizzbuzz_returns_a_numbers_list():
    assert fizzbuzz(3) == [1, 2, "Fizz"]

def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizzbuzz(3)[2] == "Fizz"

def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert fizzbuzz(5)[-1] == "Buzz"

def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"