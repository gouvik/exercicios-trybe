import requests
from parsel import Selector

URL_BASE = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

request = requests.get(URL_BASE)

assert "bot detected" not in request.text

print(request.text)