-- Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

USE PiecesProviders;
SELECT distinct provider, price from Provides
order by price desc
limit 4 offset 2 ;