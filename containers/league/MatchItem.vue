<script lang="ts" setup>
import day from 'dayjs'
const props = withDefaults(
  defineProps<{
    match: any,
    kind: 0 | 1
  }>(),
  {
    match: () => ({} as any),
    kind: 0
  }
)

const dateFormatted = computed(() => props.match.dt ? day(props.match.dt).format('D MMM. dddd HH:mm A') : '')
</script>
<template>
  <div class="match-item" v-if="match.dt">
    <div class="flex flex-col flex-1 gap-3">
      <div class="team flex items-center">
        
        <TeamName :id="match.h" class="w-60">{{ match.hn }}</TeamName>
        <div class="text-xl font-700 w-15 text-left mr-4">
          {{ match.hg?.[0] }}
          <small v-if="match.st === 'PEN'">({{ match.hg?.[4] }})</small>
        </div>
        <NearlyFive v-if="kind === 0" :content="match.hfm || ''" />
      </div>
      <div class="team flex items-center">
        <TeamName :id="match.a" class="w-60">{{ match.an }}</TeamName>
        <div class="text-xl font-700 w-15 text-left mr-4">
          {{ match.ag?.[0] }}
          <small v-if="match.st === 'PEN'">({{ match.ag?.[4] }})</small>
        </div>
        <NearlyFive v-if="kind === 0" :content="match.afm || ''" />
      </div>
    </div>
    <div class="match-info flex flex-col justify-between items-end text-xs text-gray-400">
      <div class="font-700 text-base text-white">{{ match.st }}</div>
      <div class="text-right">{{ match.ve || '-' }} <br /> {{ match.ct || '-' }}</div>
      <div>{{ dateFormatted }}</div>
    </div>
  </div>
</template>
<style lang="postcss">
.match-item {
  @apply flex py-2 border-b border-gray-600;
}

</style>