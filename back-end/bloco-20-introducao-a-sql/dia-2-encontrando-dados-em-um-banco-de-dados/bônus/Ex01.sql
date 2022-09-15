-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

USE PiecesProviders;
SELECT piece from Provides
WHERE provider = "RBT";