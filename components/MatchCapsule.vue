<script lang="ts" setup>
import day from 'dayjs'
const props = withDefaults(
  defineProps<{
    match: any,
    type: number
  }>(),
  {
    match: () => ({}),
    type: 0
  }
)
const expand = ref(false)

const dateFormatted = computed(() => day(props.match.dt).format('D MMM. HH:mm A '))
const offset = computed(() => {
  if (!props.match.dt) return '0%'

  const date = new Date(props.match.dt)
  const h = Number(date.getUTCHours() || 0) 
  const m = Number(date.getUTCMinutes() / 60)

  return ((h + m) / 30 * 100).toFixed(2) + '%'
})
</script>

<template>
  <div
    class="match-capsule"
    :class="`t${type%3}`"
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
        <div v-if="match.rd" class="group-tag whitespace-nowrap">
          {{ match.rd }}
        </div>
        <div class="whitespace-nowrap">
          {{ dateFormatted }}
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

.t0 .teams {
  background: linear-gradient(180deg, #628AD9 0%, #2E4E8B 100%);
}

.t0 .info {
  background: rgba(6, 37, 99, 0.70);
}

.t1 .teams {
  background: linear-gradient(180deg, #9065EC 0%, #442F80 100%);
}

.t1 .info {
  background: rgba(68, 47, 128, 0.70);
}

.t2 .teams {
  background: linear-gradient(180deg, #65E4EC 0%, #265F71 100%);
}

.t2 .info {
  background: rgba(38, 95, 133, 0.70);
}
</style>
