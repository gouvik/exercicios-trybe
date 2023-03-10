from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from time import sleep

#Exercício 2: Imprima todos os parágrafos da página
# “https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/“.

options = Options()
browser = webdriver.Firefox(options=options)

def skyscraper(url: str):
    options.add_argument('--headless')
    browser.get(url)
    sleep(5)

    paragraph = browser.find_elements(By.TAG_NAME, "p")

    i = 0
    
    # com esse algoritmo eu pego somento os paragrafos que seriam relevantes: os três primeiros
    for p in paragraph:
        if i == 3:
            break
        else :
            print(p.text)
            i += 1


if __name__ == "__main__":
    skyscraper('https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/')