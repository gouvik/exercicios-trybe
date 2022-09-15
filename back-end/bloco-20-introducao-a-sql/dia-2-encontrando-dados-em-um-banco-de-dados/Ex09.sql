-- Escreva uma query que exiba a string "O projeto name precisou de hours horas para ser concluído." para cada projeto.

USE Scientists;
SELECT
CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.')
AS resultado FROM Projects;