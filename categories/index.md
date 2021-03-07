---
layout: default
title: CATEGORIES
---

<!-- Display number of posts in a category -->
<!-- {{ site.categories.['sillicon valley'] | size }} -->

<main class="Main" role="main">

  <ul class="Pablo">
    <li class="Pablo-life">
      <a href="dark/" class="Pokemon">
        <h3 class="Pokemon-title">Dark</h3>
        <p class="Pokemon-description">Generally dark/black websites. Not necessarily sad, or classy, or even luxurious. Lots of different ways to express dark. At least thats what we think.</p>

        <h4 class="Pokemon-counter">{{ site.categories.['dark'] | size }}</h4>
      </a>
    </li>

    <li class="Pablo-life">
      <a href="light/" class="Pokemon">
        <h3 class="Pokemon-title">Light</h3>
        <p class="Pokemon-description">Whiter/lighter kind of websites, yet not always. White website does not mean minimal. Minimal does not mean good. Food for thought.</p>

        <h4 class="Pokemon-counter">{{ site.categories.['light'] | size }}</h4>
      </a>
    </li>

    <li class="Pablo-life">
      <a href="colourful/" class="Pokemon">
        <h3 class="Pokemon-title">Colourful</h3>
        <p class="Pokemon-description">Vibrant, vivid, rich in colours. Like a bright day in California or a cheesy hawaiian shirt.</p>

        <h4 class="Pokemon-counter">{{ site.categories.['colourful'] | size }}</h4>
      </a>
    </li>

    <li class="Pablo-life">
      <a href="grungy/" class="Pokemon">
        <h3 class="Pokemon-title">Grungy</h3>
        <p class="Pokemon-description">Crude, radical and provoking. Not necessarily dirty. Is grunge in web design dead? We'll see.</p>

        <h4 class="Pokemon-counter">{{ site.categories.['grungy'] | size }}</h4>
      </a>
    </li>

    <li class="Pablo-life">
      <a href="playful/" class="Pokemon">
        <h3 class="Pokemon-title">Playful</h3>
        <p class="Pokemon-description">Cheerful & fun approach on web design. Often illustrative.</p>

        <h4 class="Pokemon-counter">{{ site.categories.['playful'] | size }}</h4>
      </a>
    </li>

    <li class="Pablo-life">
      <a href="typographic/" class="Pokemon">
        <h3 class="Pokemon-title">Typographic</h3>
        <p class="Pokemon-description">It's like watching the movie 'Helvetica'. Different opinions on type. It's size, it's purpose, stylistic features. You know when you visit typography oriented site, for typomaniacs.</p>

        <h4 class="Pokemon-counter">{{ site.categories.['typographic'] | size }}</h4>
      </a>
    </li>

    <li class="Pablo-life">
      <a href="mellow/" class="Pokemon">
        <h3 class="Pokemon-title">Mellow</h3>
        <p class="Pokemon-description">Smooth, soft, relaxed.</p>

        <h4 class="Pokemon-counter">{{ site.categories.['mellow'] | size }}</h4>
      </a>
    </li>
  </ul>



  <div class="Main-notice">
    <p class="Main-noticeMessage">More categories will be added over time.</p>
  </div>

  {% include drawer.html %}
</main>













