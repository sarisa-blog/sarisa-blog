---
title: "ITM, ATM, OTM: onde a opção está em relação ao preço"
description: "Três siglas que aparecem em toda tela de opções e que a maioria decora sem entender por quê importam: onde a opção está determina quanto ela custa, quanto ela se move, e qual a chance real de virar dinheiro."
pubDate: 2026-08-14
categoria: "derivativos"
subtopico: "opcoes"
tags: ["opções", "itm", "atm", "otm", "derivativos", "educacional"]
contemDadosIlustrativos: false
draft: false
---

Toda tela de opções mostra essas três siglas ao lado de cada strike, e quase
ninguém para pra pensar no que elas realmente significam além de "cara" ou
"barata". ITM, ATM e OTM não são só rótulo, são a posição relativa entre o
preço do ativo e o strike, e essa posição determina o comportamento inteiro
da opção: quanto ela custa, quanto do custo é valor intrínseco, e quão
provável é que ela valha alguma coisa no vencimento.

## As três zonas

**ITM (in-the-money, dentro do dinheiro)**: a opção já teria valor
intrínseco se fosse exercida agora. Numa call, é quando o preço do ativo
está acima do strike. Numa put, é o oposto: preço do ativo abaixo do
strike.

**ATM (at-the-money, no dinheiro)**: preço do ativo aproximadamente igual ao
strike. É o ponto de maior incerteza sobre exercer ou não, e por isso é
onde o valor extrínseco (explicado nos posts sobre [call](/blog/o-que-e-uma-call)
e [put](/blog/o-que-e-uma-put)) costuma ser mais alto em termos absolutos.

**OTM (out-of-the-money, fora do dinheiro)**: sem valor intrínseco nenhum.
Numa call, preço do ativo abaixo do strike. Numa put, preço do ativo acima
do strike. Todo o prêmio de uma opção OTM é valor extrínseco, puro.

Repara que call e put são espelhadas: o mesmo lado do strike que deixa uma
call ITM deixa a put correspondente OTM, e vice-versa.

<figure class="post-img">
  <img src="/images/itm-atm-otm.png" alt="Diagrama mostrando as zonas ITM, ATM e OTM para call e put em relação ao strike" loading="lazy" />
</figure>

## Por que isso muda o comportamento da opção

Opções ITM custam mais (têm valor intrínseco embutido), mas te dão menos
alavancagem percentual: uma call bem ITM se move quase 1 para 1 com o
ativo, então uma alta de 5% no ativo não vira uma alta de 50% no prêmio.
Ela também tem probabilidade alta de terminar valendo alguma coisa no
vencimento.

Opções OTM custam pouco, exatamente porque a chance de terminarem valendo
zero é alta. Em troca, oferecem a maior alavancagem percentual: um pequeno
movimento do ativo na direção certa pode multiplicar o prêmio várias vezes,
porque a base de comparação é pequena. É por isso que opção OTM é o
instrumento favorito de quem quer apostar pouco dinheiro numa mudança
grande e rápida, e também o motivo pelo qual a maioria delas expira sem
valer nada.

ATM fica no meio: é onde a opção reage mais forte, em termos absolutos, a
uma mudança pequena no preço do ativo (o que os posts futuros sobre as
[gregas](/blog/categoria/derivativos) vão chamar de gamma alto), porque é
exatamente ali que a decisão entre "vai virar ITM" e "vai virar OTM" ainda
está em aberto.

## A leitura prática

Nenhuma dessas três zonas é "melhor" isolada, cada uma serve a um objetivo
diferente. Proteção (hedge) tende a usar opções mais OTM, porque o objetivo
é cobrir um cenário de cauda a um custo baixo, não capturar todo movimento.
Estrutura de acúmulo ou renda tende a trabalhar perto do ATM ou levemente
ITM/OTM, onde o equilíbrio entre prêmio recebido e probabilidade de
exercício é mais previsível. A pergunta certa nunca é "qual opção é mais
barata", é "qual zona serve ao objetivo específico dessa estrutura".
