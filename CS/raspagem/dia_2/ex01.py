from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep

# Exercício 1: Com o Selenium, faça uma requisição para o endpoint “https://quotes.toscrape.com/“ e imprima a primeira citação que aparece na página.
options = Options()
browser = webdriver.Firefox(options=options)

def skyscraper(url: str):
    # options.add_argument('--headless')
    browser.get(url)
    sleep(5)

    paragraph = browser.find_element(By.CSS_SELECTOR, "div.quote:nth-child(1) > span:nth-child(1)").get_attribute("innerHTML")
    print(paragraph)


if __name__ == "__main__":
    skyscraper('https://quotes.toscrape.com/')