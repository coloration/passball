<script lang="ts" setup>

</script>

<template>
  <div class="glass-button">
    <!-- -->
    <slot />
  </div>
</template>

<style lang="postcss">
.glass-button {
  @apply min-w-8 px-3 flex items-center justify-center cursor-pointer text-white;
  border-radius: 0.75rem;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.74) 0%, rgba(0, 0, 0, 0.00) 70%);

}
</style>
