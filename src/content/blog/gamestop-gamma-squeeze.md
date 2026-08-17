---
title: "GameStop: como delta e gamma transformaram $17 em $483"
description: "Em janeiro de 2021, GameStop subiu mais de 2.700% em menos de um mês. A causa não foi só investidor de varejo comprando ação. Foi delta e gamma forçando os formadores de mercado a comprar, empurrando o preço pra cima de forma mecânica."
pubDate: 2026-08-14T14:15:00Z
categoria: "derivativos"
subtopico: "gregas-casos-reais"
tags: ["gamestop", "gme", "delta", "gamma", "short-squeeze", "gregas", "case-real", "derivativos"]
contemDadosIlustrativos: false
draft: false
---

GameStop é o caso mais famoso de gregas afetando um preço real, mas a
maior parte das explicações populares para por aqui: "investidor de
varejo se uniu no Reddit e comprou a ação". Isso é verdade, mas incompleto.
O que transformou uma alta forte numa explosão vertical foi um mecanismo
de [delta](/blog/delta) e [gamma](/blog/gamma) que qualquer um que já
tivesse operado do lado vendido de opções reconheceria de longe.

## A trajetória real

<figure class="post-img">
  <img src="/images/case-gamestop-preco.png" alt="Gráfico da trajetória real do preço da ação GameStop em janeiro de 2021, de cerca de US$ 17 no início do mês até um pico intraday de US$ 483 em 28 de janeiro" loading="lazy" />
</figure>

A ação começou janeiro de 2021 em torno de US$ 17. Fechou 22 de janeiro
perto de US$ 65. Fechou 27 de janeiro a US$ 347,52. No dia seguinte, 28
de janeiro, bateu um pico intradiário de US$ 483, antes de várias
corretoras de varejo (mais notavelmente a Robinhood) restringirem a
compra do papel (só era possível vender), o que derrubou o preço de volta
pra perto de US$ 194 no fechamento do mesmo dia. Do início ao pico, mais
de 2.700% em menos de um mês.

## Duas forças, não uma

**Short squeeze**: no meio de janeiro de 2021, o interesse a descoberto
(short interest) chegou a superar **140% do free float** da ação, mais
ações vendidas a descoberto do que ações realmente disponíveis pra
negociar (possível porque uma mesma ação emprestada pode ser vendida a
descoberto mais de uma vez, em sequência). Isso deixava qualquer alta
forte com potencial de forçar quem estava vendido a comprar de volta pra
limitar perdas, o que empurra o preço ainda mais pra cima.

**Gamma squeeze**: paralelamente, uma onda de compradores de varejo
começou a comprar volumes enormes de calls fora do dinheiro, em strikes
que pareciam absurdos semanas antes (US$ 60, US$ 115, US$ 200, US$ 400).
Cada call vendida por um formador de mercado (a contraparte que assume o
lado vendido pra viabilizar a negociação) precisa ser [hedgeada](/blog/delta):
o formador compra uma fração da ação equivalente ao delta daquela opção.
Conforme o preço da ação subia e essas calls, antes fora do dinheiro, se
aproximavam e cruzavam o strike, o delta de cada uma subia rápido (o
efeito de [gamma](/blog/gamma) descrito no post anterior desta série), e
os formadores de mercado precisavam comprar mais e mais ações pra manter
o hedge. Essa compra mecânica, motivada por gestão de risco e não por
convicção sobre a empresa, empurrou o preço pra cima, o que tornava as
próximas calls ainda mais próximas do dinheiro, exigindo ainda mais
compra. O mesmo tipo de ciclo autorreforçado do Volmageddon, só que do
lado comprado em vez de vendido.

## O outro lado: quem perdeu, e por quê

A Melvin Capital, um dos fundos mais expostos vendido em GameStop,
começou 2021 com US$ 12,5 bilhões sob gestão e perdeu 53% só em janeiro,
terminando o mês com cerca de US$ 8 bilhões, incluindo um aporte de
socorro de US$ 2,75 bilhões vindo da Citadel e da Point72. O fundo não
quebrou por causa de uma tese errada sobre o valor da GameStop no longo
prazo, quebrou por estar posicionado do lado errado de um mecanismo de
gregas que ele mesmo, como um dos maiores fundos de operações vendidas em
ações do mercado, deveria conhecer profundamente.

## A leitura que fica

Quem entendeu, em tempo real, que a combinação de short interest
extremo com um volume anormal de compra de calls fora do dinheiro criava
um ambiente propício pra gamma squeeze teve, em teoria, informação
suficiente pra se posicionar comprado (em ação ou em opção) antes da
euforia. Na prática, poucos anteciparam a magnitude, porque o tamanho do
movimento dependeu de um elemento imprevisível, a coordenação inédita de
investidores de varejo em escala, ativando um mecanismo estrutural que
sempre existiu, mas nunca tinha sido puxado com essa força. A lição
estrutural continua válida independente do próximo nome: quando short
interest está extremo e o volume de opções fora do dinheiro dispara
de forma anormal, existe um mecanismo mecânico e conhecido que pode
transformar uma alta em explosão, na direção que for.
