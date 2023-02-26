import pytest
from number_code import number_code

def test_number_code_should_be_converted_in_2():
    assert number_code("ABC") == "222"

def test_number_code_should_be_converted_in_3():
    assert number_code("DEF") == "333"

def test_number_code_should_be_converted_in_3222():
    assert number_code("FACA") == "3222"

# def test_number_code_should_be_converted_in_4():
#     assert number_code("ABC") == "444"

# def test_number_code_should_be_converted_in_5():
#     assert number_code("ABC") == "555"

# def test_number_code_should_be_converted_in_6():
#     assert number_code("ABC") == "666"

# def test_number_code_should_be_converted_in_7():
#     assert number_code("ABC") == "777"

# def test_number_code_should_be_converted_in_8():
#     assert number_code("ABC") == "888"

# def test_number_code_should_be_converted_in_9():
#     assert number_code("ABC") == "9999"


def test_dash_zero_one_should_be_kept():

    assert  number_code("0-1") == "0-1"



def test_expression_should_be_at_least_one_char():

    with pytest.raises(ValueError):

         number_code("")



def test_expression_maximum_are_thirty_chars():

    long_expression = (

        "1111111111"  # 10 chars

        "1111111111"

        "1111111111"

        "1"

    )

    with pytest.raises(ValueError):

         number_code(long_expression)



def test_expression_with_invalid_chars():

    with pytest.raises(ValueError):

         number_code("I-$-MY_NEIGHBORHOOD")