<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="home">
    <div class="container">
      <div class="row align-items-center min-vh-100 py-5">
        <div class="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0 text-center text-lg-start">
          <p class="greeting">
            Hi, I'm
          </p>
          <h1 class="hero-name">
            Jarrian McLean
          </h1>
          <h2 class="hero-title">
            Full Stack Software Engineer
          </h2>
          <p class="hero-tagline">
            I build clean, thoughtful software; from full-stack web apps to scalable backend systems.
          </p>

          <div class="d-flex flex-wrap gap-3 mb-4 justify-content-center justify-content-lg-start">
            <a
              :href="`${base}assets/resume.pdf`"
              target="_blank"
              class="btn-accent btn"
            >
              <i class="bi bi-download me-2" />
              View Resume
            </a>
            <a
              href="https://calendar.app.google/V5EBMGLE5d94pUw56"
              target="_blank"
              rel="noopener"
              class="btn-outline-accent btn"
            >
              <i class="bi bi-calendar3 me-2" />
              Contact Me
            </a>
          </div>

          <div class="social-links d-flex gap-3 justify-content-center justify-content-lg-start">
            <a
              href="https://github.com/jarrianm"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              class="social-icon"
            >
              <i class="bi bi-github" />
            </a>
            <a
              href="https://linkedin.com/in/jarrian-mclean"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              class="social-icon"
            >
              <i class="bi bi-linkedin" />
            </a>
          </div>
        </div>

        <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
          <div class="avatar-wrap">
            <img
              :src="`${base}assets/profile/IMG_6414.jpeg`"
              alt="Jarrian McLean"
              class="avatar-img"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  top: -160px;
  right: -160px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(102, 151, 255, 0.18) 0%, rgba(102, 151, 255, 0.04) 50%, transparent 70%);
  pointer-events: none;
}

section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: linear-gradient(to bottom, transparent, var(--bg-secondary));
  pointer-events: none;
  z-index: 1;
}

.greeting {
  color: var(--accent-light);
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.hero-title {
  font-size: clamp(1.1rem, 4vw, 1.6rem);
  font-weight: 400;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.hero-tagline {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 2rem;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}

.social-icon {
  color: var(--text-muted);
  font-size: 22px;
  transition: color 0.2s, transform 0.2s;
  line-height: 1;

  &:hover {
    color: var(--accent-light);
    transform: translateY(-2px);
  }
}

.avatar-wrap {
  position: relative;
}

.avatar-img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-subtle);

  @media (max-width: 576px) {
    width: 180px;
    height: 180px;
  }
}
</style>
