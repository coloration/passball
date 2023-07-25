<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    match: any
  }>(),
  {
    match: () => ({} as any)
  }
)

</script>
<template>

<div class="match-row">

  <div class="match-date">{{ match.dt }}</div>
  <div class="team-name">{{ match.h }}</div>
  <div class="team-logo">
    <img :src="`https://media-1.api-sports.io/football/teams/${match.h}.png`" />
  </div>
  <div class="team-score">{{ match.hg?.[0] }}</div>
  <div class="divide">:</div>
  <div class="team-score">{{ match.ag?.[0] }}</div>
  <div class="team-logo">
    <img :src="`https://media-1.api-sports.io/football/teams/${match.a}.png`" />
  </div>
  <div class="away-name">{{ match.a }}</div>
  <div class="operators">

  </div>
</div>
</template>
<style lang="postcss">
.match-row {
  @apply flex items-center border-b border-gray border-solid text-white font-700 text-sm py-2;
}

.team-logo img {
  @apply w-7 h-7 mx-4;
}

.match-date {
  @apply w-40;
}
</style>