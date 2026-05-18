<script setup>
import ProjectCard from '../ui/ProjectCard.vue'
import { projects } from '../../data/projects.js'
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">
          My <span class="accent">Projects</span>
        </h2>
        <p class="section-subtitle">
          A selection of things I've built
        </p>
      </div>

      <div
        id="projectsCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-wrap="true"
      >
        <div class="carousel-indicators">
          <button
            v-for="(project, i) in projects"
            :key="project.id"
            type="button"
            data-bs-target="#projectsCarousel"
            :data-bs-slide-to="i"
            :class="{ active: i === 0 }"
            :aria-current="i === 0 ? 'true' : undefined"
            :aria-label="`Slide ${i + 1}`"
          />
        </div>

        <div class="carousel-inner">
          <div
            v-for="(project, i) in projects"
            :key="project.id"
            class="carousel-item"
            :class="{ active: i === 0 }"
          >
            <div class="d-flex justify-content-center px-2 px-md-5">
              <div class="card-wrap">
                <ProjectCard :project="project" />
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#projectsCarousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg-primary);
  position: relative;
}

section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  background: linear-gradient(to bottom, transparent, var(--bg-secondary));
  pointer-events: none;
  z-index: 0;
}

.card-wrap {
  width: 100%;
  max-width: 480px;
}

.carousel-indicators [data-bs-target] {
  background-color: var(--border-subtle);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;

  &.active {
    background-color: var(--accent-light);
  }
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: none;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 50%;
  padding: 18px;
  background-size: 50%;
}

.carousel-control-prev,
.carousel-control-next {
  width: 52px;
  opacity: 1;

  &:hover .carousel-control-prev-icon,
  &:hover .carousel-control-next-icon {
    background-color: var(--accent);
    border-color: var(--accent);
  }
}
</style>
