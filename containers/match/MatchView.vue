<script lang="ts" setup>
import MatchCalender from './MatchCalender.vue'



import MatchTab from './MatchTab.vue'
import LeagueRoundBoard from './LeagueRoundBoard.vue'
import LeagueScoreBoard from './LeagueScoreBoard.vue'

import MatchRow from './MatchRow.vue'
import ScoreRow from './ScoreRow.vue'
import NearlyMatch from './NearlyMatch.vue'




const standings = ref<any[]>([])
const currentRound = ref<number>(1)
const matches = ref<any[]>([])


const currentLeague = ref(0)
const currentSeason = ref(0)

// useAsyncData()

const { data: leagues } = await useAsyncData('leagues', () => $fetch('/api/leagues'))

const lg = computed(() => leagues?.value.find(lg => lg.lg === currentLeague.value))


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
                v-for="(league) in leagues" 
                :key="league.lg"
                :id="league.lg"
                :active="currentLeague === league.lg"
                @click="() => handleLeagueChange(league.lg, currentSeason)"
              >{{ league.n }}</LeagueButton>
            </div>

            <div class="uppercase font-700 text-lg px-4 py-4">POPULAR CUP</div>
            <LeagueButton
                :key="8"
                :id="8"
                :active="currentLeague === 8"
                @click="() => handleLeagueChange(8, currentSeason)"
              >{{ 'World Cup Women' }}</LeagueButton>
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
                    @change="(e: any) => handleLeagueChange(currentLeague, Number(e.target.value))">
                    <option class="bg-indigo-900 font-inter font-700" v-for="sn in lg.seasons" :key="sn.sn" :value="sn.sn">{{ sn.dsp }}</option>
                  </select>
                </div>
                <div class="opacity-70 font-700">23 May. ~ 4 Jun. 2023</div>
              </div>
              <div class="flex gap-4">
                <div class="uppercase font-700 text-xl">{{ 'round 1' }}</div>
                <div class="flex gap-2">
                  <GlassButton>
                    <div i-carbon-caret-up></div>
                  </GlassButton>
                  <GlassButton>
                    <div i-carbon-caret-down></div>
                  </GlassButton>
                </div>
              </div>
            </div>


            <div
              v-for="i in 10"
              :key="i"
              class="match-item flex py-2 border-b border-gray-600">
              <div class="flex flex-col flex-1 gap-3">
                <div class="team flex items-center">
                  <TeamName :id="50" class="w-40">Manchester City</TeamName>
                  <div class="text-xl font-700 w-4 text-center mr-4">3</div>
                  <NearlyFive content="WWWDL" />
                </div>
                <div class="team flex items-center">
                  <TeamName :id="42" class="w-40">Arsenal</TeamName>
                  <div class="text-xl font-700 w-4 text-center mr-4">1</div>
                  <NearlyFive content="WWLLW" />
                </div>
              </div>
              <div class="match-info flex flex-col justify-between items-end text-xs text-gray-400">
                 <div class="font-700 text-base text-white">FT</div>
                 <div>Edihate, Manchester</div>
                 <div>23 Aug Wendesday 17:00 PM </div>
              </div>
            </div>
             

          </RoundBoard>
        </div>
        <RoundBoard class="min-h-100 px-10 py-8"
          gradient="linear-gradient(206deg, rgba(78, 39, 189, 0.64) 0%, rgba(241, 10, 149, 0.30) 100%)">
          
          <div class="uppercase font-700 text-2xl mb-4">game rank</div>
          <div class="flex font-700 text-lg mb-3">
            <div w-10>No.</div>
            <div w-47>Team</div>
            <div w-20>Score</div>
            <div w-25>Win</div>
            <div w-22>Draw</div>
            <div w-53>Lose</div>
            <div>Goals</div>
          </div>
          <div class="flex flex-col gap-3">
            <div v-for="i in 20" :key="i" class="h-8 items-center flex">
              <RankNumber :order="i" class="mr-4" />

              <TeamName class="w-44 mr-4" :id="50">Manchester City2222</TeamName>

              <div class="mr-14 font-700 text-lg w-6 text-center">88</div>

              <ScoreCapsule class="mr-4" gradient-start="#58EDD2" gradient-end="#2A927F">
                <template #default>28</template>
                <template #aside>16/12</template>
              </ScoreCapsule>
              <ScoreCapsule class="mr-4" gradient-start="#9884B8" gradient-end="#6D5E85">
                <template #default>5</template>
                <template #aside>3/2</template>
              </ScoreCapsule>

              <ScoreCapsule class="mr-4" gradient-start="#FF4D77" gradient-end="#AC2646">
                <template #default>5</template>
                <template #aside>0/5</template>
              </ScoreCapsule>


              <NearlyFive class="mr-12" :content="'WWWDL'" />


              <ScoreCapsule class="mr-5" gradient-start="#EDCC58" gradient-end="#B49443">
                <template #default>94</template>
                <template #aside>66/28</template>
              </ScoreCapsule>
              <ScoreCapsule>
                <template #default>33</template>
                <template #aside>16/17</template>
              </ScoreCapsule>
            </div>
          </div>

        </RoundBoard>
        <RoundBoard class="min-h-100"
          gradient="radial-gradient(88.73% 81.48% at 53.23% 56.43%, rgba(49, 156, 255, 0.48) 0%, rgba(49, 156, 255, 0.30) 38.02%, rgba(49, 156, 255, 0.01) 100%)">
          <div class="flex items-stretch h-full">
            <div class="flex-1 h-full flex flex-col gap-3 px-10 py-8 border-r border-dashed border-gray-400">
              <div class="text-right text-2xl font-700 mb-4 uppercase">TOP SCORERS</div>
              <div class="top-player flex w-full" v-for="i in 10" :key="i">
                <RankNumber :order="i" class="mr-4 h-8" />
                <div class="flex flex-col flex-1 gap-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <div class="rounded-full overflow-hidden mr-4">
                        <img class="w-8 h-8" :src="`https://media-1.api-sports.io/football/players/${1100}.png`" alt="">
                      </div>
                      <div>E. Haaland</div>
                    </div>
                    <div class="flex gap-2">
                      <div>country</div>
                      <div class="border-2 border-white overflow-hidden rounded-full">
                        <img class="w-7 h-7" :src="`https://media-1.api-sports.io/football/teams/${50}.png`" />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <ScoreCapsule gradient-start="#EDCC58" gradient-end="#B49443">
                      <template #default>36</template>
                      <template #aside>60/107</template>
                    </ScoreCapsule>
                    <ScoreCapsule gradient-start="#E26B45" gradient-end="#A53F1E">
                      <template #default>7</template>
                      <template #aside>0/7</template>
                    </ScoreCapsule>
                    <ScoreCapsule gradient-start="#AB58ED" gradient-end="#732AAC">
                      <template #default>35</template>
                      <template #aside>33/2779'</template>
                    </ScoreCapsule>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1 h-full flex flex-col gap-3 px-10 py-8">
              <div class="text-2xl font-700 mb-4 uppercase">TOP Asissits</div>
              <div class="top-player flex w-full" v-for="i in 10" :key="i">
                <RankNumber :order="i" class="mr-4 h-8" />
                <div class="flex flex-col flex-1 gap-2">
                  <div class="flex justify-between">
                    <div class="flex items-center">
                      <div class="rounded-full overflow-hidden mr-4">
                        <img class="w-8 h-8" :src="`https://media-1.api-sports.io/football/players/${1100}.png`" alt="">
                      </div>
                      <div>E. Haaland</div>
                    </div>
                    <div class="flex gap-2">
                      <div>country</div>
                      <div class="border-2 border-white overflow-hidden rounded-full">
                        <img class="w-7 h-7" :src="`https://media-1.api-sports.io/football/teams/${50}.png`" />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <ScoreCapsule gradient-start="#EDCC58" gradient-end="#B49443">
                      <template #default>36</template>
                      <template #aside>60/107</template>
                    </ScoreCapsule>
                    <ScoreCapsule gradient-start="#E26B45" gradient-end="#A53F1E">
                      <template #default>7</template>
                      <template #aside>0/7</template>
                    </ScoreCapsule>
                    <ScoreCapsule gradient-start="#AB58ED" gradient-end="#732AAC">
                      <template #default>35</template>
                      <template #aside>33/2779'</template>
                    </ScoreCapsule>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </RoundBoard>
      </div>




      <NearlyMatch />

      <MatchTab :leagues="(leagues as any)" :currentLeague="currentLeague" :currentSeason="currentSeason"
        @change="handleLeagueChange" />

      <FlexRow class="gap-6" vertical="start">

        <LeagueRoundBoard :round="currentRound" class="flex-1" @change="handleRoundChange">

          <MatchRow :match="match" v-for="(match, i) in currentRoundMatches" :key="i" />
        </LeagueRoundBoard>

        <LeagueScoreBoard class="flex-1">
          <ScoreRow :teamSeason="teamSeason" v-for="(teamSeason, i) in standings" :key="i" />
        </LeagueScoreBoard>

      </FlexRow>
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


