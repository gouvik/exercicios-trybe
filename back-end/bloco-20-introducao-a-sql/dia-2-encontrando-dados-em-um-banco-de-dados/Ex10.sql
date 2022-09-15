-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

USE Scientists;
SELECT name, hours from Projects
ORDER BY hours desc limit 3;