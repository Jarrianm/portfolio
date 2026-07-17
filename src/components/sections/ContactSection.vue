<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function validate() {
  errors.name = form.name.trim() ? '' : 'Name is required.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'A valid email is required.'
  errors.message = form.message.trim() ? '' : 'Message is required.'
  return !errors.name && !errors.email && !errors.message
}

function handleSubmit() {
  if (!validate()) return
  const mailto = `mailto:jarrian.mclean@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
  window.location.href = mailto
  submitted.value = true
}
</script>

<template>
  <section id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 text-center mb-5">
          <h2 class="section-title">
            Hire <span class="accent">Me</span>
          </h2>
          <p class="section-subtitle">
            If you'd like to talk about an application or opportunity, I'd love to hear about your project.
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-7">
          <form
            class="contact-form"
            novalidate
            @submit.prevent="handleSubmit"
          >
            <div class="row g-3">
              <div class="col-sm-6">
                <label
                  class="form-label"
                  for="name"
                >Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors.name }"
                  placeholder="Your name"
                >
                <div class="invalid-feedback">
                  {{ errors.name }}
                </div>
              </div>

              <div class="col-sm-6">
                <label
                  class="form-label"
                  for="email"
                >Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors.email }"
                  placeholder="your@email.com"
                >
                <div class="invalid-feedback">
                  {{ errors.email }}
                </div>
              </div>

              <div class="col-12">
                <label
                  class="form-label"
                  for="message"
                >Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  :class="{ 'is-invalid': errors.message }"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                />
                <div class="invalid-feedback">
                  {{ errors.message }}
                </div>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn-accent btn w-100"
                  :disabled="submitted"
                >
                  <span v-if="!submitted">
                    <i class="bi bi-send me-2" />
                    Send Message
                  </span>
                  <span v-else>
                    <i class="bi bi-check-lg me-2" />
                    Message Sent!
                  </span>
                </button>
              </div>
            </div>
          </form>

          <div class="divider d-flex align-items-center gap-3 my-5">
            <hr class="flex-grow-1">
            <span class="divider-text">or reach out directly</span>
            <hr class="flex-grow-1">
          </div>

          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://github.com/jarrianm"
              target="_blank"
              rel="noopener"
              class="social-pill"
            >
              <i class="bi bi-github" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jarrianm"
              target="_blank"
              rel="noopener"
              class="social-pill"
            >
              <i class="bi bi-linkedin" />
              LinkedIn
            </a>
            <a
              href="mailto:jarrian.mclean@gmail.com"
              class="social-pill"
            >
              <i class="bi bi-envelope" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg-primary);
}

.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 2rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}

.form-control {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  border-radius: 8px;
  font-size: 0.9rem;
  padding: 0.65rem 0.9rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: var(--text-muted);
    opacity: 0.5;
  }

  &:focus {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
  }

  &.is-invalid {
    border-color: #ef4444;
  }
}

textarea.form-control {
  resize: vertical;
  min-height: 130px;
}

.invalid-feedback {
  font-size: 0.78rem;
  color: #ef4444;
}

.divider hr {
  border-color: var(--border-subtle);
  opacity: 1;
}

.divider-text {
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  border-radius: 24px;
  padding: 0.45rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--accent-light);
    color: var(--accent-light);
    transform: translateY(-2px);
  }
}
</style>
