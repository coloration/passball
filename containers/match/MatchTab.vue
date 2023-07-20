<script lang="ts" setup>
const { data } = await useFetch('/api/matches')
</script>

<template>
  <div class="match-tab">
    <!-- -->
    <FlexRow class="gap-4">
      <div class="match-btn" v-for="(match, i) in data?.body?.matches" :key="i">
        {{ match.name }}
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
</style>
