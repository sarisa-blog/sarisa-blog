---
title: "Volatilidade histórica x volatilidade implícita: passado e expectativa"
description: "Uma olha pra trás e mede o que já aconteceu. A outra está embutida no preço da opção agora e mede o que o mercado espera que aconteça. Confundir as duas é o erro mais comum de quem começa a precificar opção."
pubDate: 2026-08-14T10:30:00Z
categoria: "derivativos"
subtopico: "precificacao"
tags: ["volatilidade", "iv", "hv", "opções", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

Volatilidade aparece em toda conversa sobre opções, mas existem duas
volatilidades diferentes escondidas atrás da mesma palavra, e elas
respondem perguntas opostas. Uma olha pra trás. A outra olha pra frente.
Confundir as duas leva a decisão errada com uma frequência incômoda.

## Volatilidade histórica

É uma medida estatística, calculada a partir dos retornos que o ativo já
teve num período passado (os últimos 21, 30 ou 60 pregões, por exemplo).
Ela responde: "o quanto esse ativo balançou, de fato, recentemente?". É
um número que olha exclusivamente pra trás, e não sabe nada sobre o que
vai acontecer amanhã, muito menos sobre um evento específico que ainda
não ocorreu.

## Volatilidade implícita

É o número que, quando você coloca no modelo de
[Black-Scholes](/blog/modelo-black-scholes) junto com os outros quatro
inputs, reproduz exatamente o preço que a opção está sendo negociada no
mercado agora. Em vez de calculada a partir do histórico, ela é
**derivada do preço**, invertendo a fórmula. Por isso ela é forward-looking:
reflete o quanto o mercado, coletivamente, está precificando de incerteza
futura, incluindo eventos específicos que ainda vão acontecer.

## As duas nunca coincidem por acaso

<figure class="post-img">
  <img src="/images/vol-historica-implicita.png" alt="Gráfico mostrando volatilidade histórica e implícita ao redor de um evento: a implícita sobe antes do evento e cai bruscamente depois (IV crush), a histórica reage com atraso" loading="lazy" />
</figure>

O gráfico ilustra o padrão clássico ao redor de um evento conhecido com
antecedência, tipo divulgação de resultado trimestral. A vol implícita
começa a subir dias antes, o mercado precificando a incerteza que ainda
vai se resolver, mesmo sem o preço do ativo ter se mexido muito ainda. A
vol histórica, por só olhar pra trás, permanece parada até o evento
efetivamente mexer o preço. Depois do evento, a incerteza se resolve
(bom ou ruim, mas resolvida) e a IV desmonta rápido, o efeito chamado de
**IV crush**, muitas vezes caindo abaixo até do nível anterior ao evento.
A HV, em compensação, só sobe depois, quando o movimento de preço real
finalmente entra na janela de cálculo.

## Por que isso importa pra quem monta estrutura

Comprar opção quando a IV está inflada por um evento próximo significa
pagar caro por um prêmio que tende a evaporar rápido assim que o evento
passa, mesmo que a direção da tese esteja certa (isso é literalmente o
"IV crush" batendo contra quem comprou opção só pra especular no evento
em si). Vender opção nesse mesmo momento captura esse prêmio inflado, mas
carrega o risco cheio do resultado do evento até ele sair.

A pergunta prática, antes de montar qualquer estrutura: a IV atual está
alta porque o mercado está genuinamente mais incerto sobre o futuro, ou
porque tem um evento específico e temporário no meio do caminho? A
resposta muda completamente se faz sentido pagar aquele prêmio ou vender
ele. O próximo post desta série, sobre
[IV Rank e IV Percentil](/blog/categoria/derivativos), dá uma régua
objetiva pra responder "a vol está alta comparado a quê", em vez de
comparar só de olho.

*O gráfico usa uma série ilustrativa/sintética construída só pra mostrar
o padrão típico ao redor de um evento. Não são dados reais de nenhum
ativo específico.*
