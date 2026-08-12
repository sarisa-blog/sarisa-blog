---
title: "Gestão de uma trava de PUT que ficou ITM: o caso BBDC4"
description: "Quando a trava de alta com PUT vira perda marcada, a resposta não é encerrar — é rolar a cada 21 dias úteis e montar trava de CALL pra transformar tempo em renda."
pubDate: 2026-08-11
categoria: "derivativos"
tags: ["opções", "trava de put", "renda", "BBDC4"]
contemDadosIlustrativos: true
draft: false
---

Uma trava de alta com PUTs (venda de trava de PUT) ganha dinheiro enquanto o ativo
fica acima dos dois strikes. O problema aparece quando o ativo cai abaixo dos dois —
a estrutura entra na zona de perda máxima, e a primeira pergunta do cliente é sempre
a mesma: "isso travou o prejuízo?"

Não trava. E é isso que este post explica, usando um caso real de gestão: uma trava
de PUT 20,00/18,00 em BBDC4, montada com 6.000 opções, com o papel operando a
R$ 17,44 — abaixo dos dois strikes.

## A situação

Vendeu-se a PUT de strike R$ 20,00 e comprou-se a PUT de strike R$ 18,00 — uma
estrutura de crédito que ganha o prêmio máximo se o Bradesco fechar acima de
R$ 20,00. Com o papel a R$ 17,44, a trava está na faixa de perda máxima:

| | |
|---|---|
| Estrutura | Trava de alta com PUT (crédito) |
| PUT vendida | R$ 20,00 |
| PUT comprada | R$ 18,00 |
| Preço atual | R$ 17,44 |
| Breakeven | R$ 19,20 |

**Ponto-chave:** essa perda ainda não foi realizada. Enquanto a trava não vence e não
é encerrada, é apenas marcação a mercado — e é exatamente por isso que existe um
plano de gestão, não uma perda "travada".

## O plano — 3 pilares

**1) Rolar a cada 21 dias úteis.** Em vez de realizar a perda no vencimento, a trava é
rolada por mais 21 dias úteis. A PUT vendida, hoje muito dentro do dinheiro e quase só
com valor intrínseco, é reposicionada para capturar valor extrínseco (tempo) — que
passa a decair a favor de quem vendeu.

**2) Montar trava de CALL acima do preço — renda mensal.** Enquanto o mercado fica
lateral ou cai de leve, monta-se uma trava de CALL vendida acima do preço atual. Se o
papel fechar abaixo do strike vendido, o crédito é embolsado integralmente e abate
diretamente o custo da trava de PUT.

**3) Gestão do exercício.** Se a PUT vendida for exercida, o valor intrínseco se
resolve — e ao rolar, a estrutura volta a ter valor extrínseco. Normalmente vale a pena
encerrar e abrir uma nova trava, capturando prêmio cheio de novo.

## Por que isso funciona

Mesmo que o papel fique de lado, a renda das travas de CALL se acumula mês a mês.
No exemplo trabalhado, por volta do 4º mês o prêmio acumulado das CALLs já supera
a perda máxima da trava de PUT original — sem contar eventuais créditos de rolagem
nem a recuperação do próprio papel, que seria ganho adicional.

> Bradesco abaixo dos strikes não significa prejuízo travado. Significa rolar a cada 21
> dias úteis e montar travas de CALL acima do preço enquanto o papel anda de lado —
> transformando tempo e lateralização em renda mensal.

## Riscos

A trava de CALL trabalha contra numa alta forte e rápida — por isso a regra é montá-la
só enquanto o mercado está lateral ou caindo de leve. Rolar indefinidamente consome
margem e capital: a estrutura só faz sentido enquanto a tese de recuperação do ativo
se mantém. Os prêmios usados neste exemplo são ilustrativos — os valores efetivos
dependem da volatilidade no momento de cada montagem.
