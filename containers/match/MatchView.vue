<script lang="ts" setup>
import MatchCalender from './MatchCalender.vue'
</script>
<template>
  <div class="match-view">
    <div class="match-view-banner">
      <img src="/world-cup-woman.jpg" />
      <div class="match-view-banner-mask"></div>
    </div>
    <div class="relative z-1">

      <div class="flex flex-col gap-5">
        <MatchCalender />
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
.match-view {
  @apply py-10 text-white;
}


.match-view-banner {
  @apply absolute z-0 left-0 top-0;
}
</style>


