---
title: "IVRank e IV Percentil: a volatilidade está alta comparado a quê"
description: "Dizer que a volatilidade implícita está em 30% não diz nada sozinho. IV Rank e IV Percentil respondem 'alta comparado a quê', mas respondem de formas diferentes, e um outlier isolado pode fazer as duas discordarem."
pubDate: 2026-08-14
categoria: "derivativos"
subtopico: "precificacao"
tags: ["ivrank", "iv-percentil", "volatilidade", "opções", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

"A volatilidade implícita está em 30%." Sozinho, esse número não diz quase
nada. 30% é alto ou baixo? Depende inteiramente do histórico daquele
ativo específico: pra uma ação historicamente calma, 30% pode ser um
extremo raro. Pra uma ação historicamente agitada, pode ser um dia
tranquilo. IV Rank e IV Percentil existem pra resolver exatamente essa
pergunta, "alta comparado a quê", só que cada um responde de um jeito
diferente.

## IV Rank

Olha só dois números do período analisado (geralmente 1 ano): o mínimo e
o máximo. E posiciona a IV atual entre eles, em percentual:

**IV Rank = (IV atual − mínimo) / (máximo − mínimo) × 100**

Se a IV variou entre 15% e 45% no ano, e está em 22% hoje, o IV Rank é de
23%: a IV atual está perto da ponta baixa da faixa observada.

## IV Percentil

Olha a distribuição inteira do período, não só as duas pontas, e conta em
quantos dias a IV ficou abaixo do nível atual:

**IV Percentil = (dias com IV abaixo do nível atual) / (total de dias) × 100**

## Por que os dois podem divergir bastante

<figure class="post-img">
  <img src="/images/ivrank-percentil.png" alt="Gráfico de uma série de volatilidade implícita ao longo de um ano com um pico isolado de estresse, mostrando como IV Rank e IV Percentil divergem quando existe um outlier" loading="lazy" />
</figure>

No exemplo do gráfico, um único pico isolado de estresse (um dia de
pânico, um evento extremo e pontual) puxa o máximo do ano lá pra cima.
Isso distorce o IV Rank pra baixo, mesmo que a IV atual esteja, na
prática, numa faixa relativamente comum de acontecer. O IV Percentil, por
olhar a distribuição inteira em vez de só o extremo, é bem menos sensível
a esse tipo de outlier, e no mesmo exemplo mostra um número mais alto,
mais fiel a onde a IV atual realmente se posiciona no dia a dia daquele
ativo.

A regra prática: **IV Rank é mais simples, mas mais sensível a um
evento isolado no período. IV Percentil é mais robusto, mas exige olhar a
série inteira, não só dois pontos.** Quando um ativo teve algum evento
extremo recente (uma crise, uma notícia isolada, um erro de mercado), vale
mais confiar no Percentil. Em condições mais normais, os dois tendem a
contar histórias parecidas.

## Pra que serve, afinal

Nenhum dos dois diz se a opção está "cara" ou "barata" em termos
absolutos, isso ainda depende do modelo de
[Black-Scholes](/blog/modelo-black-scholes) e da comparação entre
[vol histórica e implícita](/blog/volatilidade-historica-x-implicita). O
que Rank e Percentil dão é contexto histórico: comprar opção com IV
Percentil em 10% significa comprar volatilidade historicamente barata
pra aquele ativo específico, com espaço maior pra ela expandir. Vender
com IV Percentil em 90% significa vender volatilidade historicamente
esticada, com espaço maior pra ela comprimir. Não é garantia de nada,
mercado pode continuar caro ou continuar barato por muito tempo, mas é uma
régua objetiva, melhor do que julgar só pelo número absoluto do dia.

*O gráfico usa uma série ilustrativa/sintética de 252 pregões (1 ano),
construída só pra mostrar como um outlier distorce o Rank mais do que o
Percentil. Não são dados reais de nenhum ativo específico.*
