<script lang="ts" setup>
withDefaults(
  defineProps<{
    players: any[]
  }>(),
  {
    players: () => []
  }
)


</script>

<template>
  <div class="top-scorers">
    <div class="text-right text-2xl font-700 mb-4 uppercase">TOP SCORERS</div>
    <div class="flex flex-col gap-4" v-if="players.length > 0">
      <div class="top-player flex w-full flex-1" v-for="(sc, i) in players" :key="i">
        <RankNumber :order="i + 1" class="mr-4 h-8" />
        <div class="flex flex-col flex-1 gap-2">
          <div class="flex justify-between">
            <div class="flex items-center">
              <div class="rounded-full overflow-hidden mr-4">
                <img class="w-8 h-8" :src="`https://media-1.api-sports.io/football/players/${sc.id}.png`" alt="">
              </div>
              <div class="font-700">{{ sc.n }}</div>
            </div>
            <div class="flex gap-2 items-center">
              <div class="flex font-500">
                {{ sc.nt }}
              </div>
              <div class="border-2 border-white overflow-hidden rounded-full">
                <img class="w-7 h-7" :src="`https://media-1.api-sports.io/football/teams/${sc.tm}.png`" />
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <ScoreCapsule gradient-start="#EDCC58" gradient-end="#B49443">
              <template #default>{{ sc.gl }}</template>
              <template #aside>{{ sc.sto }}/{{ sc.st }}</template>
            </ScoreCapsule>
            <ScoreCapsule gradient-start="#E26B45" gradient-end="#A53F1E">
              <template #default>{{ sc.pts }}</template>
              <template #aside>{{ sc.ptm }}/{{ sc.pts + sc.ptm }}</template>
            </ScoreCapsule>
            <ScoreCapsule gradient-start="#AB58ED" gradient-end="#732AAC">
              <template #default>{{ sc.app }}</template>
              <template #aside>{{ sc.lp }}/{{ sc.mi }}'</template>
            </ScoreCapsule>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="uppercase font-700 text-lg flex-1 flex items-center justify-center">No CONTENT.</div>
  </div>
</template>

<style lang="postcss">
.top-scorers {
  @apply flex-1 flex flex-col gap-6 px-10 py-8 border-r border-dashed border-gray-400;
}
</style>
