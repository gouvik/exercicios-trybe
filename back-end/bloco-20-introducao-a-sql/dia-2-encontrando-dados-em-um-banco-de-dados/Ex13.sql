-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

USE Scientists;
SELECT name, hours from Projects
ORDER BY hours limit 1 offset 1;