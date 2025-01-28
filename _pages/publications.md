---
layout: page
permalink: /publications/
title: publications
description: <span class='star'>*</span> denotes equal contribution
years: [2025, 2024, 2023, 2022, 2021, 2020]
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

An up-to-date list is available on [Google Scholar](https://scholar.google.com/citations?user=lNn2qGoAAAAJ) and [Semantic Scholar](https://www.semanticscholar.org/author/Jay-Gala/1992915388).

<div class="publications">

{%- for y in page.years %}

  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
