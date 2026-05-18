<script setup>
import { computed } from 'vue'

const props = defineProps({
  post: { type: Object, required: true },
})

const formattedDate = computed(() =>
  new Date(props.post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
)
</script>

<template>
  <a
    :href="post.url"
    target="_blank"
    rel="noopener"
    class="blog-card"
  >
    <div class="card-header-row d-flex gap-3">
      <div class="card-content flex-grow-1">
        <div class="card-meta d-flex align-items-center gap-2 mb-2">
          <span class="date">{{ formattedDate }}</span>
          <span class="dot" />
          <span class="read-time">
            <i class="bi bi-clock me-1" />
            {{ post.readTime }}
          </span>
        </div>
        <h3 class="card-title">{{ post.title }}</h3>
      </div>

      <div
        v-if="post.image"
        class="card-thumbnail flex-shrink-0"
      >
        <img
          :src="post.image"
          :alt="post.title"
        >
      </div>
    </div>

    <p class="card-excerpt">{{ post.excerpt }}</p>

    <div class="card-footer-row d-flex align-items-center justify-content-between mt-3">
      <span class="read-link">
        Read on Medium
        <i class="bi bi-arrow-up-right ms-1" />
      </span>
      <span
        v-if="post.claps > 0"
        class="claps"
      >
        <i class="bi bi-hand-clap me-1" />
        {{ post.claps }} claps
      </span>
    </div>
  </a>
</template>

<style scoped>
.blog-card {
  display: block;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.4rem;
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(102, 151, 255, 0.3);
    box-shadow: var(--shadow-card);
  }
}

.card-thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.date,
.read-time {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
}

.dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--text-muted);
  opacity: 0.4;
}

.card-title {
  font-size: 0.97rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0;
  line-height: 1.4;
  transition: color 0.2s;

  .blog-card:hover & {
    color: var(--accent-light);
  }
}

.card-excerpt {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0.75rem 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer-row {
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.75rem;
}

.read-link {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent-light);
  display: inline-flex;
  align-items: center;
}

.claps {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
}
</style>
