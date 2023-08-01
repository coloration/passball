<script lang="ts" setup>
import MatchCalender from './MatchCalender.vue'

import MatchItem from './MatchItem.vue'
import ScoreItem from './ScoreItem.vue'
import TopAssists from './TopAssists.vue';
import TopScorers from './TopScorers.vue';
import day from 'dayjs'

interface SeasonMatch {
  lg: number
  sn: number
  rounds: any[]
}

const standings = ref<any[]>([])
const scorers = ref<any[]>([])
const assists = ref<any[]>([])
const seasonMatches = ref<SeasonMatch>({
  lg: 0, sn: 0, rounds: []
})




const currentLeague = ref(0)
const currentSeason = ref(0)
const currentRoundIndex = ref(0)

// useAsyncData()

const { data: leagues } : { data: any } = await useAsyncData('leagues', () => $fetch('/api/leagues'))

const lg = computed(() => leagues.value?.find(lg => lg.lg === currentLeague.value))

const typeLeagues = computed(() => (leagues.value || []).filter((lg: any) => lg.k === 0))
const typeCups = computed(() => (leagues.value || []).filter((lg: any) => lg.k === 1))

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




function handleLeagueChange(league: number, season?: number) {
  currentLeague.value = league

  currentSeason.value = season || lg.value.seasons[0].sn

  currentRoundIndex.value = 0

  if (lg.value.k === 0) {
    useFetch(`/api/league-season?league=${league}&season=${currentSeason.value}`)
      .then(({ data }) => {
        const leagueSeason: any = data.value
        standings.value = leagueSeason.standings || []
        scorers.value = leagueSeason.scorers || []
        assists.value = leagueSeason.assists || []
      })
  }
  else {
    standings.value = []
    scorers.value = []
    assists.value = []
  }

  useFetch(`/api/league-match?league=${league}&season=${currentSeason.value}`)
    .then(({ data: matchData }) => {
      console.log(matchData)
      seasonMatches.value = (matchData.value as any) || []
    })
 
}


function handleRoundChange(offset: number) {
  let changed = currentRoundIndex.value + offset
  if (changed < 0) changed = 0
  if (changed > 20000) changed = 20000
  currentRoundIndex.value = changed
}

// const { data: leagueSeason } = await useFetch(`/api/league-season?league=${}&season=${}`)
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

        <div class="flex gap-5 items-stretch">
          <RoundBoard class="w-66"
            gradient="linear-gradient(180deg, rgba(12, 12, 12, 0.22) 0%, rgba(149, 41, 151, 0.12) 100%)">
            <div class="uppercase font-700 text-lg px-4 py-4">POPULAR LEAGUE</div>
            <div class="flex flex-col gap-2">
              <LeagueButton
                v-for="(league) in typeLeagues" 
               
                :key="league.lg"
                :id="league.lg"
                :active="currentLeague === league.lg"
                @click="() => handleLeagueChange(league.lg)"
              >{{ league.n }}</LeagueButton>
            </div>

            <div class="uppercase font-700 text-lg px-4 pt-10 pb-4">POPULAR CUP</div>
            <div class="flex flex-col gap-2">
              <LeagueButton
                v-for="(league) in typeCups" 
                class="text-base"
                :key="league.lg"
                :id="league.lg"
                :active="currentLeague === league.lg"
                @click="() => handleLeagueChange(league.lg)"
              >
              <div class="text-sm">{{ league.n }}</div>
            </LeagueButton>
            </div>
          </RoundBoard>

          <RoundBoard class="flex-1 min-h-100 px-10 py-8"
            gradient="linear-gradient(180deg, rgba(50, 54, 148, 0.26) 0%, rgba(50, 54, 148, 0.26) 100%)">
            
            <div class="flex justify-between">
              <div class="flex gap-4">
                <div>
                  <!-- <GlassSelect :options="lg.seasons"></GlassSelect>
                   -->
                  <select 
                    class="bg-transparent outline-0 font-700 cursor-pointer"
                    v-if="lg"
                    :value="currentSeason"
                    @change="(e: any) => handleLeagueChange(currentLeague, Number(e.target.value))">
                    <option class="bg-indigo-900 font-inter font-700" v-for="sn in lg.seasons" :key="sn.sn" :value="sn.sn">{{ sn.dsp }}</option>
                  </select>
                </div>
                <div class="opacity-70 font-700">
                  {{  seasonMatches?.rounds?.[currentRoundIndex]?.beg ? day(seasonMatches?.rounds?.[currentRoundIndex]?.beg).format('D MMM.') : '' }} 
                  {{  seasonMatches?.rounds?.[currentRoundIndex]?.end ? '~ ' + day(seasonMatches?.rounds?.[currentRoundIndex]?.end).format('D MMM. YYYY') : '' }}
                </div>
              </div>
              <div class="flex gap-4">
                <div class="uppercase font-700 text-xl">{{ seasonMatches?.rounds?.[currentRoundIndex]?.round }}</div>
                <div class="flex gap-2">
                  <GlassButton @click="handleRoundChange(-1)">
                    <div i-carbon-caret-up></div>
                  </GlassButton>
                  <GlassButton @click="handleRoundChange(1)">
                    <div i-carbon-caret-down></div>
                  </GlassButton>
                </div>
              </div>
            </div>


            <MatchItem
              v-for="(fixture, i) in seasonMatches?.rounds?.[currentRoundIndex]?.fixtures"
              :key="i" :match="fixture" :kind="lg?.k" />

          </RoundBoard>
        </div>
        <RoundBoard v-if="lg?.k === 0" class="min-h-100 px-10 py-8"
          gradient="linear-gradient(206deg, rgba(78, 39, 189, 0.64) 0%, rgba(241, 10, 149, 0.30) 100%)">
          
          <div class="flex justify-between">
            <div class="uppercase font-700 text-2xl mb-4">game rank</div>
            <select 
              class="bg-transparent outline-0 font-700 cursor-pointer"
              :value="currentSeason"
              v-if="lg"
              @change="(e: any) => handleLeagueChange(currentLeague, Number(e.target.value))">
              <option class="bg-indigo-900 font-inter font-700" v-for="sn in lg.seasons" :key="sn.sn" :value="sn.sn">{{ sn.dsp }}</option>
            </select>
          </div>
          <div class="flex font-700 text-lg mb-3">
            <div w-10>No.</div>
            <div w-47>Team</div>
            <div w-20>Score</div>
            <div w-25>Win</div>
            <div w-25>Draw</div>
            <div w-60>Lose</div>
            <div>Goals</div>
          </div>
          <div class="flex flex-col gap-3">
            <ScoreItem :teamSeason="teamSeason" v-for="(teamSeason, i) in standings" :key="i" />
          </div>

        </RoundBoard>
        <RoundBoard
          gradient="radial-gradient(88.73% 81.48% at 53.23% 56.43%, rgba(49, 156, 255, 0.48) 0%, rgba(49, 156, 255, 0.30) 38.02%, rgba(49, 156, 255, 0.01) 100%)">
          <div class="flex items-stretch min-h-100">
            <TopScorers :players="scorers"/>
            <TopAssists :players="assists" />
    
          </div>
        </RoundBoard>
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
.match-view {
  @apply py-10 text-white;
}

.match-view-banner-mask {
  @apply absolute left-0 top-0 w-full h-full;
  background-image: linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, rgba(121, 113, 166, 0.71) 53.65%, #1D1A2D 100%);
}

.match-view-banner {
  @apply absolute z-0 left-0 top-0;
}
</style>


