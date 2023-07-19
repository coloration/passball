<script lang="ts" setup>

</script>
<template>

<div class="match-row">

  <div class="match-date">May 19, 2023</div>
  <div class="team-name">MCI</div>
  <div class="team-logo">
    <img src="https://cdn.sportnanoapi.com/football/team/c4a6528a2ee147b99c9885ef24385a4e.png" />
  </div>
  <div class="team-score">3</div>
  <div class="divide">:</div>
  <div class="team-score">1</div>
  <div class="team-logo">
    <img src="https://cdn.sportnanoapi.com/football/team/f5da8fc911a5ca139398448d6969da71.png" />
  </div>
  <div class="away-name">ROC</div>
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