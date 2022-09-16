-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

USE PiecesProviders;
SELECT piece, price from Provides
order by price desc
limit 5;