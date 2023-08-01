<script lang="ts" setup>
withDefaults(
  defineProps<{
    id: number
    active?: boolean
  }>(),
  { 
    active: false
  }
)
</script>

<template>
  <div class="league-button" :class="{ active }">
    <!-- -->
    <div class="league-button-logo">
      <img :src="`https://media-1.api-sports.io/football/leagues/${id}.png`" alt="">
    </div>

    <div class="text-lg font-700">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.league-button {
  @apply px-4 py-2 flex items-center gap-5 cursor-pointer;
}

.league-button-logo {
  @apply w-12 h-12 overflow-hidden bg-contain bg-no-repeat flex justify-center items-center;
  background-image: url('/lg-bg.png');
}

.league-button-logo img {
  height: 80%;
}

.league-button.active {
  background: linear-gradient(258deg, rgba(157, 47, 224, 0.37) 0%, rgba(126, 188, 244, 0.14) 100%);
}
</style>
