## História/History  

+ We going to develop a new route of the game Realm Defense on our API.
+ This API returns the result of a daily tournament
+ This turnament is open every day from 00:00 to 21:59(UTC-0)  

Vamos desenvolver uma nova rota na API do jogo Realm Defense (jogo de Tower Defense com heróis)
Nessa API será possível obter o resultado do torneio diário (todos que jogam o jogo participam desse torneio)
O torneio fica disponível para ser jogado todos os dias de 00:00 às 21:59 (UTC-0).  

## Regras de Negócio / Business Rules 


+ Players can see the last turnament result from 00:00 to 21:59.
+ The API must not return any data from 22:00 to 23:59.(Expectation time)
 
De 00:00 às 21:59 os jogadores podem conferir o resultado do último torneio.

De 22:00 às 23:59 essa API não deve retornar nenhum dado (período de suspense antes de anunciar os vencedores).

## Quem vai usar essa API? / Who gonna use this API?

+ There two kind of returns from this API.

+ First one, return just the players , their scores on the turnament and the name of their heros.

+ Second, more detailed response with name, country, heros names e their levels, their scores , date and hour that the player reached his score.

Temos duas telas onde essa API pode ser usada:

Tela com um resumo rápido do ranking onde apenas exibimos o nome dos jogadores, os nomes dos heróis que eles usaram no torneio e sua pontuação final.

Tela mais detalhada onde mostramos o nome do usuário e sua nacionalidade, os nomes dos heróis e seus níveis, a pontuação final e a data/hora que o jogador atingiu aquela pontuação.