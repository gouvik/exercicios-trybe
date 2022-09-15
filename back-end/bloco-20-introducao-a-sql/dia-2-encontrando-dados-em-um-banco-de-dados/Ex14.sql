-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

USE Scientists;
SELECT * from Projects
order by hours limit 5;