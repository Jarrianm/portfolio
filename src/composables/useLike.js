import { ref, onMounted } from 'vue'
import { showToast } from './useToast.js'

const COOLDOWN_MS = 60_000

export function useLike(key, initialCount) {
  const count = ref(initialCount)
  const onCooldown = ref(false)

  function canLike() {
    const last = localStorage.getItem(`like_ts_${key}`)
    return !last || Date.now() - parseInt(last) > COOLDOWN_MS
  }

  function handleLike() {
    if (!canLike()) return
    count.value++
    localStorage.setItem(`like_ts_${key}`, Date.now())
    localStorage.setItem(`like_count_${key}`, count.value)
    onCooldown.value = true
    showToast('Thank you for your like!')
    setTimeout(() => { onCooldown.value = false }, COOLDOWN_MS)
  }

  onMounted(() => {
    const stored = localStorage.getItem(`like_count_${key}`)
    if (stored) count.value = parseInt(stored)
    onCooldown.value = !canLike()
  })

  return { count, onCooldown, handleLike }
}
