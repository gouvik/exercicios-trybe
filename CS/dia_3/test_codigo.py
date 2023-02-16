import json
import pytest
from unittest.mock import mock_open, patch
from codigo import is_odd, divide
from pokemon import retrieve_pokemons_by_type
from io import StringIO

def test_is_odd_when_number_is_odd_returns_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    'Para um número par a função deve retornar o valor False'
    assert is_odd(2) is False


def test_is_odd_when_passed_a_non_int_value_returns_typeError():
    'Para um valor não inteiro deve retornar um erro de tipo'
    with pytest.raises(TypeError, match="not all arguments converted during string formatting"):
        is_odd("A")

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)


@pytest.fixture
def orders():


    """Nosso cenário (contexto) temos os seguintes pedidos"""

    return [

        {"customer": "maria", "order": "pizza", "day": "terça-feira"},

        {"customer": "joao", "order": "hamburger", "day": "terça-feira"},

        {"customer": "maria", "order": "pizza", "day": "quarta-feira"},

        {"customer": "maria", "order": "hamburger", "day": "quinta-feira"},

    ]


# Criamos o contexto de um pokemon do tipo grama
@pytest.fixture
def grass_type_pokemon():
    return {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }


# Criamos o contexto de um pokemon do tipo água
@pytest.fixture
def water_type_pokemon():
    return {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }


def test_retrieve_pokemons_by_type(grass_type_pokemon, water_type_pokemon):

    # criamos um arquivo em memória que o seu conteúdo são os dois pokemons

    fake_file = StringIO(
        json.dumps({"results": [grass_type_pokemon, water_type_pokemon]})
    )
    # quando pesquisamos por pokemons do tipo grama,
    # o pokemon do tipo água não deve ser retornado

    assert grass_type_pokemon in retrieve_pokemons_by_type("Grass", fake_file)