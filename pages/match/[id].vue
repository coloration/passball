<script lang="ts" setup>
import LeagueRoundBoard from '../../containers/match/LeagueRoundBoard.vue'
import LeagueScoreBoard from '../../containers/match/LeagueScoreBoard.vue'
import MatchRow from '../../containers/match/MatchRow.vue'
import ScoreRow from '../../containers/match/ScoreRow.vue'

</script>
<template>
  <view class="league page-container">
    <view class="page-content page-edge page-row-gap">
      <LeagueRoundBoard>
        <MatchRow />
        <MatchRow />
        <MatchRow /> 
        <MatchRow />
        <MatchRow />
      </LeagueRoundBoard>

      <LeagueScoreBoard>
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
        <ScoreRow />
      </LeagueScoreBoard>

    </view>
  </view>
</template>


