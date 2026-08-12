---
title: "Venda de PUT curta + acúmulo de CALL longa: o caso CYRE3"
description: "Toda venda de PUT gera caixa no ato. Em vez de deixar esse caixa parado, ele financia a compra gradual de CALLs longas — construindo exposição de alta sem aporte de capital novo."
pubDate: 2026-08-11
categoria: "derivativos"
tags: ["opções", "venda de put", "renda", "convexidade", "CYRE3"]
contemDadosIlustrativos: true
draft: false
---

Toda venda de PUT curta gera caixa no ato — o prêmio cai na conta assim que a
estrutura é montada. A pergunta interessante não é "vendo PUT ou não", é: **o que
fazer com esse caixa?**

Este post trabalha uma resposta específica: usar o prêmio, ciclo a ciclo, para
comprar CALLs longas — construindo, aos poucos e sem aporte novo de capital, uma
posição de alta com prazo mais longo. O caso de trabalho é a Cyrela (CYRE3).

## Parâmetros de mercado (verificados 11/08/2026)

| | |
|---|---|
| Ativo | CYRE3 (Cyrela) |
| Preço à vista | R$ 21,46 |
| Selic (r) | 14,00% a.a. — mantida constante na simulação, sem prever novo corte |
| Dividend yield estimado (q) | ~10% a.a. — realizado 12m ~13,1%; consenso forward 9-12% |
| Volatilidade usada (σ) | 38% a.a. — **estimativa**, validar com IV real da mesa antes de executar |

Vale registrar por que isso importa: Selic alta **e** dividendo alto ao mesmo tempo é
parte do que torna o prêmio da PUT relativamente atrativo perto do custo da CALL —
não é um detalhe de precificação, é o motor da estrutura.

## A tese em uma frase

A venda mensal de PUT R$ 20,00 financia a compra gradual de CALLs R$ 23,00 de 126
dias úteis. A cada ciclo de 21 du, o prêmio recebido (≈ R$ 1.682) compra cerca de
**956 CALLs** — em 6 ciclos, a posição de CALLs chega perto de **5.738 opções**,
aproximadamente do mesmo tamanho da posição de PUTs vendidas.

## O plano — 4 pilares

**1) Vender PUT R$ 20,00 a cada 21 dias úteis.** Strike cerca de 6,8% abaixo do
preço atual — recebe prêmio de aproximadamente R$ 0,34/ação (R$ 1.682 em 5.000
ações). Se o CYRE3 ficar acima de R$ 20,00 no vencimento, a PUT expira sem valor e
o prêmio fica retido integralmente — esse é o cenário que alimenta o próximo pilar.

**2) Usar o prêmio para comprar CALL R$ 23,00 de 126 du.** Com o prêmio recebido no
pilar 1, compra-se uma fatia de CALLs longas (strike 7,2% acima do preço atual,
prazo ≈ 6 meses). Ao preço de R$ 1,76/ação, cada ciclo financia cerca de 956
opções — repetido mês a mês, a posição de CALLs vai acumulando, sem novo aporte de
capital vindo de fora da estrutura.

**3) Gestão do exercício da PUT.** Se a PUT for exercida (CYRE3 abaixo de R$ 20,00
no vencimento), o cliente compra 5.000 ações a R$ 20,00 — um desconto de 6,8% sobre
o preço de hoje, efetivamente a R$ 19,66 líquido do prêmio já recebido. Dado que a
Cyrela hoje negocia com P/L baixo e dividend yield elevado, ser exercido não é
necessariamente ruim — é comprar a ação com desconto, sendo pago para aceitar esse
preço. Ainda assim, isso **consome capital/margem** e deve ser tratado como risco
real, não como detalhe.

**4) Rolagem das CALLs acumuladas.** Conforme as CALLs mais antigas se aproximam do
vencimento (6 meses), rola-se a posição para um novo strike/prazo, mantendo a
exposição de alta viva enquanto a tese de recuperação ou valorização da Cyrela se
mantém.

## Resumo numérico das duas pernas

| | PUT vendida (curta) | CALL comprada (longa) |
|---|---|---|
| Tipo | Venda de PUT (crédito) | Compra de CALL (débito, financiada) |
| Strike | R$ 20,00 | R$ 23,00 |
| Prazo | 21 du (≈ 1 mês, rola) | 126 du (≈ 6 meses) |
| Prêmio (BS, exemplo) | R$ 0,34/ação | R$ 1,76/ação |
| Quantidade por ciclo | 5.000 | ≈ 956 |
| Breakeven | R$ 19,66 | R$ 24,76 |
| Ganha se... | CYRE3 acima de R$ 20,00 | CYRE3 acima de R$ 24,76 |

## Cenários após 6 ciclos (≈ 6 meses)

**Alta forte** (ex.: CYRE3 a R$ 28,00): PUTs mensais expiram sem valor (embolsa
R$ 10.090 no total) e a posição de ≈5.738 CALLs vale bem acima do custo — ganho
estimado nas CALLs de ≈R$ 18.602. Cenário ideal: as duas pernas ganham.

**Lateral** (CYRE3 entre R$ 20,00 e R$ 23,00): PUTs seguem expirando sem valor na
maioria dos ciclos (motor de receita continua rodando); CALLs ficam próximas ou
abaixo do strike, perdendo parte do prêmio — resultado neutro a levemente positivo,
mas a máquina de financiamento continua funcionando.

**Queda forte** (ex.: CYRE3 a R$ 17,00): PUTs exercidas repetidamente — compra
5.000 ações a R$ 20,00 a cada ciclo (acima do preço de mercado no cenário),
consumindo capital/margem. CALLs expiram sem valor, perdendo o prêmio financiado
(≈R$ 10.090). **Este é o risco real da estrutura.**

## Riscos e condições

Numa queda forte e sustentada, a PUT é exercida mês a mês (ou precisa ser rolada
com débito), consumindo capital, enquanto as CALLs perdem o prêmio — as duas pernas
trabalham contra ao mesmo tempo. A estrutura assume que o prêmio da PUT continua
saindo à vista de mercado provável — se a volatilidade cair, o prêmio recebido cai
junto, reduzindo o ritmo de acúmulo das CALLs. Os prêmios usados aqui vêm de
Black-Scholes com parâmetros reais de juros e dividendo, mas volatilidade
**estimada** — conferir a IV real do book antes de cada montagem. Rolar CALLs de 6
em 6 meses expõe a estrutura a decisões de timing repetidas; não é uma posição de
"montar e esquecer".

> A ideia não é só vender PUT pelo prêmio, nem só comprar CALL torcendo pela alta.
> É usar o caixa gerado pela PUT, ciclo a ciclo, para construir uma posição de alta
> de prazo mais longo sem aporte de capital novo — aceitando, em troca, o risco
> real de que uma queda forte e sustentada penalize as duas pernas ao mesmo tempo.
