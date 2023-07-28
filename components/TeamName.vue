<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    id: number
  }>(),
  {
    
  }
)
</script>

<template>
  <div class="team-name">
    <!-- -->
    <img v-if="id" :src="`https://media-1.api-sports.io/football/teams/${id}.png`" />
    
    <div class="flex-1 text-truncate"><slot /></div>
  </div>
</template>

<style lang="postcss">
.team-name {
  @apply flex items-center gap-2 text-sm;
}

.team-name img {
  @apply w-8 h-8 opacity-80;
}
</style>
