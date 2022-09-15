-- Escreva uma query para exibir o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.

USE Scientists;
select name as nome_do_projeto, hours as tempo_de_trabalho 
from Projects;