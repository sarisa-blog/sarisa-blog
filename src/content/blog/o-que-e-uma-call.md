---
title: "O que é uma call: o direito de comprar, não a obrigação"
description: "Uma call dá o direito de comprar um ativo por um preço fixo até uma data. Mas todo direito tem uma contraparte: quem vende assume a obrigação oposta. Payoff, prêmio (intrínseco + extrínseco) e os dois lados do mesmo contrato."
pubDate: 2026-08-14T08:00:00Z
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

Mas repara: todo direito precisa de uma contraparte que assume a obrigação
oposta. Quem vende a call, o **lançador**, recebe o prêmio à vista agora, mas
em troca fica obrigado a vender o ativo pelo strike se o comprador decidir
exercer, não importa o quanto o preço tenha subido. Direito e obrigação são
as duas metades do mesmo contrato, nunca existe uma sem a outra.

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

## O outro lado do contrato: vender é obrigação, não direito

Tudo o que foi descrito até aqui vale pra quem **compra** a call. Quem
**vende** (lança) está do lado espelhado, e a diferença não é sutil: onde o
comprador tem direito, o vendedor tem obrigação, e onde o comprador tem risco
limitado, o vendedor tem risco (em teoria) ilimitado.

<figure class="post-img">
  <img src="/images/call-comprada-vendida.png" alt="Gráfico comparando o payoff de uma call comprada (ganho ilimitado, perda limitada ao prêmio) com o de uma call vendida (ganho limitado ao prêmio, perda ilimitada), mesmo strike e prêmio" loading="lazy" />
</figure>

O gráfico mostra os dois lados do mesmo contrato, com o mesmo strike e o
mesmo prêmio. O vendedor recebe R$ 5 à vista no momento em que lança a
opção. Se o ativo ficar abaixo de R$ 100 no vencimento, o comprador não
exerce, e o vendedor fica com o prêmio inteiro, esse é o melhor cenário
possível pra quem vendeu. Mas se o ativo subir bastante, o vendedor é
obrigado a entregar o ativo pelo strike, comprando-o no mercado (ou usando
um que já tinha) por um preço muito maior. O ganho do vendedor está travado
em R$ 5, não importa o quanto o ativo caia; a perda dele cresce junto com o
ativo, sem teto.

Essa é a razão pela qual vender call a descoberto (sem já ter o ativo em
carteira) é considerado uma das operações de maior risco em opções, e por
que, quando a Sarisa vende call, é quase sempre sobre um ativo que já está
em carteira (a chamada *covered call*), transformando a obrigação numa forma
de gerar renda sobre algo que você já ia segurar de qualquer forma, não numa
aposta contra alta ilimitada.

## Prêmio não é um número só: são dois

O prêmio de uma call se decompõe em duas partes que se comportam de formas
completamente diferentes:

**Valor intrínseco**: o quanto a opção já valeria se fosse exercida agora
mesmo. É simplesmente máximo entre (preço do ativo menos strike) e zero. Não
depende de tempo, nem de volatilidade, só de onde o preço está agora em
relação ao strike.

**Valor extrínseco** (o apelido comum no mercado é "valor tempo", mas o termo
tecnicamente correto é esse): tudo o que sobra do prêmio além do valor
intrínseco. É o que o mercado cobra pela possibilidade de o ativo se mover a
seu favor antes do vencimento. Esse componente é maior quanto mais tempo
falta e quanto maior a volatilidade esperada, isto é, depende dos dois, não
só do tempo, e ele **evapora até o vencimento**, de forma acelerada nas
últimas semanas (o efeito conhecido como *theta*). Chamar esse componente só
de "valor tempo" pega metade da história, já que volatilidade também entra
na conta.

<figure class="post-img">
  <img src="/images/call-valor-tempo.png" alt="Gráfico comparando o valor de uma call antes do vencimento (curva suave, com valor extrínseco) contra o valor no vencimento (linha quebrada, só valor intrínseco)" loading="lazy" />
</figure>

No gráfico acima, a linha pontilhada é o que a call vale exatamente no
vencimento (só o intrínseco, a mesma linha quebrada de antes). A curva
dourada é o que ela vale **hoje**, com 45 dias úteis ainda pela frente: por
mais que o ativo esteja abaixo do strike, a call ainda vale alguma coisa,
porque ainda há tempo pra virar. Essa área entre as duas linhas é o valor
extrínseco (o "valor tempo" de que falamos acima). Ela é máxima perto do strike (onde a incerteza sobre exercer ou não é
maior) e vai a zero nas pontas, tanto muito abaixo quanto muito acima do
strike, onde o resultado já está praticamente decidido.

## Por que isso importa na prática

Quem compra uma call comprando "porque acha que vai subir" está, sem saber,
fazendo duas apostas ao mesmo tempo: uma na direção do ativo, outra em quanto
tempo isso leva pra acontecer. Se acertar a direção mas o movimento demorar
mais do que o vencimento da opção, o valor extrínseco evapora antes do valor
intrínseco aparecer, e a call pode expirar sem valor mesmo com a tese
"certa".

É por isso que, na Sarisa, call comprada isolada quase nunca é o produto
final. Ela entra como componente dentro de uma estrutura (trava, collar,
acúmulo com meta de preço), onde o custo do valor extrínseco é medido contra um
objetivo específico e um horizonte definido, não contra uma esperança de
alta. O princípio é o mesmo da nossa [página de filosofia](/filosofia):
estrutura acima de narrativa. "Vai subir" não é uma estrutura. Strike,
vencimento e o que acontece se a tese estiver errada, isso é.

*Os números usados nos gráficos (strike R$ 100, prêmio R$ 5, volatilidade
implícita de 28% a.a., juro de 10,5% a.a., 45 dias úteis até o vencimento)
são ilustrativos, escolhidos só pra deixar a mecânica clara. Não são cotação
de nenhum ativo real nem recomendação.*
