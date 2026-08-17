---
title: "Opções americanas e europeias: quando o direito pode ser exercido"
description: "Não tem nada a ver com o continente. É sobre quando você pode exercer o direito: a qualquer momento até o vencimento, ou só no dia exato. No Brasil, a regra muda dependendo do que você está negociando."
pubDate: 2026-08-14T09:15:00Z
categoria: "derivativos"
subtopico: "opcoes"
tags: ["opções", "americana", "europeia", "b3", "derivativos", "educacional"]
contemDadosIlustrativos: false
draft: false
---

O nome confunde todo iniciante: "americana" e "europeia" não têm nada a ver
com onde a opção é negociada. Uma opção sobre uma ação brasileira, listada
na B3, pode perfeitamente ser do estilo "americano". O nome se refere só a
uma coisa: **quando** o direito pode ser exercido.

## A diferença

**Opção americana**: o titular pode exercer o direito a qualquer momento
entre a compra e o vencimento, não precisa esperar o dia final.

**Opção europeia**: o exercício só pode acontecer exatamente na data de
vencimento, nem um dia antes.

Uma confusão comum: estilo europeu **não** significa que você fica travado
na posição até o vencimento. Você pode vender a opção no mercado a
qualquer momento, em ambos os estilos. A diferença é só sobre exercer o
direito (comprar ou vender o ativo pelo strike), não sobre negociar o
contrato.

## Como funciona na B3

Na B3, opções sobre ações, units e ETFs seguem o modelo **americano**: o
exercício manual é permitido a partir de D+1 da negociação. Já as opções
sobre o Ibovespa (índice) e sobre dólar seguem o modelo **europeu**,
exercício só no vencimento.

Isso significa que toda opção de ação que aparece nos posts deste blog
(call e put sobre PETR4, VALE3, ITUB4, etc.) é, por padrão, do estilo
americano.

## Então por que quase ninguém exerce antes do vencimento?

Aqui está o ponto que costuma surpreender: mesmo tendo o direito de
exercer a qualquer momento, exercer uma opção americana antes do
vencimento quase nunca é a decisão certa. O motivo é o valor extrínseco,
que já apareceu nos posts sobre [call](/blog/o-que-e-uma-call) e
[put](/blog/o-que-e-uma-put): ao exercer, você fica só com o valor
intrínseco e joga fora qualquer valor extrínseco restante. Na prática,
quase sempre é melhor vender a opção no mercado (recebendo intrínseco mais
extrínseco) do que exercê-la (recebendo só o intrínseco).

Existem duas exceções reais, e ambas já apareceram neste blog:

**Call perto de data ex-dividendos**: se o dividendo esperado for maior do
que o valor extrínseco restante da call, pode compensar exercer
antecipadamente pra capturar o direito ao dividendo antes do preço do
ativo cair no ex.

**Put bem dentro do dinheiro com juro alto**: no post sobre a
[put](/blog/o-que-e-uma-put), mostramos que o valor extrínseco de uma put
muito ITM pode ficar negativo quando o juro está alto, porque quem espera
até o vencimento perde o valor do dinheiro no tempo sobre o strike que vai
receber. Nesse cenário específico, exercer antes (e receber o strike em
caixa agora) pode valer mais do que vender a opção. É exatamente esse tipo
de situação, juro real elevado como o brasileiro tem tido, que torna esse
efeito mais relevante aqui do que em mercados de juro baixo.

## Por que isso importa

Uma opção americana, por dar mais flexibilidade ao titular, vale igual ou
mais do que a europeia equivalente, nunca menos, esse valor extra é
chamado de prêmio de exercício antecipado. Na prática do dia a dia, ele é
pequeno na maioria dos casos, mas as duas exceções acima mostram que
"pequeno na maioria dos casos" não é o mesmo que "zero sempre". Ignorar
esse detalhe é o tipo de coisa que só custa caro na estrutura errada, no
momento errado, geralmente perto de vencimento com juro alto ou dividendo
relevante no meio do caminho.
