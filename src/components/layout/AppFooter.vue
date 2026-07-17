<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <span class="brand">Jarrian McLean</span>
        <span class="copy">&copy; {{ year }} All rights reserved.</span>
        <div class="d-flex gap-3">
          <a
            href="https://github.com/jarrianm"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <i
              class="bi bi-github"
              style="font-size: 18px;"
            />
          </a>
          <a
            href="https://linkedin.com/in/jarrianm"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <i
              class="bi bi-linkedin"
              style="font-size: 18px;"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-subtle);
  padding: 2rem 0;
}

.brand {
  font-weight: 700;
  color: var(--text-primary);
}

.copy {
  font-size: 0.85rem;
  color: var(--text-muted);
}

a {
  color: var(--text-muted);
  transition: color 0.2s;

  &:hover {
    color: var(--accent-light);
  }
}
</style>
