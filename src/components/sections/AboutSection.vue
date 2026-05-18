<script setup>
import { mainSkills, education, technologies } from '../../data/about.js'
</script>

<template>
  <section id="about">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <h2 class="section-title">
            About <span class="accent">Me</span>
          </h2>
          <p class="quote">
            "Building software that makes a difference."
          </p>

          <p class="bio">
            I'm a full-stack developer who genuinely loves the process of building things from the ground up. Whether I'm wiring
            up a REST API or crafting a clean React interface, I care about how every layer fits together and how it feels to the
            person using it.
          </p>
          <p class="bio">
            What drives me is building software that solves real problems for real people. I want the things I build to make
            someone's day a little easier, not just check a box. That means thinking beyond the code and asking whether what I'm
            making actually matters.
          </p>
          <p class="bio">
            I'm always leveling up, always curious, and always looking for the next problem worth solving. If you're working on
            something that could use a developer who's as invested in the outcome as you are, let's talk.
          </p>

          <div class="mt-4">
            <p class="skills-heading">
              Main Skills
            </p>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <div
                v-for="skill in mainSkills"
                :key="skill"
                class="skill-card"
              >
                {{ skill }}
              </div>
            </div>

            <p class="skills-heading">
              Education &amp; Certifications
            </p>
            <div class="d-flex flex-column gap-2">
              <div
                v-for="cert in education"
                :key="cert"
                class="skill-card edu-card"
              >
                <i class="bi bi-mortarboard-fill me-2 flex-shrink-0" />
                {{ cert }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <p class="skills-heading mb-3">
            Technologies
          </p>
          <div class="tech-grid">
            <div
              v-for="tech in technologies"
              :key="tech.name"
              class="tech-icon"
              :title="tech.name"
            >
              <img
                :src="tech.icon"
                :alt="tech.name"
                :style="tech.invert ? 'filter: invert(1) brightness(0.85)' : ''"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-bleed" />
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
  height: 160px;
  background: linear-gradient(to bottom, var(--bg-secondary), transparent);
  pointer-events: none;
}

.section-bleed {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: linear-gradient(to bottom, transparent, var(--bg-primary));
  pointer-events: none;
}

.quote {
  font-style: italic;
  color: var(--accent-light);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
}

.bio {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.97rem;
}

.skills-heading {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: default;
  transition: transform 0.2s, border-color 0.2s;
  display: inline-flex;
  align-items: center;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--accent-light);
  }
}

.edu-card {
  width: fit-content;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.tech-icon {
  aspect-ratio: 1;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, border-color 0.2s;
  padding: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent-light);
  }
}

.placeholder-label {
  text-align: center;
  line-height: 1.2;
  font-weight: 700;
  font-size: 0.65rem;
}
</style>
