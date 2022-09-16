-- Escreva uma query para exibir por quantas empresas a peça 1 é provida.

USE PiecesProviders;
SELECT count(provider) from Provides
WHERE piece = 1;