<script lang="ts" setup>
withDefaults(
  defineProps<{
    gradient?: string
  }>(),
  {}
)
</script>

<template>
  <div class="c-round-board" :style="{ backgroundImage: gradient }">
    <!-- -->
    <slot />
  </div>
</template>

<style lang="postcss">
.c-round-board {
  @apply rounded-3;
}
</style>
