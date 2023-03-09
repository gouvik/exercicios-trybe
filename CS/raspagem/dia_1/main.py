import requests
import time




# # Requisição do tipo GET
# response = requests.get("https://www.betrybe.com/")
# print(response.status_code)  # código de status
# print(response.headers["Content-Type"])  # conteúdo no formato html

# # Conteúdo recebido da requisição
# print(response.text)

# # Bytes recebidos como resposta
# print(response.content)

# Requisição do tipo post
# response = requests.post("http://httpbin.org/post", data="Pula Pula pipoquinha")
# print(response.text)

# Requisição enviando cabeçalho (header)
# response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
# print(response.text)

# # Requisição a recurso binário
# response = requests.get("http://httpbin.org/image/png")
# print(response.content)

# # Recurso JSON
# response = requests.get("http://httpbin.org/get")
# # Equivalente ao json.loads(response.content)
# print(response.json())

# # Podemos também pedir que a resposta lance uma exceção caso o status não seja OK
# response = requests.get("http://httpbin.org/status/404")
# print(response.raise_for_status())


# À partir da décima requisição somos bloqueados de acessar o recurso

# Código de status 429: Too Many Requests

# for _ in range(15):

#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")

#     print(response.status_code)





# Coloca uma pausa de 6 segundos a cada requisição

# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto

# for _ in range(15):

#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")

#     print(response)

#     time.sleep(6)



# Podemos definir um tempo limite (timeout) para que, após este tempo, possamos tomar alguma atitude, como por exemplo, realizar uma nova tentativa.

# Este tempo limite normalmente é definido através de experimentações e análise do tempo de resposta normal de uma requisição.

# import requests



# try:

#     # recurso demora muito a responder

#     for _ in range(10):
#         response = requests.get("http://httpbin.org/delay/10", timeout=2)

# except requests.ReadTimeout:

#     # vamos fazer uma nova requisição

#     response = requests.get("http://httpbin.org/delay/1", timeout=2)

# finally:

#     print(response.status_code)


for _ in range(10):
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
    print(response.status_code())