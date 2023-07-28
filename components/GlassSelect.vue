<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    placeholder: string,
    options: 
  }>(),
  {
    placeholder: 'select ...'
  }
)
const display = ref('select')

</script>

<template>
  <div class="glass-select">
    <!-- -->
    
  </div>
</template>

<style lang="postcss">
.glass-select {
  @apply;
}
</style>
