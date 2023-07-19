<script lang="ts" setup>
import MatchTab from './MatchTab.vue'
import LeagueRoundBoard from './LeagueRoundBoard.vue'
import LeagueScoreBoard from './LeagueScoreBoard.vue'

import MatchRow from './MatchRow.vue'
import ScoreRow from './ScoreRow.vue'

</script>
<template>
  <div class="match-view">

    <MatchTab />
    <FlexRow class="gap-6" vertical="stretch">
      <LeagueRoundBoard class="flex-1">

        <MatchRow />
        <MatchRow />
        <MatchRow />
        <MatchRow />
        <MatchRow />
      </LeagueRoundBoard>

      <LeagueScoreBoard class="flex-1">
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
      </LeagueScoreBoard>

    </FlexRow>
  </div>
</template>
<style lang="postcss">
.match-view {
  @apply py-10;
}
</style>


