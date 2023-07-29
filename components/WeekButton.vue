<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    date?: string
    active?: boolean
  }>(),
  {
    date: '',
    active: false
  }
)
</script>

<template>
  <div class="week-button" :class="{ active }">
    <!-- -->
    <div class="month">07</div>
    <div class="divider">/</div>
    <div class="date">25</div>
    <div class="weekday">T</div>
  </div>
</template>

<style lang="postcss">
.week-button {
  @apply w-24 h-14 overflow-hidden relative cursor-pointer;

  border-radius: 0 1rem 1rem 0;
}

.week-button .weekday {
  @apply text-4xl w-8 text-center absolute right-4 top-1 z-1 opacity-40 font-700 text-black;
}

.week-button .date {
  @apply text-lg opacity-70 absolute right-6 font-700 top-6 z-2;
}

.week-button .divider {
  @apply text-xs text-gray-400 absolute right-12 top-6 z-2 font-700;
}
.week-button .month {
  @apply text-2xl opacity-70 absolute right-13 top-3 z-2 font-700;
}

.week-button.active {
  background: linear-gradient(152deg, #6F389B 0%, rgba(167, 38, 170, 0.87) 100%);
}

.week-button.active .date, 
.week-button.active .divider, 
.week-button.active .month, 
.week-button.active .weekday 
{
  @apply opacity-100;
}
</style>
