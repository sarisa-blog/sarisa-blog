---
title: "Volmageddon: o dia em que quem entendia vega e gamma ganhou uma fortuna"
description: "Em 5 de fevereiro de 2018, o VIX subiu 115% num pregão só e um produto de US$ 1,9 bi virou pó em horas. O mecanismo por trás já tinha sido descrito, em detalhe, um ano antes, por quem entendia a matemática de vega e gamma dos produtos de volatilidade curta."
pubDate: 2026-08-14T14:00:00Z
categoria: "derivativos"
subtopico: "gregas-casos-reais"
tags: ["volmageddon", "vega", "gamma", "vix", "gregas", "case-real", "derivativos"]
contemDadosIlustrativos: false
draft: false
---

Essa é a história de um evento em que a teoria das gregas não é só
explicação depois do fato. Um investidor específico descreveu, em
detalhe matemático, o mecanismo exato que ia detonar o mercado de
volatilidade, um ano antes de acontecer. Quem levou esse aviso a sério
teve tempo de se posicionar. Quem não levou perdeu quase tudo em algumas
horas.

## O que aconteceu

Em 5 de fevereiro de 2018, o VIX (índice que mede a volatilidade
implícita do S&P 500, muitas vezes chamado de "índice do medo") fechou o
pregão anterior (2 de fevereiro) em 17,31 pontos, um nível considerado
normal. No fechamento de 5 de fevereiro, ele estava em 37,32 pontos.

<figure class="post-img">
  <img src="/images/case-volmageddon-vix.png" alt="Gráfico de barras mostrando o VIX saltando de 17,31 em 2 de fevereiro de 2018 para 37,32 em 5 de fevereiro de 2018" loading="lazy" />
</figure>

Uma alta de 115% num único pregão, a maior subida diária da história do
VIX até aquele momento. O apelido que o mercado deu pro dia: **Volmageddon**.

## O produto que virou pó

No centro do episódio estava o **XIV** (VelocityShares Daily Inverse VIX
Short-Term ETN), um produto emitido pelo Credit Suisse desenhado pra
entregar o retorno inverso diário dos futuros de VIX: quando a
volatilidade caía, o XIV subia. Era, na prática, uma aposta alavancada de
que a calmaria ia continuar, e ela tinha funcionado por anos: a
volatilidade ficou historicamente baixa entre 2016 e o começo de 2018, e
o XIV só subia. Na sexta-feira anterior ao colapso (2 de fevereiro de
2018), o produto administrava cerca de US$ 1,9 bilhão.

No fechamento de 2 de fevereiro de 2018, o valor indicativo do XIV era de
US$ 108,3681. Na noite de 5 de fevereiro, o valor intradiário caiu pra
20% ou menos do fechamento anterior, o gatilho contratual pra um
**"evento de aceleração"**: o Credit Suisse anunciou o encerramento
antecipado do produto. Quem tinha XIV recebeu de volta uma fração
pequena do valor anterior, a maior parte do capital simplesmente
evaporou em questão de horas. Um produto irmão, o SVXY (da ProShares),
também caiu mais de 90% no mesmo pregão, mas sobreviveu reduzindo pela
metade a alavancagem que oferecia daquele dia em diante.

## A mecânica: um problema de gregas, não de sorte

Produtos como XIV e SVXY precisam se rebalancear todo santo dia pra
manter a alavancagem prometida (-1x o retorno do VIX futuro, no caso do
XIV). O problema é que, conforme a volatilidade sobe, o tamanho da
posição em futuros de VIX que eles precisam recomprar pra manter essa
alavancagem cresce de forma **não linear**, um efeito de convexidade. Ou
seja, quanto mais o VIX sobe, maior (proporcionalmente) fica a compra de
futuros necessária pra rebalancear, e essa própria compra empurra o preço
dos futuros ainda mais pra cima, forçando uma compra ainda maior no dia
seguinte. Um ciclo que se autoalimenta, e que só para quando o produto
simplesmente deixa de existir.

## Quem avisou, um ano antes

Em 2017, Christopher Cole, da gestora Artemis Capital Management,
publicou um relatório chamado "Volatility and the Alchemy of Risk",
descrevendo exatamente esse mecanismo. Ele usou a imagem do **Ouroboros**,
a cobra mitológica que devora o próprio rabo, pra descrever como o
mercado global de venda de volatilidade tinha se organizado num circuito
que se alimentava da própria destruição potencial. Cole já vinha
alertando publicamente, desde 2014 e com sinais ainda em 2012, sobre o
risco estrutural desse tipo de produto: não era uma previsão de quando,
era uma descrição precisa de como o mecanismo ia se comportar quando a
calmaria acabasse.

Quem leu esse relatório, entendeu a matemática de vega e gamma por trás
da posição desses produtos, e se posicionou comprado em volatilidade
(via opção ou via venda direta de XIV/SVXY) antes de fevereiro de 2018
capturou um dos retornos mais assimétricos já registrados num único
pregão: apostar pouco contra um mecanismo que, matematicamente, só podia
ir explodir sob estresse suficiente.

## A leitura que fica

Volmageddon não foi um evento aleatório de mercado. Foi a consequência
previsível, sob os termos exatos dos produtos, de um comportamento de
vega e gamma que qualquer pessoa com acesso ao prospecto e ao
conhecimento de derivativos podia calcular com antecedência. A diferença
entre quem perdeu quase tudo e quem lucrou não foi sorte, foi
entender que rebalanceamento diário de um produto alavancado em
volatilidade tem convexidade embutida, e convexidade embutida, sob
estresse, vira uma bomba de efeito previsível.
