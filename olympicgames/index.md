---
layout: default
title: OLYMPIC GAMES
---

<!-- Should output numbers -->
<!-- {{ forloop.index }} -->

<main class="Main" role="main">

  {% comment %}
  <ol class="OlympicGames">

    <li class="OlympicGames-item">
      <a href="#" class="OlympicGames-ring"></a>
    </li>

  </ol>
  {% endcomment %}














  {% comment %}
  <ol class="OlympicGames">
    {% assign sorted_posts = site.posts | sort: 'echoLima' | reverse %} <!-- Add name for sorting -->
    {% for post in sorted_posts limit: 15 %} <!-- Reversed to put the ones with higher number on the top -->
    <li class="OlympicGames-item">

      <a href="{{ post.url }}" class="OlympicGames-participant">
        <div class="OlympicGames-participantPosition">
          <span class="OlympicGames-participantPositionNumber">#<span>{{ forloop.index }}</span></span>
        </div>

        <h2 class="OlympicGames-participantName">{{ post.title }}<time datetime="{{ post.date | date: "%-d %B, %Y" }}">{{ post.date | date: "%-d %B, %Y" }}</time></h2>
        <h3 class="OlympicGames-participantTrainer">{{ post.authorName }}<span>author</span></h3>
      </a>

    </li>
    {% endfor %}
  </ol>
  {% endcomment %}


  {% comment %}
  <div class="Main-notice">
    <p class="Main-noticeMessage">Work in progress. Things will change.</p>
  </div>
  {% endcomment %}

  {% include drawer.html %}
</main>