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
    <div class="w-8 h-8 flex items-center">
      <img v-if="id" :src="`https://media-1.api-sports.io/football/teams/${id}.png`" />
    </div>
    
    <div class="flex-1 text-truncate"><slot /></div>
  </div>
</template>

<style lang="postcss">
.team-name {
  @apply flex items-center gap-2 text-sm;
}

.team-name img {
  @apply w-full opacity-80;
}
</style>
