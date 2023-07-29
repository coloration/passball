<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    teamSeason: any
  }>(),
  {
    teamSeason: () => ({})
  }
)

const t = computed(() => props.teamSeason)
</script>
<template>
  <div class="h-8 items-center flex">
    <RankNumber :order="t.rk" class="mr-4" />
    <TeamName class="w-44 mr-4" :id="t.tm">{{ t.tm }}</TeamName>

    <div class="mr-14 font-700 text-lg w-6 text-center">{{ t.pt }}</div>

    <ScoreCapsule class="mr-4 w-21" gradient-start="#58EDD2" gradient-end="#2A927F">
      <template #default>{{ t.hw + t.aw }}</template>
      <template #aside>{{t.hw}}/{{ t.aw }}</template>
    </ScoreCapsule>
    <ScoreCapsule class="mr-4 w-21" gradient-start="#9884B8" gradient-end="#6D5E85">
      <template #default>{{ t.hd + t.ad }}</template>
      <template #aside>{{t.hd}}/{{ t.ad }}</template>
    </ScoreCapsule>

    <ScoreCapsule class="mr-4 w-21" gradient-start="#FF4D77" gradient-end="#AC2646">
      <template #default>{{ t.hl + t.al }}</template>
      <template #aside>{{t.hl}}/{{ t.al }}</template>
    </ScoreCapsule>


    ??<NearlyFive class="mr-12" :content="'WWWDL'" />


    <ScoreCapsule class="mr-5 w-24" gradient-start="#EDCC58" gradient-end="#B49443">
      <template #default>{{ t.ghf + t.gaf }}</template>
      <template #aside>{{ t.ghf }}/{{ t.gaf }}</template>
    </ScoreCapsule>
    <ScoreCapsule class="w-24">
      <template #default>{{ t.gha + t.gaa }}</template>
      <template #aside>{{ t.gha }}/{{ t.gaa }}</template>
    </ScoreCapsule>
  </div>
</template>
<style lang="postcss">

</style>