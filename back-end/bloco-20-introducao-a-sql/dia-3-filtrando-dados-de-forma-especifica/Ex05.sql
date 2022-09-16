-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.

SELECT count(name) FROM PecasFornecedores.Fornecedores
WHERE name LIKE "%F%"
