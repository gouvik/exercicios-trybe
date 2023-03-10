 #Exercício 4: Com o Beautiful Soup, 
# faça a extração de todos os links da página “https://pt.wikipedia.org/wiki/Rock_in_Rio”

from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from time import sleep

options = Options()
browser = webdriver.Firefox(options=options)
options.add_argument('--headless')

def skyscraper(url: str):
    browser.get(url)
    sleep(5)

    anchor = browser.find_elements(By.TAG_NAME, "a")

    res = [ a.get_attribute("href") for a in anchor if not a.get_attribute("href") == None ]

    print(res)




if __name__ == "__main__":
    skyscraper('https://pt.wikipedia.org/wiki/Rock_in_Rio')