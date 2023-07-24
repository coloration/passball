<script lang="ts" setup>
import MatchTab from './MatchTab.vue'
import LeagueRoundBoard from './LeagueRoundBoard.vue'
import LeagueScoreBoard from './LeagueScoreBoard.vue'

import MatchRow from './MatchRow.vue'
import ScoreRow from './ScoreRow.vue'





const standings = ref<any[]>([])
const currentRound = ref<number>(1)
const matches = ref<any[]>([])


const currentLeague = ref(0)
const currentSeason = ref(0)

// useAsyncData()

const { data: leagues } = await useAsyncData('leagues', () => $fetch('/api/leagues'))


watch(() => leagues.value, () => {
  const lgs = leagues.value as any
  
  if (lgs.length > 0) {
    currentLeague.value = lgs[0].lg
    if (lgs[0].seasons.length > 0) {
      
      currentSeason.value = lgs[0].seasons[0].sn
    }

    handleLeagueChange(currentLeague.value, currentSeason.value)
  }
})




function handleLeagueChange(league: number, season: number) {
  currentLeague.value = league
  currentSeason.value = season
  useFetch(`/api/league-season?league=${league}&season=${season}`)
    .then(({ data: seasonData }) => {
      standings.value = (seasonData.value as any)?.standings || []
    })

  useFetch(`/api/league-match?league=${league}&season=${season}`)
    .then(({ data: matchData }) => {
      matches.value = (matchData.value as any)?.matches || []
    })
  currentRound.value = 1
}

const currentRoundMatches = computed(() => matches.value.filter(m => {
  return m.rd === currentRound.value
}))

function handleRoundChange(offset: number) {
  let changed = currentRound.value + offset
  if (changed < 0) changed = 0
  if (changed > 20000) changed = 20000
  currentRound.value = changed
}

// const { data: leagueSeason } = await useFetch(`/api/league-season?league=${}&season=${}`)
</script>
<template>
  <div class="match-view">

    <MatchTab
      :leagues="(leagues as any)"
      :currentLeague="currentLeague"
      :currentSeason="currentSeason"
      @change="handleLeagueChange"
    />

    <FlexRow class="gap-6" vertical="start">

      <LeagueRoundBoard :round="currentRound" class="flex-1" @change="handleRoundChange">

        <MatchRow :match="match" v-for="(match, i) in currentRoundMatches" :key="i" />
      </LeagueRoundBoard>

      <LeagueScoreBoard class="flex-1">
        <ScoreRow :teamSeason="teamSeason" v-for="(teamSeason, i) in standings" :key="i" />
      </LeagueScoreBoard>

    </FlexRow>
  </div>
</template>
<style lang="postcss">
.match-view {
  @apply py-10;
}
</style>


