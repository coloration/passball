<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    gradientStart: string,
    gradientEnd: string
  }>(),
  {
    gradientStart: '#B9C2C1',
    gradientEnd: '#666F6D'
  }
)
</script>

<template>
  <div
    class="score-capsule">
    <!-- -->
    <div class="score-capsule-bg" :style="{ backgroundColor: gradientEnd }"></div>
    <div class="flex relative z-1 h-full items-center gap-1 pr-1">
      <div 
        class="score-capsule-main"
        :style="{ backgroundImage: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)` }">
        <slot />
      </div>

      <div class="score-capsule-aside">
        <slot name="aside" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.score-capsule {
  @apply pr-1 h-6 inline-flex font-700 rounded-full relative overflow-hidden;
}

.score-capsule-bg {
  @apply opacity-50 absolute left-0 top-0 right-0 bottom-0;
}

.score-capsule-main {
  @apply text-sm rounded-full min-w-10 h-full flex items-center justify-center;
}

.score-capsule-aside {
  @apply text-xs;
}
</style>
