---
title: "O que é uma put: o direito de vender, a obrigação de comprar"
description: "Put é o espelho da call, e confunde por um motivo diferente: comprar uma put é apostar na queda com risco limitado. Vender uma put é o oposto, ganho travado no prêmio, obrigação de comprar o ativo mesmo se ele desabar."
pubDate: 2026-08-14T08:30:00Z
categoria: "derivativos"
subtopico: "opcoes"
tags: ["opções", "put", "derivativos", "black-scholes", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Put é o espelho da call, mas a confusão que ela causa é de outro tipo. Todo
mundo entende rápido que "comprar call é apostar na alta". Poucos param pra
processar que **comprar uma put também é comprar, e o direito que você
adquire é o de vender**, não de comprar. É um trava-língua na cabeça de
quem está começando, e é exatamente aí que mora o conceito.

## A definição que importa

Uma put dá ao comprador o direito de **vender** um ativo por um preço fixo
(o strike, K) até uma data determinada (o vencimento), mediante o pagamento
de um prêmio à vista. Se o preço do ativo cair abaixo do strike, você exerce
o direito de vender pelo preço combinado, mais alto que o de mercado, e
lucra a diferença. Se o ativo subir, você simplesmente não exerce, e perde
só o prêmio pago.

Do outro lado do mesmo contrato está quem **vende** a put, o lançador. Ele
recebe o prêmio à vista, mas assume a **obrigação** de comprar o ativo pelo
strike se o comprador decidir exercer, mesmo que o preço de mercado tenha
despencado bem abaixo disso. Comprar put é ter o direito de vender caro
quando o mercado cai. Vender put é ter a obrigação de comprar caro quando o
mercado cai. A mesma frase, dois lados opostos.

## O payoff no vencimento

<figure class="post-img">
  <img src="/images/put-payoff.png" alt="Gráfico do payoff de uma put comprada (ganho grande se o ativo cai, perda limitada ao prêmio) e de uma put vendida (ganho limitado ao prêmio, perda grande se o ativo cai), mesmo strike e prêmio" loading="lazy" />
</figure>

No exemplo (strike de R$ 100, prêmio de R$ 5): quem **comprou** a put lucra
enquanto o ativo cai abaixo do breakeven (R$ 95, o strike menos o prêmio
pago), e o ganho cresce R$ 1 pra cada R$ 1 de queda adicional, até o limite
teórico de o ativo ir a zero. Se o ativo ficar acima de R$ 100, a perda do
comprador é travada nos R$ 5 pagos, não importa se subiu 2% ou 40%.

Quem **vendeu** a put vê o espelho exato. Acima de R$ 100, fica com o
prêmio inteiro (R$ 5), o melhor cenário possível pra esse lado. Abaixo de
R$ 100, é obrigado a comprar o ativo pelo strike mesmo que o preço de
mercado tenha caído bem mais, e a perda cresce sem limite teórico até o
ativo valer zero.

## Prêmio: os mesmos dois componentes, com uma pegadinha a mais

Assim como a call, o prêmio da put se decompõe em **valor intrínseco**
(máximo entre strike menos preço do ativo, e zero) e **valor extrínseco**
(o resto, que depende do tempo até o vencimento e da volatilidade esperada,
e evapora até lá).

<figure class="post-img">
  <img src="/images/put-valor-extrinseco.png" alt="Gráfico comparando o valor de uma put antes do vencimento (curva, com valor extrínseco) contra o valor no vencimento (linha, só valor intrínseco)" loading="lazy" />
</figure>

Só que aqui aparece uma sutileza que não existe na call: repare que, na
ponta esquerda do gráfico (put bem dentro do dinheiro, ativo bem abaixo do
strike), a curva do valor hoje fica **abaixo** da linha do valor intrínseco.
O valor extrínseco, ali, é negativo. Isso não é erro de conta, é um efeito
real de puts europeias quando o juro está alto: quem carrega uma put muito
no dinheiro tem direito a receber o strike em algum momento no futuro (via
exercício), mas prefere receber esse valor em caixa agora, e o juro alto
torna essa espera cara. O efeito é pequeno no exemplo (juro de 10,5% a.a.,
45 dias), mas cresce com Selic mais alta e vencimentos mais longos. Não é a
regra prática do dia a dia, mas é o tipo de detalhe que separa quem decorou
a fórmula de quem entende o que ela está dizendo.

## Por que isso importa na prática

Comprar put tem uma função clara e bem estabelecida: é seguro. Assim como
uma apólice, você paga um prêmio conhecido antecipadamente pra travar
proteção contra um cenário de queda, sem abrir mão do upside se o ativo
subir. É a lógica por trás do *protective put* e de metade de qualquer
collar.

Vender put é mais traiçoeira. Parece geração de renda fácil (você recebe o
prêmio à vista, e na maior parte do tempo o ativo não cai o suficiente pra
ser exercido), mas o risco real é ficar obrigado a comprar um ativo que
despencou, pelo preço de antes da queda. Na Sarisa, venda de put só entra
com caixa de verdade reservado pra honrar a compra se for exercida (nunca a
descoberto), e normalmente como parte de uma estrutura maior de acúmulo,
onde "ser exercido e comprar o ativo mais barato do que o preço de hoje" já
é um resultado aceitável da tese, não um acidente. O princípio, de novo, é o
da nossa [página de filosofia](/filosofia): a estrutura precisa sobreviver
ao cenário em que a tese está errada, não só ao cenário em que ela acerta.

*Os números usados nos gráficos (strike R$ 100, prêmio R$ 5, volatilidade
implícita de 28% a.a., juro de 10,5% a.a., 45 dias úteis até o vencimento)
são ilustrativos, os mesmos do post sobre a call, escolhidos só pra manter a
comparação direta. Não são cotação de nenhum ativo real nem recomendação.*
