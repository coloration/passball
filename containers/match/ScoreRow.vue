<script lang="ts" setup>

</script>
<template>

<div class="score-row">

  <div class="sr-team-logo">
    <img src="https://cdn.sportnanoapi.com/football/team/c4a6528a2ee147b99c9885ef24385a4e.png" />
  </div>
  <div class="sr-team-rank">
    <div class="sr-record">3/1/1</div>
    <div class="sr-score">12</div>
  </div>
  <div class="sr-team-goals">
    <div class="sr-record">12/4</div>
    <div class="sr-player-group">
      <img src="https://cdn.sportnanoapi.com/football/player/aafe6d71eea5435e419bf4dbfc10861e.png" />
      <img src="https://cdn.sportnanoapi.com/football/player/aafe6d71eea5435e419bf4dbfc10861e.png" />
      <img src="https://cdn.sportnanoapi.com/football/player/aafe6d71eea5435e419bf4dbfc10861e.png" />
      <img src="https://cdn.sportnanoapi.com/football/player/aafe6d71eea5435e419bf4dbfc10861e.png" />
      <img src="https://cdn.sportnanoapi.com/football/player/aafe6d71eea5435e419bf4dbfc10861e.png" />
    </div>
  </div>
</div>
</template>
<style lang="postcss">
.score-row {
  @apply flex items-center py-2 text-white font-700 gap-4;
}

.sr-team-logo {
  @apply w-10 h-10 bg-gray rounded-full flex justify-center items-center;
}

.sr-team-logo img {
  @apply w-7 h-7;
}

.sr-team-rank {
  @apply w-22 h-10 bg-emerald-300 rounded-full flex justify-between items-center box-border px-3;
}

.sr-team-goals {
  @apply flex-1 bg-gray rounded-full h-10 flex items-center px-3 text-black;
}

.sr-record {
  @apply text-sm;
}


.sr-score {
  @apply text-black -mt-[2px];
}

.sr-player-group {
  @apply flex ml-2;
  
}

.sr-player-group img {
  @apply w-7 h-7 bg-white rounded-full overflow-hidden shadow-2xl -mr-2;
}
</style>