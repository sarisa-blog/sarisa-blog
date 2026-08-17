---
title: "O modelo de Black-Scholes: o que ele calcula, e o que ele assume"
description: "Black-Scholes não descobre o preço certo de uma opção. Ele calcula o preço consistente com cinco números que você fornece. Errar um input errado a resposta inteira, e um deles nem é observável no mercado."
pubDate: 2026-08-14T10:00:00Z
categoria: "derivativos"
subtopico: "precificacao"
tags: ["black-scholes", "opções", "derivativos", "precificação", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Black-Scholes é tratado como uma caixa preta que "dá o preço certo" da
opção. Não é isso. O modelo pega cinco números que você fornece e devolve
o único preço matematicamente consistente com eles, sob um conjunto de
premissas específicas. Se um desses números estiver errado, ou se as
premissas não valerem pro seu caso, o preço que sai também está errado,
mesmo que a conta esteja perfeita.

## Os cinco inputs

**Preço do ativo (S)** e **strike (K)**: os dois números mais óbvios,
definem o quanto a opção está dentro ou fora do dinheiro.

**Tempo até o vencimento (T)**: quanto mais tempo, mais valor extrínseco,
como já vimos nos posts sobre [call](/blog/o-que-e-uma-call) e
[put](/blog/o-que-e-uma-put).

**Juro livre de risco (r)**: no Brasil, referenciado à Selic. Afeta o
custo de carregar a posição equivalente no ativo, e pesa mais em opções
mais longas ou strikes mais distantes.

**Volatilidade (σ)**: o único dos cinco que não é observável diretamente.
Todos os outros quatro você lê direto de uma tela. Volatilidade você tem
que estimar, e é aqui que mora praticamente toda a divergência entre
"quanto a opção deveria valer" segundo pessoas diferentes.

<figure class="post-img">
  <img src="/images/black-scholes.png" alt="Gráfico mostrando o preço teórico de uma call pelo modelo de Black-Scholes em duas volatilidades diferentes, mesma call, mesmo strike, mesmo prazo" loading="lazy" />
</figure>

O gráfico mostra a mesma call, mesmo strike, mesmo prazo, rodada com dois
valores de volatilidade diferentes. O preço muda de forma relevante em
toda a curva, não só perto do strike. Isso não é uma falha do modelo, é o
ponto central dele: Black-Scholes não "sabe" quanto o ativo vai balançar,
ele só devolve o preço consistente com o quanto **você disse** que ele vai
balançar.

## As premissas que o modelo carrega escondidas

A fórmula original assume: retornos do ativo seguem uma distribuição
log-normal, a volatilidade é constante durante toda a vida da opção, não
existe custo de transação, é possível negociar continuamente em qualquer
quantidade, e a taxa de juro é constante e conhecida. Nenhuma dessas
premissas é exatamente verdadeira no mundo real. A volatilidade muda o
tempo todo (é literalmente o assunto do próximo post desta série), existe
spread e corretagem, e liquidez não é infinita, principalmente em opções
brasileiras fora dos nomes mais líquidos.

Isso não invalida o modelo. Ele continua sendo a referência universal do
mercado justamente porque é simples, transparente e todo mundo usa a mesma
base, o que permite comparar preços de forma consistente. O erro é tratar
o número que sai dele como uma verdade objetiva, em vez de uma conclusão
que só vale enquanto os inputs valerem.

## Por que a Sarisa insiste em rodar com juro e dividendo reais

É comum ver estrutura de opções precificada com juro genérico ou
desatualizado, especialmente em conteúdo educacional. A Selic muda, o
prêmio de risco muda, e um mesmo strike pode ficar 5% a 10% mais caro ou
mais barato só por causa de um input desatualizado, sem que o ativo tenha
se mexido nada. Antes de cravar o custo de qualquer estrutura, a regra
aqui é simples: rodar o modelo com a Selic do dia e o dividendo esperado
reais, não com um número "aproximado o suficiente". Aproximado o
suficiente, quando o resultado vira decisão de dinheiro real, não é
suficiente.

*O gráfico usa parâmetros ilustrativos (K=100, 45 dias úteis, juro 10,5%
a.a., vols de 18% e 45% a.a.) só pra deixar visível o efeito da
volatilidade. Não é cotação de nenhum ativo real.*
