---
layout: page
title: Categories
permalink: /categories/
---

{% capture site_categories %}{% for category in site.categories %}{{ category | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign category_words = site_categories | split:',' | sort %}

<ul class="tag-box">
{% for item in (0..site.categories.size) %}
    {% unless forloop.last %}
    {% capture this_word %}{{ category_words[item] | strip_newlines }}{% endcapture %}
    <li>
        <a href="#{{ this_word | cgi_escape }}">
            {{ this_word }} ({{ site.categories[this_word].size }})
        </a>
    </li>
    {% endunless %}
{% endfor %}
</ul>

{% for item in (0..site.categories.size) %}{% unless forloop.last %}
{% capture this_word %}{{ category_words[item] | strip_newlines }}{% endcapture %}
<h4 id="{{ this_word | cgi_escape }}">{{ this_word }}</h4>
<ul>
  {% for post in site.categories[this_word] %}{% if post.title != null %}
  <li>{{ post.date | date: "%Y-%m-%d" }} -- <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endif %}{% endfor %}
</ul>
{% endunless %}{% endfor %}