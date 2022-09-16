-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.

SELECT name FROM Projects
WHERE code IN ("AeH3", "Ast3", "Che1");