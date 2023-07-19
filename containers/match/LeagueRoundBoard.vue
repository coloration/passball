<script lang="ts" setup>

</script>
<template>
  <ContentBoard class="league-round-board">
    <template #right-top>
      up
    </template>
    <template #right-bottom>
      down
    </template>
    <div class="lrb-header">
      <div class="lrb-logo"></div>
      <div class="lrb-info">
        <div>Round 1</div>
        <div class="lrb-date">May 18 ~ May 24, 2023</div>
      </div>
    </div>
    <div class="lrb-content">
      <slot></slot>
    </div>
  </ContentBoard>
</template>

<style lang="postcss">
.league-round-board {}

.lrb-header {
  @apply flex mb-4;
}

.lrb-content {
  @apply mb-12;
}

.lrb-logo {
  @apply w-15 h-15 rounded-full bg-white mr-4;
}

.lrb-info {
  @apply text-white font-700;
}

.lrb-content {
  @apply min-h-80;
}

.lrb-date {
  @apply text-sm pt-2;
}

</style>
