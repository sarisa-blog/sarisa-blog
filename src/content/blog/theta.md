---
title: "Theta: o aluguel que toda opção comprada paga, todo dia"
description: "Theta mede quanto a opção perde de valor só pelo tempo passar, sem o ativo se mexer nada. É o custo silencioso de carregar opção comprada, e a fonte de renda de quem vende."
pubDate: 2026-08-14T11:45:00Z
categoria: "derivativos"
subtopico: "gregas"
tags: ["theta", "gregas", "opções", "decaimento", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Os posts sobre [call](/blog/o-que-e-uma-call) e [put](/blog/o-que-e-uma-put)
já mostraram que o valor extrínseco evapora até o vencimento. Theta é a
grega que mede a velocidade exata dessa evaporação: quanto a opção perde
de valor, em reais, só por passar um dia, com o ativo e a volatilidade
completamente parados.

## O formato da curva

<figure class="post-img">
  <img src="/images/grega-theta.png" alt="Gráfico do theta de uma call em função do preço do ativo, para dois prazos diferentes, mostrando que o theta é mais negativo perto do ATM e mais intenso perto do vencimento" loading="lazy" />
</figure>

Theta é negativo pra quem comprou a opção (ela perde valor com o tempo) e
positivo pra quem vendeu (o vendedor lucra com essa mesma perda, é o
prêmio que ele recebeu à vista sendo "ganho" dia a dia). Ele é mais
negativo perto do ATM, exatamente onde o valor extrínseco é maior, e
praticamente zero nas pontas, onde a opção já tem pouco ou nenhum valor
extrínseco pra perder. Repara também que a opção com 10 dias de vida tem
um theta bem mais negativo no fundo do vale do que a de 45 dias: o
decaimento acelera conforme o vencimento se aproxima, o mesmo efeito que
o gráfico de valor extrínseco dos posts sobre call e put já sugeria, só
que agora medido dia a dia.

## O "aluguel" da opção comprada

Uma forma útil de pensar em theta: quem compra opção está, de certa
forma, pagando um aluguel diário pelo direito que ela representa, mesmo
que não perceba isso de forma explícita. Esse aluguel não é constante,
ele cresce (em módulo) conforme o vencimento se aproxima, então o mesmo
prêmio nominal representa uma sangria diária cada vez maior nas últimas
semanas de vida da opção. É por isso que comprar opção muito perto do
vencimento, esperando um movimento lento do ativo, é estruturalmente
desfavorável: o custo do tempo corre contra você mais rápido bem no
momento em que sobra menos tempo pra tese se confirmar.

## Vender theta não é dinheiro de graça

Do outro lado, vender opção pra "receber theta" é uma estratégia real e
usada com frequência (venda coberta, estruturas de renda), mas theta
positivo nunca vem sozinho: quem vende opção também está vendido em
gamma e em vega, como os dois posts anteriores desta série mostraram.
Receber o aluguel do tempo é a compensação por carregar o risco de um
movimento brusco do ativo (gamma) ou uma expansão de volatilidade (vega).
Tratar theta como "renda garantida", ignorando o resto da carteira de
gregas que vem junto, é o erro mais comum de quem começa a vender opção
achando que encontrou dinheiro fácil.

*O gráfico usa parâmetros ilustrativos (K=100, juro 10,5% a.a., vol.
implícita 28% a.a., comparando 45 e 10 dias úteis até o vencimento). Não é
cotação de nenhum ativo real.*
