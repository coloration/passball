<script lang="ts" setup>
const props = withDefaults(defineProps<{
  currentLeague: number
  currentSeason: number
  leagues?: any[]
}>(), {
  leagues: () => [],
  currentLeague: 0,
  currentSeason: 0,
})


const lgs = computed(() => props.leagues || [])

const lg = computed(() => props.leagues?.find(lg => lg.lg === props.currentLeague))


const emits = defineEmits<{
  (e: 'change', lg: number, sn: number) :void,
}>()

function handleChange(lg: number, sn?: number) {
  if (!sn) sn = props.currentSeason

  if (lg === props.currentLeague) {
    if (sn === props.currentSeason) return
    return emits('change', lg, sn!)
  }

  emits('change', lg, sn!)
}
</script>

<template>
  <div class="match-tab">
    <!-- -->
    <FlexRow class="gap-4">
      <div 
        v-for="(league, i) in lgs"
        :key="i"
        class="match-btn"
        :class="{ active: currentLeague === league.lg }"
        @click="handleChange(league.lg)">
        <div class="logo" :style="{ backgroundImage: `url(https://media.api-sports.io/football/leagues/${league.lg}.png)` }"></div>
        {{ league.n }}
      </div>
    </FlexRow>

    <select 
      v-if="lg"
      @change="(e: any) => handleChange(currentLeague, Number(e.target.value))">
      <option v-for="sn in lg.seasons" :key="sn.sn" :value="sn.sn">{{ sn.dsp }}</option>
    </select>
  </div>
</template>

<style lang="postcss">
.match-tab {
  @apply mb-4;
}

.match-btn {
  @apply flex items-center gap-2 pl-2 pr-6 py-2 rounded-full bg-gray-300 cursor-pointer;
}

.match-btn .logo {
  @apply w-10 h-10 bg-white rounded-full overflow-hidden bg-contain bg-no-repeat bg-center;
}



.match-btn.active {
  @apply bg-red;
}
</style>
