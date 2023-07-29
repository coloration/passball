<script lang="ts" setup>
const { data } = await useAsyncData('daily-matches', () => $fetch(`/api/daily-match?date=${'2023-07-29'}`))

console.log('????', data.value)
</script>

<template>
  <RoundBoard class="match-calender" gradient="linear-gradient(174deg, rgba(89, 94, 136, 0.75) 0%, rgba(139, 139, 139, 0.00) 100%)">
    <!-- -->

    <div class="flex flex-col gap-2">
      <WeekButton></WeekButton>
      <WeekButton></WeekButton>
      <WeekButton active></WeekButton>
      <WeekButton></WeekButton>
      <WeekButton></WeekButton>
      <WeekButton></WeekButton>
      <WeekButton></WeekButton>
    </div>

    <TimeRuler>
        <div v-if="data?.length && data.length > 0" class="h-full flex flex-col gap-2">
          <template v-for="league in data">
            <MatchCapsule v-for="match in league.matches" :match="match" />
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
