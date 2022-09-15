-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

USE Scientists;
SELECT name, hours from Projects
ORDER BY hours desc limit 1;