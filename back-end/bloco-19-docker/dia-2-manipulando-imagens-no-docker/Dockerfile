# Item 1
# Crie um Dockerfile utilizando a imagem chuanwen/cowsay.
FROM chuanwen/cowsay:latest
# Defina um ENTRYPOINT para a execução do comando.
# Observe que o executável cowsay está no diretório /usr/games/
# Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
ENTRYPOINT [ "/usr/games/cowsay" ]
# Utilize o CMD para definir uma mensagem padrão.
CMD [ "Aline" ]
# Item 4
# Builde e execute um container baseado em sua imagem sem passar nenhum comando.