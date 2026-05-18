<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../../data/nav.js'
import { useLike } from '../../composables/useLike.js'

const isScrolled = ref(false)
const { count: likeCount, onCooldown: hasLiked, handleLike } = useLike('portfolio', 42)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  const collapse = document.getElementById('navMenu')
  if (collapse && collapse.classList.contains('show')) {
    collapse.classList.remove('show')
  }
}

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    class="navbar navbar-expand-lg fixed-top"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container">
      <a
        class="navbar-brand"
        href="#home"
        @click.prevent="scrollTo('home')"
      >
        Jarrian McLean
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div
        id="navMenu"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
          <li
            v-for="link in navLinks"
            :key="link.id"
            class="nav-item"
          >
            <a
              class="nav-link"
              :href="`#${link.id}`"
              @click.prevent="scrollTo(link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <button
          class="like-btn ms-lg-4 mt-3 mt-lg-0"
          :class="{ liked: hasLiked }"
          :title="hasLiked ? 'Thanks for the like!' : 'Like this portfolio'"
          @click="handleLike"
        >
          <i class="bi bi-hand-thumbs-up" />
          <span>{{ likeCount }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: transparent;
  transition: background 0.3s, box-shadow 0.3s;
  padding: 1rem 0;
}

.navbar.scrolled {
  background: rgba(36, 36, 36, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--border-subtle);
}

.navbar-brand {
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  letter-spacing: -0.01em;
}

.navbar-toggler {
  border-color: var(--border-subtle);
}

.navbar-toggler-icon {
  filter: invert(1);
}

.nav-link {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;

  &:hover {
    color: var(--text-primary);
  }
}

.like-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  border-radius: 20px;
  padding: 0.3rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 500;
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
