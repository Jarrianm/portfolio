<script setup>
defineProps({
  icon: { type: String, required: true },
  size: { type: [Number, String], default: 16 },
})
</script>

<template>
  <i
    :class="`bi bi-${icon}`"
    :style="{ fontSize: `${size}px`, lineHeight: 1 }"
  />
</template>
