<script lang="ts" setup>

</script>
<template>
<ContentBoard class="league-score-board">
  <template #right-top>
    up
  </template>
  <div class="lsb-header">
    <div class="lsb-logo"></div>
    <div class="lsb-info">
      <div>Score</div>
      <div class="lsb-deco">Game Rank</div>
    </div>
  </div>
  <div class="lsb-content">
    <slot></slot>
  </div>
</ContentBoard>
</template>

<style lang="postcss">
.league-score-board {
  @apply relative pb-6;

}

.lsb-header {
  @apply flex mb-4;
}

.lsb-content {
}

.lsb-logo {
  @apply w-15 h-15 rounded-full bg-white mr-4;
}

.lsb-info {
  @apply text-white font-700;
}

.lsb-content {
}
 
.lsb-deco {
  @apply text-sm opacity-60 pt-2 font-300;
}

</style>
