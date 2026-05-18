<script setup>
import { useLike } from '../../composables/useLike.js'

const props = defineProps({
  project: { type: Object, required: true },
})

const { count: likeCount, onCooldown, handleLike } = useLike(`project_${props.project.id}`, props.project.likes)
</script>

<template>
  <div class="project-card h-100">
    <div class="card-image">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
      >
      <div
        v-else
        class="image-placeholder"
      >
        <i
          class="bi bi-image"
          style="font-size: 40px;"
        />
        <span>Project Screenshot</span>
      </div>
    </div>

    <div class="card-body">
      <h3 class="card-title">
        {{ project.title }}
      </h3>
      <p class="card-desc">
        {{ project.description }}
      </p>

      <div class="tags d-flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="tag"
        >{{ tag }}</span>
      </div>

      <div class="card-footer-row d-flex align-items-center justify-content-between">
        <div class="d-flex gap-2">
          <a
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="card-link"
            aria-label="GitHub"
          >
            <i class="bi bi-github" />
            GitHub
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="card-link"
          >
            <i class="bi bi-box-arrow-up-right" />
            Live Demo
          </a>
        </div>

        <button
          class="like-btn"
          :class="{ liked: onCooldown }"
          @click="handleLike"
        >
          <i class="bi bi-hand-thumbs-up" />
          {{ likeCount }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-card);
    border-color: rgba(102, 151, 255, 0.3);
  }
}

.card-image {
  height: 200px;
  overflow: hidden;
  background: var(--bg-secondary);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-muted);
  opacity: 0.4;
  font-size: 0.8rem;
}

.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  background: rgba(102, 151, 255, 0.12);
  color: var(--accent-light);
  border: 1px solid rgba(102, 151, 255, 0.2);
}

.card-footer-row {
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.85rem;
  margin-top: auto;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--accent-light);
  }
}

.like-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  border-radius: 20px;
  padding: 0.25rem 0.65rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent-light);
    color: var(--accent-light);
  }

  &.liked {
    border-color: var(--accent-light);
    color: var(--accent-light);
  }
}
</style>
