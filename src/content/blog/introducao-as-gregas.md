---
title: "Introdução às gregas: o mapa de risco por trás do preço da opção"
description: "O preço de uma opção é um número só, mas ele reage a cinco coisas diferentes ao mesmo tempo. As gregas separam essa reação pedaço por pedaço, e são o vocabulário real de quem gerencia risco em opções, não só precifica."
pubDate: 2026-08-14
categoria: "derivativos"
subtopico: "gregas"
tags: ["gregas", "delta", "gamma", "vega", "theta", "opções", "derivativos", "educacional"]
contemDadosIlustrativos: false
draft: false
---

O post sobre [Black-Scholes](/blog/modelo-black-scholes) mostrou que o
preço de uma opção sai de cinco inputs: preço do ativo, strike, tempo até
o vencimento, juro e volatilidade. As **gregas** são as derivadas desse
preço em relação a cada um desses inputs, ou seja, o quanto o preço da
opção se move quando cada input se move um pouquinho, mantendo os outros
parados. Elas são o vocabulário real de risco em opções: uma mesa que
opera opção não pensa "quanto vale essa call", pensa "quanto essa carteira
ganha ou perde se o ativo subir 1%, se a vol subir 1 ponto, se passar um
dia".

## Primeira ordem: sensibilidade direta

**[Delta](/blog/delta)**: quanto o preço da opção muda pra cada R$ 1 de
movimento no ativo. É a grega mais usada no dia a dia, e também funciona
como aproximação grosseira da probabilidade de a opção terminar dentro do
dinheiro.

**[Vega](/blog/vega)**: quanto o preço muda pra cada ponto percentual de
mudança na volatilidade implícita.

**[Theta](/blog/theta)**: quanto o preço muda só pelo tempo passar, um dia
a menos até o vencimento, sem o ativo se mexer nada.

Existe uma quarta grega de primeira ordem, o **Rho** (sensibilidade ao
juro), menos citada no dia a dia porque a taxa de juro muda devagar
comparado às outras variáveis, mas ela é a razão pela qual dois postos
atrás insistimos em rodar Black-Scholes com a Selic real, não uma
aproximada.

## Segunda ordem: como as sensibilidades mudam

As gregas de primeira ordem não são constantes, elas mesmas mudam quando o
ativo se move, quando o tempo passa, quando a vol muda. As gregas de
segunda ordem medem essa mudança:

**[Gamma](/blog/gamma)**: quanto o delta muda pra cada R$ 1 de movimento
no ativo. É a "aceleração" da posição, e é ela que explica por que opção
perto do vencimento e perto do strike é tão mais reativa que o resto.

**[Charm](/blog/charm)**: quanto o delta muda sozinho, só pelo tempo
passar.

**[Vanna](/blog/vanna)**: quanto o delta muda quando a volatilidade muda
(ou, de forma equivalente, quanto o vega muda quando o ativo se move).

## Por que vale a pena aprender isso em ordem

Cada grega isolada parece só mais um número numa tela cheia de números.
Juntas, elas formam um mapa: primeiro ordem diz onde a posição está agora,
segunda ordem diz como esse "onde" vai mudar sozinho, sem nenhuma decisão
nova sua, só o tempo passando ou o mercado se mexendo. Os próximos seis
posts desta série cobrem cada uma com sua própria lógica, seu próprio
gráfico e sua própria aplicação prática. No final, a ideia é conseguir
olhar pra qualquer estrutura de opções e responder, sem rodar planilha
nenhuma: o que acontece com essa posição amanhã, se nada além do tempo
mudar?
