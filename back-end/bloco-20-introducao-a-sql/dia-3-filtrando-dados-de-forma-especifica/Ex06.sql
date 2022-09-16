-- Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.


SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco between 15 and 40
order by fornecedor desc;