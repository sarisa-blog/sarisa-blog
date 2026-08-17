---
title: "Gamma: a aceleração do delta, e por que ela assusta perto do vencimento"
description: "Gamma mede quanto o delta muda sozinho. É pequena a maior parte do tempo e explosiva perto do vencimento, exatamente perto do strike, o que torna vender opção perto do vencimento uma aposta bem diferente de vender opção longa."
pubDate: 2026-08-14T11:30:00Z
categoria: "derivativos"
subtopico: "gregas"
tags: ["gamma", "gregas", "opções", "convexidade", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Se [delta](/blog/delta) mede a velocidade da opção em relação ao ativo,
gamma mede a **aceleração**: o quanto o delta muda pra cada R$ 1 de
movimento no ativo. É a mesma relação que existe entre velocidade e
aceleração no movimento de qualquer objeto, só que aplicada ao preço da
opção.

## Onde gamma é alta, e onde não é

<figure class="post-img">
  <img src="/images/grega-gamma.png" alt="Gráfico do gamma de uma opção em função do preço do ativo, para dois prazos diferentes, mostrando que o gamma é maior perto do strike e mais concentrado perto do vencimento" loading="lazy" />
</figure>

Gamma é sempre positiva, tanto pra call quanto pra put compradas (o delta
sempre se move na mesma direção favorável ao comprador da opção conforme
o ativo se move a favor dele), e ela é máxima perto do strike, exatamente
onde a incerteza sobre a opção terminar ITM ou OTM é maior. Longe do
strike, dos dois lados, gamma cai perto de zero: uma opção muito ITM ou
muito OTM já tem delta praticamente definido (perto de 1, -1 ou 0), então
não tem muito mais o que acelerar.

O detalhe mais importante do gráfico: **quanto mais perto do vencimento,
mais alta e mais concentrada fica a gamma perto do strike**. Uma opção com
10 dias de vida tem um pico de gamma bem mais alto e mais estreito do que
a mesma opção com 45 dias. Isso faz sentido: perto do vencimento, uma
pequena mudança no ativo pode ser a diferença entre a opção terminar ITM
ou OTM, então o delta reage com muito mais violência a qualquer
movimento.

## Por que isso assusta quem vende opção

Vender opção perto do strike e perto do vencimento é operar com gamma
alta, o que significa que a exposição direcional da posição (o delta)
pode mudar bruscamente com um movimento pequeno do ativo. Quem vende call
descoberta perto do vencimento e vê o ativo se aproximar do strike sente
isso na pele: o delta da posição vendida cresce rápido, forçando ajuste
de hedge constante e caro, exatamente no momento de maior estresse.

Esse é o mecanismo por trás do que o mercado chama de "gamma risk" ou
"gamma squeeze": quando muitos participantes estão vendidos em opções
perto do strike perto do vencimento, o ajuste de hedge coletivo (comprando
ou vendendo o ativo pra recompor o delta) pode amplificar o próprio
movimento do ativo, criando um ciclo de realimentação.

## Gamma e convexidade

Gamma positiva é, matematicamente, a mesma coisa que convexidade positiva.
Comprar opção é comprar gamma: você ganha mais na aceleração a favor do
que perde na aceleração contra, porque o delta se ajusta a seu favor
conforme o ativo se move (sobe mais rápido quando o ativo sobe, cai mais
devagar quando o ativo cai). É por isso que o princípio de
[convexidade e assimetria](/filosofia) que guia a forma como a Sarisa
desenha estrutura vem, na prática, de gamma positiva: perder pouco quando
erra, ganhar mais que proporcional quando acerta, é gamma trabalhando a
seu favor.

*O gráfico usa parâmetros ilustrativos (K=100, juro 10,5% a.a., vol.
implícita 28% a.a., comparando 45 e 10 dias úteis até o vencimento). Não é
cotação de nenhum ativo real.*
