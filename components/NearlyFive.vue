<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    content?: string
  }>(),
  {
    content: ''
  }
)

const arr = computed(() => props.content?.split('') || [])
</script>

<template>
  <div class="nearly-five">
    <!-- -->
    <div v-for="(d, i) in arr" :key="i" class="nearly-five-dot" :class="d"></div>
  </div>
</template>

<style lang="postcss">
.nearly-five {
  @apply flex items-center overflow-hidden gap-1 w-23;
}

.nearly-five-dot {
  @apply w-3 h-3 bg-white rounded-full;
}

.nearly-five-dot.W {
  background-image: linear-gradient(180deg, #3CFFA1 0%, #2A905F 100%)
}
.nearly-five-dot.D {
  background-image: linear-gradient(180deg, #EAEAEA 0%, #636363 100%);
}
.nearly-five-dot.L {
  background-image: linear-gradient(180deg, #F67D7D 0%, #A61818 100%);
}
</style>
