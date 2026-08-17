---
title: "Vanna: quando a volatilidade muda, o delta muda junto"
description: "Vanna mede a ligação escondida entre volatilidade e direção: quanto o delta de uma posição muda quando a volatilidade implícita se move, mesmo com o ativo parado. É a grega por trás de boa parte do fluxo mecânico do mercado de opções."
pubDate: 2026-08-14T12:15:00Z
categoria: "derivativos"
subtopico: "gregas"
tags: ["vanna", "gregas", "opções", "volatilidade", "derivativos", "educacional"]
contemDadosIlustrativos: true
draft: false
---

As gregas anteriores desta série trataram cada sensibilidade de forma
isolada: delta pro ativo, vega pra volatilidade, theta pro tempo. Mas
essas sensibilidades interagem entre si. **Vanna** mede uma dessas
interações: o quanto o delta muda quando a volatilidade implícita muda,
com o ativo parado (de forma equivalente, também mede o quanto o vega
muda quando o ativo se move, as duas leituras são matematicamente a mesma
coisa).

## O formato da curva

<figure class="post-img">
  <img src="/images/grega-vanna.png" alt="Gráfico do vanna de uma call em função do preço do ativo, mostrando valores positivos abaixo do strike e negativos acima" loading="lazy" />
</figure>

No exemplo, vanna é positivo com o ativo abaixo do strike e negativo
acima, cruzando perto do ATM. A leitura prática: numa call fora do
dinheiro, um aumento de volatilidade **aumenta** o delta (a opção fica
mais "viva", com mais chance de virar ITM antes do vencimento, então o
mercado passa a tratá-la como mais sensível ao ativo). Numa call dentro
do dinheiro, o efeito inverte.

## Por que essa grega "escondida" importa

Vanna normalmente não aparece em explicações introdutórias de opções
porque ela é sutil: não muda o resultado no vencimento, só a forma como o
valor da posição reage no meio do caminho. Mas ela se tornou um dos temas
mais discutidos de estrutura de mercado nos últimos anos, junto com o
[charm](/blog/charm) do post anterior, porque explica um mecanismo real:
formadores de mercado com posições vendidas em opções (principalmente
puts, usadas em grande volume como proteção de carteira por investidores
institucionais) precisam ajustar hedge não só quando o ativo se move
(delta e gamma), mas também quando a volatilidade implícita se move
(vanna). Isso gera fluxo de compra ou venda do ativo motivado
exclusivamente por mudança de expectativa de volatilidade, não por
notícia sobre o ativo em si.

## A leitura estrutural

O padrão citado com frequência: quando a volatilidade cai de forma
consistente (mercado calmo, complacente), o ajuste de vanna de mesas
vendidas em put tende a gerar compra mecânica do ativo, o que por sua vez
ajuda a segurar a volatilidade ainda mais baixa, um ciclo que se
autoalimenta enquanto dura. Quando esse ciclo se inverte (volatilidade
sobe de forma abrupta), o mesmo mecanismo trabalha ao contrário, e a
literatura recente de estrutura de mercado aponta esse tipo de fluxo como
um dos fatores que pode amplificar movimentos de venda em momentos de
estresse. Não é a causa raiz de nenhum movimento (isso continua sendo
fundamento, fluxo macro, notícia), mas é um mecanismo real de
amplificação que existe por trás do preço, exatamente o tipo de coisa que
a Sarisa tenta enxergar antes de tratar um movimento de mercado como
puro sinal.

*O gráfico usa parâmetros ilustrativos (K=100, 45 dias úteis, juro 10,5%
a.a., vol. implícita 28% a.a.). Não é cotação de nenhum ativo real.*
