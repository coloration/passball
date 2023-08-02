<script lang="ts" setup>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

interface DateTab {
  month: number, 
  date: number,
  year: number,
  day: number,
  str: string
}

  

const today = dayjs.utc().startOf('D')
const localToday = dayjs.utc().local().startOf('D')
const todayStr = today.format('YYYY-MM-DD')

// 在坐標軸中體現offset 所以此處用local作為日期tab
const dateTabs: DateTab[] = [-3, -2, -1, 0, 1, 2, 3].map((offset: number) => {
  const d = localToday.add(offset, 'd')
  return {
    month: d.get('M') + 1,
    date: d.get('D'),
    year: d.get('y'),
    day: d.get('d'),
    str: d.format('YYYY-MM-DD')
  }
})
const current = ref<string>(todayStr)

const { data: leagues } = await useAsyncData<any[]>('daily-match', () => $fetch(`/api/daily-match?date=${todayStr}`))



async function fetchDailyFixtures(date: string) {
  
  const { data } = await useAsyncData<any[]>('daily-match', () => $fetch(`/api/daily-match?date=${date}`))

  if (Array.isArray(data.value)) {
    leagues.value = data.value
  }
}

async function changeDay(tab: DateTab) {
  await fetchDailyFixtures(tab.str)
  current.value = tab.str
}

</script>

<template>
  <RoundBoard class="match-calender" gradient="linear-gradient(174deg, rgba(89, 94, 136, 0.75) 0%, rgba(139, 139, 139, 0.00) 100%)">
    <!-- -->
    <div class="flex flex-col gap-2">
      <WeekButton
        v-for="(tab, i) in dateTabs" 
        :key="i" 
        :month="tab.month" 
        :date="tab.date" 
        :day="tab.day"
        :active="current === tab.str"
        @click="changeDay(tab)"
        ></WeekButton>
    </div>

    <TimeRuler :is-today="current === todayStr">
        <div class="h-full flex flex-col gap-2">
          <template v-for="(league, type) in leagues">
            <div class="font-700 text-xl">
              <span v-if="league.country && league.country.toLowerCase() !== 'world'">{{ league.country }} - </span>
              {{ league.leagueName }}
            </div>
            <MatchCapsule v-for="match in league.matches" :match="match" :type="type" />
          </template>
        </div>
    </TimeRuler>

    <div>
      
    </div>
       
  </RoundBoard>
</template>

<style lang="postcss">
.match-calender {
  @apply text-white py-4 pr-4 flex gap-5 items-stretch;
}
</style>
