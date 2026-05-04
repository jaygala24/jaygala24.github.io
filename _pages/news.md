---
layout: page
title: news
permalink: /news/
description: ''
nav: false
---

{% assign news = site.news | reverse %}
<table style="width:100%; border-collapse:collapse;">
  {% for item in news %}
  <tr>
    <td style="vertical-align:top; padding:6px 12px 6px 0; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:0.85em; color:#888;">{{ item.date | date: "%b %Y" }}</td>
    <td style="vertical-align:top; padding:6px 12px;">{{ item.content | remove: '<p>' | remove: '</p>' | emojify }}</td>
    <td style="vertical-align:top; padding:6px 0; text-align:right; white-space:nowrap;">{% if item.category %}<span style="display:inline-block; padding:1px 9px; border-radius:4px; font-size:0.75rem; font-weight:600; letter-spacing:0.02em; background-color:transparent; color:var(--global-theme-color); border:1px solid var(--global-theme-color);">{{ item.category }}</span>{% endif %}</td>
  </tr>
  {% endfor %}
</table>
