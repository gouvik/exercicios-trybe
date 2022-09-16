-- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

SELECT * FROM Scientists.Scientists
WHERE name LIKE "%e%";