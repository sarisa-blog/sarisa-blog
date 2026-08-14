---
title: "O que é uma call: o direito de comprar, não a obrigação"
description: "Uma call dá o direito de comprar um ativo por um preço fixo até uma data, nunca a obrigação. Isso muda tudo: quanto você pode perder é limitado, quanto você paga tem dois componentes distintos, e um deles evapora todo dia."
pubDate: 2026-08-14
categoria: "derivativos"
subtopico: "opcoes"
tags: ["opções", "call", "derivativos", "black-scholes", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Call é a opção mais mal explicada do mercado. A maioria das explicações começa
pela mecânica (strike, vencimento, prêmio) e só depois, se sobrar espaço,
chega ao que realmente importa: uma call é um **direito**, não uma
**obrigação**. Essa diferença de uma palavra é a razão pela qual opção existe
como classe de ativo separada de contrato futuro.

## A definição que importa

Uma call dá ao comprador o direito de comprar um ativo por um preço fixo (o
**strike**, K) até uma data determinada (o **vencimento**), mediante o
pagamento de um valor à vista (o **prêmio**). Repara no verbo: *direito*. Se
o preço do ativo subir acima do strike, você exerce e lucra a diferença. Se
cair, você simplesmente não exerce, e a única coisa que perde é o prêmio que
já pagou. Nunca mais que isso.

Isso é o oposto de comprar o ativo à vista alavancado, ou de um contrato
futuro: lá, se o preço despenca, a perda te acompanha sem limite (ou até a
zero). Numa call comprada, a perda máxima é conhecida no instante em que você
paga o prêmio.

## O payoff no vencimento

No dia do vencimento, o resultado de uma call comprada segue uma fórmula
simples: **máximo entre (preço do ativo menos strike) e zero, menos o prêmio
pago**. Visualmente, isso vira uma linha quebrada bem característica.

<figure class="post-img">
  <img src="/images/call-payoff.png" alt="Gráfico do payoff de uma call comprada no vencimento: perda limitada ao prêmio abaixo do strike, ganho ilimitado e linear acima do breakeven" loading="lazy" />
</figure>

No exemplo do gráfico (strike de R$ 100, prêmio de R$ 5): abaixo de R$ 100 no
vencimento, você perde exatamente os R$ 5 que pagou, não importa se o ativo
caiu 2% ou 40%. Acima de R$ 100, o resultado sobe R$ 1 pra cada R$ 1 de alta
do ativo. O **breakeven**, o preço em que você começa a lucrar de fato, fica
no strike mais o prêmio: R$ 105. Entre R$ 100 e R$ 105 você já exerce a
opção (recupera parte do prêmio), mas ainda está no vermelho no total da
operação.

Essa assimetria (perda limitada e conhecida, ganho ilimitado) é o motivo pelo
qual call vira ferramenta de estrutura, não só de especulação direta. Mas
ela tem um preço, e esse preço não é só sobre "quanto o ativo vale hoje".

## Prêmio não é um número só: são dois

O prêmio de uma call se decompõe em duas partes que se comportam de formas
completamente diferentes:

**Valor intrínseco**: o quanto a opção já valeria se fosse exercida agora
mesmo. É simplesmente máximo entre (preço do ativo menos strike) e zero. Não
depende de tempo, nem de volatilidade, só de onde o preço está agora em
relação ao strike.

**Valor tempo**: tudo o que sobra do prêmio além do valor intrínseco. É o
que o mercado cobra pela possibilidade de o ativo se mover a seu favor antes
do vencimento. Esse componente é maior quanto mais tempo falta e quanto
maior a volatilidade esperada, e ele **evapora todo dia**, de forma
acelerada nas últimas semanas antes do vencimento (o efeito conhecido como
*theta*).

<figure class="post-img">
  <img src="/images/call-valor-tempo.png" alt="Gráfico comparando o valor de uma call antes do vencimento (curva suave, com valor tempo) contra o valor no vencimento (linha quebrada, só valor intrínseco)" loading="lazy" />
</figure>

No gráfico acima, a linha pontilhada é o que a call vale exatamente no
vencimento (só o intrínseco, a mesma linha quebrada de antes). A curva
dourada é o que ela vale **hoje**, com 45 dias úteis ainda pela frente: por
mais que o ativo esteja abaixo do strike, a call ainda vale alguma coisa,
porque ainda há tempo pra virar. Essa área entre as duas linhas é o valor
tempo. Ela é máxima perto do strike (onde a incerteza sobre exercer ou não é
maior) e vai a zero nas pontas, tanto muito abaixo quanto muito acima do
strike, onde o resultado já está praticamente decidido.

## Por que isso importa na prática

Quem compra uma call comprando "porque acha que vai subir" está, sem saber,
fazendo duas apostas ao mesmo tempo: uma na direção do ativo, outra em quanto
tempo isso leva pra acontecer. Se acertar a direção mas o movimento demorar
mais do que o vencimento da opção, o valor tempo evapora antes do valor
intrínseco aparecer, e a call pode expirar sem valor mesmo com a tese
"certa".

É por isso que, na Sarisa, call comprada isolada quase nunca é o produto
final. Ela entra como componente dentro de uma estrutura (trava, collar,
acúmulo com meta de preço), onde o custo do valor tempo é medido contra um
objetivo específico e um horizonte definido, não contra uma esperança de
alta. O princípio é o mesmo da nossa [página de filosofia](/filosofia):
estrutura acima de narrativa. "Vai subir" não é uma estrutura. Strike,
vencimento e o que acontece se a tese estiver errada, isso é.

*Os números usados nos gráficos (strike R$ 100, prêmio R$ 5, volatilidade
implícita de 28% a.a., juro de 10,5% a.a., 45 dias úteis até o vencimento)
são ilustrativos, escolhidos só pra deixar a mecânica clara. Não são cotação
de nenhum ativo real nem recomendação.*
