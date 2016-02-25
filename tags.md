---
layout: page
title: Tags
permalink: /tags/
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_words = site_tags | split:',' | sort %}

<ul class="tag-box">
{% for item in (0..site.tags.size) %}
    {% unless forloop.last %}
    {% capture this_word %}{{ tags_words[item] | strip_newlines }}{% endcapture %}
    <li>
        <a href="#{{ this_word | cgi_escape }}">
            {{ this_word }} ({{ site.tags[this_word].size }})
        </a>
    </li>
    {% endunless %}
{% endfor %}
</ul>

{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture this_word %}{{ tags_words[item] | strip_newlines }}{% endcapture %}
<h4 id="{{ this_word | cgi_escape }}">{{ this_word }}</h4>
<ul>
  {% for post in site.tags[this_word] %}{% if post.title != null %}
  <li>{{ post.date | date: "%Y-%m-%d" }} -- <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endif %}{% endfor %}
</ul>
{% endunless %}{% endfor %}