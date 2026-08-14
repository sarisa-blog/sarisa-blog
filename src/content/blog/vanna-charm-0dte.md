---
title: "Vanna, charm e o mercado de opções que vence no mesmo dia"
description: "Diferente do GameStop e do Volmageddon, esse caso não é um evento isolado, é um mecanismo que roda todo dia no mercado americano. Opções que vencem no mesmo dia já são mais da metade do volume do S&P 500, e vanna e charm viraram fonte de estratégia sistemática."
pubDate: 2026-08-14
categoria: "derivativos"
subtopico: "gregas-casos-reais"
tags: ["vanna", "charm", "0dte", "gregas", "case-real", "estrutura-de-mercado", "derivativos"]
contemDadosIlustrativos: false
draft: false
---

Os dois casos anteriores desta série, [Volmageddon](/blog/volmageddon-2018)
e [GameStop](/blog/gamestop-gamma-squeeze), são eventos pontuais,
extraordinários, que aconteceram uma vez e entraram pra história. Este
caso é diferente: é um mecanismo que roda **todo santo dia** no mercado
americano, ficou grande o suficiente pra mover preço de forma sistemática,
e deu origem a fundos inteiros construídos em cima dele.

## O crescimento das opções de vencimento no mesmo dia

<figure class="post-img">
  <img src="/images/case-0dte-crescimento.png" alt="Gráfico de barras mostrando o crescimento da participação das opções 0DTE no volume do SPX: de cerca de 5% em 2016 para mais de 55% em 2025" loading="lazy" />
</figure>

Opções "0DTE" (zero days to expiration, vencimento no mesmo dia da
negociação) eram uma fatia pequena e quase irrelevante do mercado em
2016, cerca de 5% do volume de opções sobre o índice S&P 500 (SPX). A
Cboe passou a listar vencimentos diários (não só mensais) pro SPX a
partir de 2022, e a fatia disparou: perto de 45% do volume do SPX em
2023, e hoje estimada entre 47% e 59% (dependendo da metodologia e do
mês), com volume médio diário na casa de 2,3 milhões de contratos em
2025. No mercado de opções listadas dos EUA como um todo, 0DTE saltou
de 21,5% do volume total em 2024 pra 24,1% em 2025.

## Por que isso ativa [charm](/blog/charm) e [vanna](/blog/vanna) com força

Uma opção que vence no mesmo dia tem, por definição, o máximo de charm
possível: o delta dela precisa colapsar pra 0 ou para ±1 em questão de
horas, não semanas. Formadores de mercado que ficam do lado vendido
desse volume gigantesco de opções de curtíssimo prazo precisam ajustar
hedge de forma quase contínua ao longo do próprio dia de negociação, só
por causa da passagem do tempo, o efeito charm em escala industrial. A
JPMorgan estimou que esse fluxo de rebalanceamento de formadores de
mercado já influencia de forma mensurável o movimento intradiário do
S&P 500, incluindo um efeito conhecido como **"end of day pin"**: o
preço do índice tende a gravitar em torno de determinados strikes perto
do fechamento, puxado pelo hedge de charm sendo desmontado.

Vanna entra quando a volatilidade implícita se move durante o pregão: uma
queda na vol muda o delta de milhões de contratos em aberto ao mesmo
tempo, forçando ajuste de hedge que nada tem a ver com o ativo em si, só
com a mudança na expectativa de volatilidade.

## Quem constrói estratégia em cima disso

Cem Karsan, fundador da Kai Volatility Advisors, é o nome mais citado
publicamente por transformar leitura de fluxo de vanna e charm dos
formadores de mercado numa estratégia sistemática de negociação: em vez
de apostar em direção do ativo, ele opera antecipando quando e quanto
esse rebalanceamento mecânico vai empurrar o preço, tipicamente perto de
vencimentos mensais e em torno do fechamento diário no universo 0DTE.
É uma estratégia genuinamente diferente de analisar fundamento ou
narrativa: é ler a posição agregada de opções em aberto e a mecânica de
hedge que ela obriga, e se posicionar um passo à frente do fluxo que vai
acontecer de qualquer forma, goste o mercado ou não.

## A leitura que fica

Diferente de Volmageddon e GameStop, aqui não existe um dia específico
pra apontar como "o evento". O ganho de quem entende esse mecanismo não
vem de prever um cisne negro, vem de reconhecer que existe uma fonte de
fluxo mecânico, recorrente e crescente (a fatia de 0DTE só aumentou nos
últimos anos) rodando por trás do preço todo santo dia, gerada por gente
que não está negociando por convicção nenhuma sobre o ativo, só cumprindo
obrigação de hedge. Entender vanna e charm não é sobre acertar uma
aposta grande uma vez. É sobre enxergar uma fonte de viés estrutural
recorrente que a maioria do mercado não sabe nem que existe.
