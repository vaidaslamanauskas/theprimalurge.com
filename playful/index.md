---
layout: default
title: PLAYFUL
permalink: /categories/playful/
---

<main class="Main" role="main">

  <ol id="section:posts" class="Pablo">

    {% for post in site.categories.['playful'] %}

    <li class="Pablo-life">
      <section class="Kanye">

        <header class="Kanye-header">
          <div class="Kanye-headerVerse">
            <h1 class="Kanye-headerTitle">{{ post.title }}</h1>
            <time class="Kanye-headerTime" datetime="{{ post.date | date: "%-d %B, %Y" }}">{{ post.date | date: "%-d %B, %Y" }}</time>
          </div>
          <div class="Kanye-headerAction">
            <a href="{{ post.url }}" class="Kanye-headerActionLink">
              See specimen
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6V2h-4V0H6v2H2v4H0v12h2v4h4v2h12v-2h4v-4h2V6h-2zM10 4h4v4h-4V4zm6 16H8v-2h2v-6H8v-2h6v8h2v2z"/></svg>
            </a>
          </div>
        </header>

        <div class="Kanye-body">
          <img src="{{ post.websiteScreen }}" alt="Screenshot">
        </div>

        <footer class="Kanye-footer">
          <div class="Kanye-footerAuthor">

            <div class="Kanye-footerAuthorImage" style="background-image: url('{{ post.authorAvatar }}')"></div>

            <div class="Kanye-footerAuthorProfile">
              <h2 class="Kanye-footerAuthorProfileName">{{ post.authorName }}</h2>
              <p class="Kanye-footerAuthorProfileBio">{{ post.authorBio | strip_html | truncatewords: 10 }}</p>
            </div>

          </div>
        </footer>

        <div class="Kanye-labels">
          <span class="Kanye-label">Feels:</span>
          <span class="Kanye-label">{{ post.categories | join: ', ' }}</span>
        </div>

      </section>
    </li>

    {% endfor %}

  </ol>

  {% include drawer.html %}
</main>