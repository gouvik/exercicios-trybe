import requests
from parsel import Selector

URL_BASE = "https://httpbin.org/encoding/utf8/"

request = requests.get(URL_BASE)
print(request.text)
