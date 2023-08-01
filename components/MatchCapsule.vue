<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    match: any
  }>(),
  {
    match: () => ({})
  }
)
const expand = ref(false)

const dateFormatted = useTime(props.match.dt * 1000, 'HH:mm AA')
const offset = computed(() => {
  if (!props.match.dt) return '0%'

  const dateMatch = dateFormatted.value.match(/^(\d+):(\d+)/)
  const h = Number(dateMatch?.[1] || 0) 
  const m = Number(dateMatch?.[2] || 0) / 60
  return ((h + m) / 30 * 100).toFixed(2) + '%'
})
</script>

<template>
  <div
    class="match-capsule t1"
    v-if="match" 
    :style="{ marginLeft: offset }"
  >
    <!-- -->
    <div class="teams">
      <div class="team" :style="{ backgroundImage: `url(https://media-1.api-sports.io/football/teams/${match.h}.png)` }">
      </div>
      <div class="team-score" v-if="match.st === 'FT'">{{ match.hg?.[0] }}:{{ match.ag?.[0] }}</div>
      <div class="team-score" v-else>VS</div>

      <div class="team" :style="{ backgroundImage: `url(https://media-1.api-sports.io/football/teams/${match.a}.png)` }">
      </div>
    </div>
    <div class="info">
      <div class="team-info whitespace-nowrap">{{ match.hn }} VS {{ match.an }}</div>
      <div class="flex gap-2 items-center text-sm">
        <div class="group-tag whitespace-nowrap">
          {{ match.rd }}
        </div>
        <div class="whitespace-nowrap">
          {{ dateFormatted }} {{ props.match.dt }}
        </div>
      </div>
    </div>
  </div>
</template>
  
<style lang="postcss">
.match-capsule {
  @apply relative h-16;
  margin-left: 6.67%; 
}

.match-capsule .teams {
  @apply absolute z-2 h-full px-3 left-0 w-42 rounded-full flex items-center justify-between;
}

.match-capsule .team {
  @apply h-12 w-12 bg-black shadow shadow-lg bg-opacity-20 rounded-full bg-no-repeat bg-contain bg-center;
}




.match-capsule .team-score {
  @apply text-base font-700;
}
.match-capsule .info {
  @apply absolute z-1 left-0 h-full rounded-full pl-45 pr-6 inline-flex flex-col justify-center gap-1;
}

.match-capsule .group-tag {
  @apply rounded-full px-2 py-1px;
  background-color: #DE5858;
}

.t1 .teams {
  background: linear-gradient(180deg, #628AD9 0%, #2E4E8B 100%);
}

.t1 .info {
  background: rgba(6, 37, 99, 0.70);
}
</style>
