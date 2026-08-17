---
title: "ITUB4 e o lema de Itô: uma tese que fecha no modelo e esbarra na liquidez zero"
description: "Depois de descartar gamma, vanna e charm como causa da queda dos bancos em agosto de 2026, testamos uma tese diferente com dado real do mercado de opções do Itaú: usar o lema de Itô pra separar fluxo de fundamento. A estrutura a termo confirma. A liquidez, quase nunca."
pubDate: 2026-08-14T15:00:00Z
categoria: "derivativos"
subtopico: "gregas-casos-reais"
tags: ["ito", "convexidade", "itub4", "estrutura-a-termo", "liquidez", "black-scholes", "gregas", "case-real", "derivativos"]
contemDadosIlustrativos: true
draft: false
---

Os três casos anteriores desta série ([Volmageddon](/blog/volmageddon-2018),
[GameStop](/blog/gamestop-gamma-squeeze) e
[vanna/charm em 0DTE](/blog/vanna-charm-0dte)) são sobre mecânica de opção
mexendo com preço. Este caso começa como uma pergunta oposta: **a queda dos
bancos brasileiros em agosto de 2026 teve mecânica de opção por trás, ou foi
só fluxo saindo?** A resposta abriu uma tese própria, baseada em cálculo
estocástico, testada com dado real do book de opções do Itaú (ITUB4). A
tese fecha bonita no modelo. Ela esbarra numa coisa que nenhum modelo mostra
sozinho: se existe alguém do outro lado disposto a negociar.

## O gatilho não veio do mercado de opções

Entre 4 e 11 de agosto de 2026, saíram **R$ 11,93 bilhões** em capital
estrangeiro da bolsa brasileira, com **R$ 4,7 bilhões** só no pregão de 11
de agosto, o maior saque num único dia desde abril de 2021. O Ibovespa caiu
2,5% nesse pregão, puxado pelos bancos, com o Itaú entre os mais afetados.

A suspeita óbvia, depois dos três casos anteriores desta série, era
mecânica de hedge: gamma, vanna ou charm amplificando o movimento, como
formadores de mercado sendo forçados a vender ação pra ajustar posição
vendida em opção. Os fatos não sustentam essa leitura. O vencimento mensal
de opção sobre índice (BM&F, estilo europeu) caiu em 19 de agosto. O
vencimento de opções sobre ações (Bovespa, estilo americano, ver
[diferença entre os dois](/blog/opcoes-americanas-e-europeias)) caiu em 21
de agosto. Os dois **depois** da queda, não antes ou durante, o que já
enfraquece qualquer leitura de rebalanceamento de vencimento causando o
movimento. E o VIX global, termômetro do medo internacional, estava parado
em 14,63 no dia 13 de agosto, um nível baixo que não indica nenhum choque
de volatilidade global se propagando pra cá via vanna. A conclusão simples:
isso foi fluxo saindo por decisão de alocação, não opção empurrando preço.

## Se foi só fluxo, o que o lema de Itô sugere

Aqui a pergunta muda de lugar. Se a queda não teve componente mecânico de
opção, ela também não precisa ter sido uma repreciação genuína do
fundamento do banco. Pode ter sido, mas o ponto de partida muda: como
testar isso com rigor, em vez de só opinar?

O [lema de Itô](https://pt.wikipedia.org/wiki/Lema_de_It%C3%B4) é o
resultado de cálculo estocástico que descreve como o valor de uma função
de uma variável aleatória (o preço de uma opção, função do preço do ativo)
evolui ao longo do tempo. Na forma escalar simplificada:

<figure class="post-img">
  <img src="/images/formula-ito.jpg" alt="Fórmula do lema de Itô na forma escalar: df igual a derivada parcial de f em relação a t, vezes dt, mais f linha vezes dX, mais meio f duas linhas vezes dX ao quadrado" loading="lazy" />
</figure>

O termo que separa isso do cálculo comum é o último: meio f'' vezes
(dX)². Ele existe porque, quando X segue um processo estocástico (um
movimento browniano com deriva, no caso mais simples), (dX)² não vai a
zero tão rápido quanto num cálculo determinístico. Sobra um termo de
segunda ordem, proporcional à variância, que precisa entrar na conta.

Fluxo saindo por realocação de portfólio, sem notícia nova sobre o
fundamento do banco, não é, no sentido técnico, uma mudança no processo
estocástico do ativo (na deriva μ ou na volatilidade σ que descrevem X).
É ruído de curto prazo dentro do mesmo processo. Se essa leitura estiver
certa, um instrumento com pouca sensibilidade de segunda ordem a esse
ruído (gamma baixo) deveria refletir menos o pânico e mais o valuation de
longo prazo do ativo. Isso é tese. O resto deste texto testa ela com dado
real e depois testa se dá pra operar.

## A intuição: por que a curva importa mais que o ponto médio

Antes dos números, vale entender por que esse termo de segunda ordem
importa na prática, não só na fórmula. A ideia central é a desigualdade de
Jensen: quando uma variável aleatória passa por uma função **convexa**
(o caso do payoff de uma opção), a média da saída não é igual à função
aplicada na média da entrada. Ela é maior.

<figure class="post-img">
  <img src="/images/convexidade-jensen.jpg" alt="Gráfico mostrando uma curva convexa dourada, com a distribuição de entrada simétrica na base e a distribuição de saída assimétrica à direita, e o gap entre E[f(X)] e f(E[X]) marcado como efeito de segunda ordem" loading="lazy" />
</figure>

Repare no gráfico: a distribuição de entrada (embaixo, simétrica) passa
pela curva convexa e sai como a distribuição da direita, deslocada pra
cima e com cauda mais gorda de um lado. A diferença entre **f(E[X])**
(o valor da função no ponto médio de entrada) e **E[f(X)]** (a média dos
valores de saída) é exatamente o termo que o lema de Itô adiciona. É por
isso que volatilidade tem valor próprio, mesmo sem nenhuma direção
definida: quanto maior a curvatura (gamma) e quanto maior a variância, maior
esse gap.

Gamma mede exatamente essa curvatura. [Já mostramos aqui](/blog/gamma)
que gamma é maior perto do dinheiro e perto do vencimento. Em vencimentos
muito longos, a curva de payoff (olhando pro presente, com todo aquele
tempo pela frente) é bem mais achatada: gamma baixo, efeito de segunda
ordem pequeno, valor mais dominado pela deriva de longo prazo do que pelo
ruído. Essa é a lógica por trás da tese: se dá pra achar um vencimento
longo o suficiente, ele deveria "ignorar" boa parte do susto recente.

## O que a estrutura a termo do Itaú realmente mostra

Fomos direto no mercado de opções do ITUB4 checar. Levantamento feito em
13 e 14 de agosto de 2026, via opcoes.net.br e opcoes.oplab.com.br, com
o papel cotado a R$ 38,31.

<figure class="post-img">
  <img src="/images/case-itub4-estrutura-termo.png" alt="Gráfico da estrutura a termo da volatilidade implícita do ITUB4, mostrando o ponto de 24 dias úteis com negociação real entre 21,6% e 26%, e os pontos de 43 a 505 dias úteis, todos teóricos sem liquidez, descendo até 17-20%" loading="lazy" />
</figure>

- **21,6% a 26%**: vol. das opções ATM que vencem em 18 de setembro
  (24 dias úteis, série mais próxima do dinheiro).
- **21,06%**: vol. do vencimento de 43 dias úteis (ITUBJ383, call ATM).
- **17% a 20%**: vol. teórica dos vencimentos de 460 a 505 dias úteis
  (agosto de 2028), incluindo ITUBF393 (strike R$ 39,09, teórico R$ 8,81,
  delta 0,87), ITUBH3 (strike R$ 44, teórico R$ 6,72, delta 0,75) e mais
  quatro séries na mesma faixa.

À primeira vista, isso confirma a tese: a ponta curta carrega um prêmio de
vol quase 30% maior que a ponta longa, exatamente o padrão que "pânico
temporário, fundamento intacto" preveria. Só que existe uma ressalva que
quase passou batido na nossa própria análise inicial: **desses três
pontos, só o de 24 dias teve qualquer negociação real** (2 de 163
contratos, segundo a varredura completa da próxima seção). O de 43 dias e
todos os de 460+ dias são valores que o modelo do provedor de dados
devolve a partir de Black-Scholes, sem nenhum contrato efetivamente
negociado por trás pra confirmar. "O modelo aponta essa estrutura" e "o
mercado confirma essa estrutura" são frases diferentes, e a diferença é o
resto deste texto.

## Onde a tese esbarra: liquidez zero

Pra ter certeza, varremos as **1.350 séries** de opção do ITUB4 listadas,
agrupadas por prazo até o vencimento, e contamos quantas tinham qualquer
sinal de negociação real (nível de liquidez maior que zero no dado da
OpLab, que reflete book de ofertas e negócios recentes).

<figure class="post-img">
  <img src="/images/case-itub4-liquidez.png" alt="Gráfico de barras mostrando o total de contratos de opção do ITUB4 por faixa de vencimento, com apenas 2 de 409 contratos até 24 dias úteis tendo liquidez real, e zero liquidez em todas as outras quatro faixas, incluindo a que cobre a eleição de outubro e a de vencimentos de 2027-2028" loading="lazy" />
</figure>

O resultado é mais extremo do que qualquer um dos números individuais
sugere isoladamente. Fora do vencimento de 24 dias úteis, **nenhuma das
outras 941 séries testadas tinha um único contrato com liquidez
registrada**, incluindo as 186 séries que cobrem os 25 a 57 dias úteis
(a janela que inclui a própria eleição de outubro) e as 96 séries de
256 a 505 dias úteis (a ponta longa que sustenta a tese inteira).

Isso não é falta de sorte, é estrutural. A B3 mantém um programa de
formador de mercado com séries obrigatórias: para ações comuns, a
exigência cobre **4 séries de call americana, 3 de put europeia, mais uma
call e uma put extras**, e essa obrigação rola apenas nos **dois
vencimentos autorizados seguintes**, cessando para o vencimento mais
próximo a partir do quinto dia útil antes dele. Ou seja, o próprio desenho
do programa de liquidez da bolsa concentra a obrigação de cotação nos
vencimentos de curtíssimo prazo. Ninguém é formalmente obrigado a cotar
uma série de 460 dias, e na prática, ninguém cota mesmo.

## Dá pra forçar essa liquidez a existir?

Essa foi a pergunta seguinte, e a resposta tem nuance. Em tese, colocar
uma oferta de compra acima do preço teórico numa série parada pode atrair
um participante disposto a vender naquele nível, mesmo sem obrigação
formal de formador de mercado. Isso acontece de fato em mercados mais
desenvolvidos: a CBOE, nos Estados Unidos, tem um mecanismo chamado AIM
(Automated Improvement Mechanism), um minileilão de 3 a 5 segundos
ativado quando uma ordem busca melhoria de preço numa série de baixa
liquidez, obrigando participantes a responder dentro desse intervalo.
Não achamos, na documentação pública da B3, nenhum mecanismo equivalente
pra opções sobre ações. Isso não prova que não exista, mas é um sinal de
que a estrutura de mercado brasileira está um passo atrás nesse ponto
específico.

Existem dois precedentes reais de investidores criando mercado onde ele
não existia, embora nenhum dos dois seja idêntico ao nosso caso:

**Warren Buffett**, entre 2004 e 2008, vendeu (não comprou) US$ 4,8
bilhões em prêmio de puts sobre quatro índices de ações (S&P 500, FTSE
100, Euro Stoxx 50 e Nikkei 225), com vencimentos entre 2019 e 2028, ou
seja, 15 a 20 anos à frente. Não existia, nem existe hoje, um mercado de
bolsa líquido pra opção de índice com esse prazo. Buffett resolveu isso
negociando diretamente com bancos, no mercado de balcão, não forçando uma
oferta numa bolsa. É o caminho que investidores institucionais grandes
usam quando o exchange não tem profundidade: negociar bilateralmente, não
tentar convencer um formador de mercado anônimo a aparecer.

**Universa Investments**, a gestora de "risco de cauda" ligada a Nassim
Taleb, compra rotineiramente puts profundamente fora do dinheiro (cerca de
60% OTM) com prazo de aproximadamente dois anos, exatamente o tipo de
série rala que discutimos aqui. Em março de 2020, a alocação de cauda do
fundo retornou 3.612% no mês. A estratégia funciona porque a gestora está
disposta a pagar um preço que parece caro demais na maior parte do tempo
(a mesma objeção que fizemos ao ITUB4 longo) em troca de manter uma
posição que capture uma janela de estresse específica, o que ela vem
fazendo desde 2008.

Nenhum dos dois casos documenta o que aconteceria especificamente com uma
call longa de ITUB4 forçada acima do teórico numa série parada da B3.
Não encontramos esse caso específico publicado em lugar nenhum, e não
vamos inventar um. O que os dois casos mostram é o princípio geral: forçar
uma posição ilíquida a existir é possível, tem precedente institucional
real, e o preço que resulta disso deixa de ser "o que o mercado acha" e
passa a ser "o que custa a sua própria convicção".

## Um exercício: o que teria acontecido

A pergunta mais interessante que ficou em aberto: mesmo pagando esse
prêmio de convicção, será que uma posição comprada longa em papel de
fundamento forte e ação líquida (mesmo que a opção não seja) se pagaria
num horizonte maior? Não existe uma base de dados pública de "quem pagou
acima do teórico numa opção ilíquida da B3 e quanto ganhou depois", então
construímos um exercício ilustrativo com o dado real que existe: o
próprio preço do ITUB4 ao longo do tempo.

A ação saiu de cerca de R$ 37 em janeiro de 2020 (pico pré-pandemia) para
um valor de mercado de R$ 195,9 bilhões em 23 de março de 2020, o fundo do
pânico inicial da Covid-19. Em outubro de 2020, ainda cotava a R$ 22,91,
38% abaixo do pico. Em fevereiro de 2021, treze meses depois do pico,
R$ 28, ainda 24% abaixo. Hoje, agosto de 2026, mais de seis anos depois,
R$ 38,31, cerca de 4% acima daquele pico pré-covid. O fundamento do banco
nunca deixou de ser sólido nesse intervalo todo (o post sobre o
[ciclo de crédito do Itaú](/blog/itau-panico-bancario-ciclo-credito) mostra
o mesmo padrão de indicador antecedente limpo em outro momento de pânico),
e a ação sempre foi uma das mais líquidas da bolsa. Mesmo assim, o preço
levou mais de seis anos pra superar de forma sustentada o pico anterior.

Agora aplicamos isso a uma call hipotética de strike R$ 37 e vencimento em
2 anos, comprada no pico de janeiro de 2020, com parâmetros ilustrativos
de precificação (vol. 32% a.a., juro 4,25% a.a., dividendo 3% a.a.,
todos aproximados ao contexto da época, não observados diretamente):

| Data | Preço do ativo | Prazo restante | Valor da call | P&L |
|---|---|---|---|---|
| jan/2020 (compra) | R$ 37,00 | 2,00 anos | R$ 6,60 | (prêmio pago) |
| out/2020 | R$ 22,91 | 1,42 anos | R$ 0,57 | -91% |
| fev/2021 | R$ 28,00 | 0,92 anos | R$ 1,00 | -85% |

Repare no que acontece se o vencimento fosse mesmo de 2 anos, encerrando
em janeiro de 2022: pra essa call valer alguma coisa no vencimento, o
papel precisaria ter voltado a superar R$ 37 até lá. Não achamos fonte
confiável o suficiente pra cravar o preço exato de janeiro de 2022 aqui,
mas o papel só recuperou o patamar pré-covid de forma consistente bem
depois disso. É bem possível, olhando a trajetória real, que essa call
específica tivesse expirado zerada, mesmo com o banco hoje valendo mais do
que valia no pico de 2020.

Essa é a parte que qualquer discussão sobre "forçar liquidez pra pegar a
ponta longa" precisa levar a sério. O ativo pode, de fato, se recuperar e
até superar o valuation anterior. O problema é que a call tem prazo
definido, e "eventualmente" não é um horizonte de opção. Quem paga um
prêmio de convicção pra forçar uma posição longa numa série ilíquida está
apostando não só na direção certa, mas também em ter escolhido um prazo
comprido o bastante pra sobreviver ao tempo real que a recuperação leva,
que historicamente costuma ser maior do que parece antes do fato.

## A leitura que fica

A [modelagem de Black-Scholes](/blog/modelo-black-scholes) sempre devolve
um número. Strike, prazo, vol e taxa entram, o modelo calcula um preço,
mesmo que ninguém do outro lado esteja disposto a negociar naquele preço.

<figure class="post-img">
  <img src="/images/formula-black-scholes.jpg" alt="Fórmula de Black-Scholes para uma call: C igual a S0 vezes N(d1) menos K vezes e elevado a menos rT vezes N(d2), com as fórmulas de d1 e d2 abaixo" loading="lazy" />
</figure>

A tese que este texto testou é internamente consistente: o lema de Itô
sugere que fluxo sem repreciação de fundamento deveria pesar menos na
ponta longa, baixo gama, baixo theta, e a estrutura a termo do ITUB4, na
medida em que existe dado pra ler, é compatível com essa leitura. O
catalisador da eleição de outubro (Polymarket favorecendo o presidente
Lula com 61% a 63% em cotações de agosto, mas pesquisas de segundo turno
como PoderData e BTG/Nexus mostrando empate técnico com o senador Flávio
Bolsonaro, dentro da margem de erro) até oferece uma explicação plausível
pro prêmio concentrado no curto e médio prazo.

Só que quase toda essa estrutura, fora um único vencimento com liquidez
finíssima, é modelo, não mercado. E o exercício da seção anterior mostra
que, mesmo quando a tese direcional está certa no longo prazo, o prazo
específico da opção que você escolhe (ou consegue forçar a existir) pode
não sobreviver até lá.

Este texto não é recomendação de compra ou venda de ITUB4 ou de qualquer
opção sobre o papel. É um exercício de rigor sobre a diferença entre uma
tese que fecha matematicamente e uma tese que fecha na prática, e sobre o
hábito que fica depois de qualquer análise assim: antes de tratar uma
queda como sinal, separar fluxo de fundamento. Antes de tratar um preço
teórico como oportunidade, checar se existe alguém do outro lado disposto
a negociar, a que preço, e se o prazo que você está comprando é
realmente comprido o suficiente pro que você está apostando.

*O exercício da seção "o que teria acontecido" usa parâmetros de
precificação ilustrativos (vol. 32% a.a., juro 4,25% a.a., dividendo 3%
a.a.) aplicados sobre o preço real do ITUB4 em datas históricas. Não é
reconstrução do preço real de nenhuma opção negociada naquele período.*
