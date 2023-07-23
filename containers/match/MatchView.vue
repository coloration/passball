<script lang="ts" setup>
import MatchTab from './MatchTab.vue'
import LeagueRoundBoard from './LeagueRoundBoard.vue'
import LeagueScoreBoard from './LeagueScoreBoard.vue'

import MatchRow from './MatchRow.vue'
import ScoreRow from './ScoreRow.vue'





const standings = ref<any[]>([])
const currentRound = ref<number>(1)
const matches = ref<any[]>([])


const current = ref(0)


const { data: leagues } = await useFetch('/api/leagues')


watch(() => leagues.value?.length, () => {
  if (leagues.value?.length > 0) {
    current.value = leagues.value[0]?.id
    handleLeagueChange(current.value)
  }
})


// onMounted(() => {
  
//     .then(({ data }) => {
//       console.log(data.value)
      
//       leagues.value = data.value

//       if (leagues.value?.length > 0) {
//         current.value = leagues.value[0]?.id
//         handleLeagueChange(current.value)
//       }
//     })
// })

function handleLeagueChange(id: number) {
  current.value = id
  useFetch(`/api/league-season?league=${id}&season=2022`)
    .then(({ data: seasonData }) => {
      console.log('sss', seasonData.value)
      standings.value = (seasonData.value as any).standings
    })

  useFetch(`/api/league-match?league=${id}&season=2022`)
    .then(({ data: matchData }) => {
      matches.value = (matchData.value as any).matches
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

    <MatchTab :leagues="leagues" :current="current" @change="handleLeagueChange" />

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


