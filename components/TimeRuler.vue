<script lang="ts" setup>

</script>

<template>
  <div class="time-ruler">
    <!-- -->
    <div>
      <div>0:00</div>
      <div>6:00</div>
      <div>12:00</div>
      <div>18:00</div>
    </div>
    <div>
      <div v-for="i in 30" :key="i"></div>
    </div>
  </div>
</template>

<style lang="postcss">
.time-ruler {
  @apply;
}
</style>
