import requests
from parsel import Selector

URL_BASE = "https://api.github.com/users"

request = requests.get(URL_BASE)

responses = request.json()

for user in responses:
    print(f"{user['login']} {user['url']}")

