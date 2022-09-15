-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

USE Scientists;
SELECT concat("Existem", COUNT(name), " cientistas na tabela Scientists.") as Texto from Scientists;