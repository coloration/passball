<script lang="ts" setup>

const props = withDefaults(defineProps<{
  current: number
  leagues: any[]
}>(), {
  leagues: () => [],
  current: 0
})


const emits = defineEmits<{
  (e: 'change', id: number) :void,
}>()


</script>

<template>
  <div class="match-tab">
    <!-- -->
    <FlexRow class="gap-4">
      <div 
        v-for="(league, i) in props.leagues"
        :key="i"
        class="match-btn"
        :class="{ active: current === league.id }"
        @click="emits('change', league.id)">
        {{ league.name }}
      </div>
    </FlexRow>
  </div>
</template>

<style lang="postcss">
.match-tab {
  @apply mb-4;
}

.match-btn {
  @apply px-6 py-2 rounded-full bg-gray-300 cursor-pointer;
}

.match-btn.active {
  @apply bg-red;
}
</style>
