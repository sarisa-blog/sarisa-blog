---
title: "Vega: quanto a opção vale a mais (ou a menos) por causa da volatilidade"
description: "Vega mede o quanto o preço da opção reage a uma mudança na volatilidade implícita, e é a grega que explica por que uma opção pode perder dinheiro mesmo com o ativo parado."
pubDate: 2026-08-14
categoria: "derivativos"
subtopico: "gregas"
tags: ["vega", "gregas", "volatilidade", "opções", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

O post sobre [vol histórica x implícita](/blog/volatilidade-historica-x-implicita)
mostrou que a volatilidade implícita sobe e desce sozinha, independente do
preço do ativo. Vega é a grega que traduz esse movimento em reais: quanto
o preço da opção muda pra cada ponto percentual de mudança na volatilidade
implícita, com o ativo parado.

## Onde vega é alta

<figure class="post-img">
  <img src="/images/grega-vega.png" alt="Gráfico do vega de uma opção em função do preço do ativo, para dois prazos diferentes, mostrando que o vega é maior perto do ATM e cresce com o tempo até o vencimento" loading="lazy" />
</figure>

Vega é máxima perto do ATM (onde o valor extrínseco também é maior, os
posts sobre [call](/blog/o-que-e-uma-call) e [put](/blog/o-que-e-uma-put)
já mostraram esse padrão) e cai perto de zero nas duas pontas, longe do
strike. Diferente da gamma, que fica mais concentrada perto do vencimento,
vega faz o oposto: **quanto mais tempo até o vencimento, maior o vega**.
Faz sentido, uma opção com mais tempo pela frente tem mais chances de a
volatilidade real se manifestar antes do vencimento, então o preço dela é
mais sensível a uma mudança na expectativa de volatilidade.

## A armadilha de quem só olha o ativo

É perfeitamente possível uma opção perder valor com o ativo completamente
parado, só porque a volatilidade implícita caiu. Isso pega muita gente de
surpresa: "o ativo não se mexeu, por que minha opção perdeu dinheiro?".
A resposta quase sempre é vega. O exemplo mais didático é o "IV crush"
descrito no post sobre [vol histórica x implícita](/blog/volatilidade-historica-x-implicita):
comprar opção às vésperas de um evento, com IV inflada, e ver o prêmio
derreter depois do evento, mesmo que o ativo tenha reagido pouco, é vega
negativo trabalhando contra quem comprou.

## Vega e a posição líquida da estrutura

Comprar opção (call ou put) sempre dá vega positivo: você ganha se a
volatilidade sobe. Vender opção dá vega negativo: você ganha se a
volatilidade cai. Estruturas com duas pernas (trava, collar) somam os
vegas de cada perna, e o resultado pode ser vega positivo, negativo, ou
quase neutro, dependendo de quanto cada perna pesa. Antes de montar
qualquer estrutura, vale somar o vega líquido da posição inteira, não só
olhar cada perna isolada: é comum uma estrutura parecer "neutra à
direção" no delta e ainda carregar uma exposição relevante a volatilidade
escondida no vega, que só aparece quando a vol se move de verdade.

*O gráfico usa parâmetros ilustrativos (K=100, juro 10,5% a.a., vol.
implícita 28% a.a., comparando 45 e 10 dias úteis até o vencimento). Não é
cotação de nenhum ativo real.*
