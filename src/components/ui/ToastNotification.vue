<script setup>
import { toastMessage, toastVisible } from '../../composables/useToast.js'
</script>

<template>
  <Transition name="toast">
    <div
      v-if="toastVisible"
      class="toast-wrap"
      role="status"
      aria-live="polite"
    >
      <i class="bi bi-hand-thumbs-up-fill me-2" />
      {{ toastMessage }}
    </div>
  </Transition>
</template>

<style scoped>
.toast-wrap {
  position: fixed;
  top: 80px;
  right: 24px;
  background: var(--bg-card);
  border: 1px solid var(--accent-light);
  color: var(--text-primary);
  border-radius: 10px;
  padding: 0.65rem 1.1rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  pointer-events: none;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
