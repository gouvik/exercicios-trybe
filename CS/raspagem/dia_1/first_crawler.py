from parsel import Selector
import requests
from pymongo import MongoClient


# Por padrão o host é localhost e porta 27017

# Estes valores podem ser modificados passando uma URI

# client = MongoClient("mongodb://localhost:27017/")

client = MongoClient()

db = client.catalogue

# a coleção books será criada se não existir


# def fetch_site(url: str, page) -> str:
#     next_page = page
#     response = requests.get(url + next_page)
#     return response

# response = fetch_site("http://books.toscrape.com/")


URL_BASE = "http://books.toscrape.com/catalogue/"

next_page_url = 'page-1.html'

dados = []

while next_page_url:

    # Busca o conteúdo da próxima página

    response = requests.get(URL_BASE + next_page_url)

    selector = Selector(text=response.text)

    # Imprime os produtos de uma determinada página

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").re(r"£\d+\.\d{2}")
        dados.append({title: price})
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()

db.books.insert_many(dados)
client.close()  # fecha a conexão com o banco de dados