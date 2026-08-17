---
title: "Charm: o delta que muda sozinho, mesmo sem o ativo se mexer"
description: "Charm é a grega de segunda ordem menos citada e mais subestimada: mede quanto o delta de uma posição muda de um dia pro outro só pela passagem do tempo, forçando ajuste de hedge que ninguém decidiu fazer."
pubDate: 2026-08-14T12:30:00Z
categoria: "derivativos"
subtopico: "gregas"
tags: ["charm", "gregas", "opções", "hedge", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

[Delta](/blog/delta) muda quando o ativo se move. Isso é gamma, já coberto
nesta série. Mas o delta também muda sozinho, mesmo com o ativo
absolutamente parado, só porque um dia a menos ficou até o vencimento.
Essa segunda fonte de mudança do delta tem nome: **charm**, também
chamado às vezes de "delta decay".

## Como a curva se comporta

<figure class="post-img">
  <img src="/images/grega-charm.png" alt="Gráfico do charm de uma call em função do preço do ativo, mostrando valores negativos abaixo do strike e positivos acima" loading="lazy" />
</figure>

Pra uma call, o padrão típico é: charm negativo abaixo do strike, charm
positivo acima do strike. A leitura é direta. Numa call fora do dinheiro
(ativo abaixo do strike), o delta tende a **cair** conforme o tempo passa
sem o ativo se mover, porque a cada dia que passa sem o ativo reagir fica
mais provável que a opção termine sem valor, então o mercado atribui
menos "chance de virar ITM" a ela. Numa call dentro do dinheiro, o
oposto: o delta tende a **subir** em direção a 1 conforme o tempo passa,
porque fica mais certo que ela vai ser exercida.

## Por que isso importa pra quem faz hedge

Uma mesa que mantém posição delta-neutra precisa reajustar o hedge todo
dia, mesmo em dias de ativo completamente parado, só por causa do charm.
Isso é frequentemente esquecido por quem aprende só delta e gamma: dá pra
montar uma posição perfeitamente neutra hoje à noite e acordar amanhã de
manhã, com o ativo no mesmo preço exato, já fora de neutro, só porque um
dia passou. O ajuste de hedge motivado por charm costuma ser mais
previsível que o motivado por gamma (não depende de o ativo se mexer,
só do calendário), o que permite, até certo ponto, antecipar esse
rebalanceamento.

## Charm no mercado real

Charm ganhou atenção fora dos livros-texto nos últimos anos porque
mesas grandes com posições vendidas em opções (formadores de mercado,
principalmente) precisam ajustar hedge por causa dele de forma
sistemática, gerando fluxo de compra ou venda no ativo subjacente que não
tem nada a ver com notícia ou fundamento, só com o calendário de
vencimento das opções em aberto. Combinado com vanna (o assunto do
próximo post desta série), esse fluxo mecânico é hoje discutido como um
dos fatores que amplificam certos movimentos de mercado perto de datas de
vencimento de opções, especialmente em índices com grande volume de
opções em aberto.

*O gráfico usa parâmetros ilustrativos (K=100, 45 dias úteis, juro 10,5%
a.a., vol. implícita 28% a.a.). Não é cotação de nenhum ativo real.*
