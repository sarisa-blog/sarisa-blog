---
title: "Delta: quanto a opção anda pra cada R$ 1 do ativo"
description: "Delta é a grega mais citada e a mais mal-entendida: não é só 'quanto a opção se move', é também a base de todo hedge, e uma aproximação (imperfeita) da chance de a opção terminar valendo alguma coisa."
pubDate: 2026-08-14
categoria: "derivativos"
subtopico: "gregas"
tags: ["delta", "gregas", "opções", "hedge", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Delta é a primeira grega que todo mundo aprende, e por bom motivo: é a
mais intuitiva. Ela mede quanto o preço da opção se move pra cada R$ 1 de
movimento no preço do ativo, mantendo tudo o mais constante.

## A definição

Delta de uma call varia entre 0 e 1. Delta de uma put varia entre -1 e 0
(o valor da put sobe quando o ativo cai, por isso o sinal negativo). Uma
call com delta 0,60 significa, aproximadamente, que uma alta de R$ 1 no
ativo move o preço da call em R$ 0,60.

<figure class="post-img">
  <img src="/images/grega-delta.png" alt="Gráfico do delta de uma call (0 a 1) e de uma put (-1 a 0) em função do preço do ativo" loading="lazy" />
</figure>

Repara o formato em S da curva. Longe do strike, dos dois lados, o delta
satura perto de 0 ou perto de ±1: uma opção muito OTM quase não se move
com o ativo (delta perto de zero), e uma opção muito ITM se move quase
1 para 1 (delta perto de ±1), porque nesse ponto ela já se comporta quase
como o próprio ativo. É perto do strike que o delta muda mais rápido, o
que antecipa o assunto do próximo post desta série, o gamma.

## Duas leituras do mesmo número

**Delta como hedge ratio**: se você vendeu uma call com delta 0,60 sobre
100 ações, comprar 60 ações neutraliza (pra um movimento pequeno do
ativo) a exposição direcional dessa posição. É a base de qualquer
operação delta-neutra, e o motivo pelo qual mesas de opções ajustam
posição no ativo o tempo todo, o chamado hedge dinâmico.

**Delta como probabilidade aproximada**: sob certas simplificações, o
delta de uma call se aproxima da probabilidade (medida sob a métrica de
risco-neutro, não a probabilidade real) de a opção terminar dentro do
dinheiro no vencimento. É uma aproximação útil no dia a dia, mas
imprecisa, ela ignora completamente o quanto a opção termina dentro do
dinheiro, só se vai ou não terminar.

## Por que importa na prática

Delta é o primeiro número que qualquer mesa olha antes de qualquer outro,
porque responde a pergunta mais básica: pra que lado, e o quanto, essa
posição está exposta ao ativo agora. Uma carteira com delta agregado
positivo ganha se o ativo sobe. Uma carteira delta-neutra (soma dos deltas
igual a zero) não depende da direção do ativo pra um movimento pequeno,
só reage a mudanças em vol e no tempo, o que a torna uma forma comum de
isolar exposição a volatilidade sem apostar em direção.

Uma armadilha comum: tratar delta como fixo. Ele não é. Delta muda o
tempo todo, com o preço do ativo, com o tempo até o vencimento, com a
volatilidade. Uma posição montada delta-neutra hoje pode estar bem
longe de neutra amanhã, mesmo sem nenhuma decisão nova, só porque o ativo
se moveu. Essa mudança do delta tem nome e grega própria: é
[gamma](/blog/gamma), o assunto do próximo post.

*O gráfico usa parâmetros ilustrativos (K=100, 45 dias úteis, juro 10,5%
a.a., vol. implícita 28% a.a.). Não é cotação de nenhum ativo real.*
