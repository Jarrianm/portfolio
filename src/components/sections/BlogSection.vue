<script setup>
import BlogCard from '../ui/BlogCard.vue'
import { posts } from '../../data/posts.js'
</script>

<template>
  <section id="blog">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">
          Latest <span class="accent">Writing</span>
        </h2>
        <p class="section-subtitle">
          Thoughts and articles on software read more on
          <a
            href="https://medium.com/@jarrian.mclean"
            target="_blank"
            rel="noopener"
            class="medium-link"
          >Medium</a>
        </p>
      </div>

      <div class="row g-4">
        <div
          v-for="post in posts"
          :key="post.id"
          class="col-md-6"
        >
          <BlogCard :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg-secondary);
  position: relative;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 140px;
  background: linear-gradient(to bottom, var(--bg-primary), transparent);
  pointer-events: none;
}

section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  background: linear-gradient(to bottom, transparent, var(--bg-primary));
  pointer-events: none;
}

.medium-link {
  color: var(--accent-light);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}
</style>
