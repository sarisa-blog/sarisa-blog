---
title: "Paridade put-call: por que call e put nunca são independentes"
description: "Call e put sobre o mesmo ativo, mesmo strike, mesmo vencimento não são dois produtos separados, são a mesma relação matemática vista de dois ângulos. Quando essa relação quebra, existe arbitragem, e ela não dura."
pubDate: 2026-08-14T10:45:00Z
categoria: "derivativos"
subtopico: "precificacao"
tags: ["paridade-put-call", "opções", "arbitragem", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Call e put costumam ser ensinadas como dois produtos separados, um pra
quem acha que sobe, outro pra quem acha que cai. Matematicamente, elas não
são independentes. Existe uma equação, a **paridade put-call**, que
amarra o preço de uma call e o preço de uma put de mesmo strike e mesmo
vencimento de forma tão rígida que, se ela for quebrada, existe dinheiro
de graça na mesa, e isso não sobrevive muito tempo num mercado com gente
prestando atenção.

## A relação

Para o mesmo ativo, mesmo strike (K) e mesmo vencimento:

**C − P = S − K × e^(−rT)**

Onde C é o preço da call, P o preço da put, S o preço do ativo, e o termo
com o "e" é o valor presente do strike, descontado pela taxa livre de
risco até o vencimento (com ativos que pagam dividendo, entra mais um
desconto do lado do S). Em português: a diferença entre o preço da call e
o preço da put é sempre igual à diferença entre o preço do ativo hoje e o
valor presente do strike. Não é uma tendência, não é uma aproximação, é
uma igualdade que precisa valer, sob risco de abrir uma janela de
arbitragem.

## Por que ela precisa valer

Rearranjando a equação, ela diz outra coisa: **comprar uma call e vender
uma put do mesmo strike replica exatamente o resultado de comprar o ativo
a termo** (comprometido a um preço fixado hoje, liquidado no vencimento).

<figure class="post-img">
  <img src="/images/paridade-put-call.png" alt="Gráfico mostrando que o payoff de call comprada mais put vendida se sobrepõe exatamente ao payoff do ativo comprado a termo, ilustrando a paridade put-call" loading="lazy" />
</figure>

As duas linhas do gráfico se sobrepõem porque são, literalmente, a mesma
posição vista de dois jeitos diferentes. Se o preço de mercado da
combinação "call comprada + put vendida" se afastasse do preço do ativo a
termo, um agente poderia montar a combinação mais barata e vender a mais
cara, travando lucro sem risco algum, independente de o ativo subir ou
cair. Esse tipo de oportunidade existe às vezes, por frações de segundo,
em mercados com fricção (spread, corretagem, restrição de venda a
descoberto), mas não sobrevive de forma persistente. É por isso que a
paridade funciona como um freio: ela não descreve uma tendência de
mercado, descreve um limite estrutural que o preço não pode furar por
muito tempo.

## Pra que serve na prática

Além de ser um checador de consistência (se o preço de mercado de uma
call e de uma put do mesmo strike implicam num "ativo a termo" muito fora
do valor razoável, alguma coisa está errada ou existe uma fricção real por
trás, tipo dificuldade de emprestar o ativo pra venda a descoberto), a
paridade é a base de toda posição sintética: comprar call e vender put do
mesmo strike simula estar comprado no ativo sem precisar do capital
integral. Vender call e comprar put simula estar vendido no ativo. É
assim que se constrói collar, trava, e a maior parte das estruturas que
aparecem neste blog: elas não são truques isolados, são combinações
específicas dessa mesma relação de paridade, montadas pra um objetivo de
risco diferente do de simplesmente comprar ou vender o ativo à vista.

*O gráfico usa parâmetros ilustrativos (K=100, prêmio da call=5, prêmio
da put=4) só pra deixar visível a sobreposição. Não é cotação de nenhum
ativo real.*
