<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    match: any
  }>(),
  {
    match: () => ({} as any)
  }
)

const dateFormatted = useTime(props.match.dt * 1000, 'D MMM dddd HH:mm A')
</script>
<template>
  <div class="match-item" v-if="match.dt">
    <div class="flex flex-col flex-1 gap-3">
      <div class="team flex items-center">
        <TeamName :id="match.h" class="w-40">{{ match.h }}?</TeamName>
        <div class="text-xl font-700 w-4 text-center mr-4">{{ match.hg?.[0] }}</div>
        <NearlyFive content="WWWDL" />?
      </div>
      <div class="team flex items-center">
        <TeamName :id="match.a" class="w-40">{{ match.a }}?</TeamName>
        <div class="text-xl font-700 w-4 text-center mr-4">{{ match.ag?.[0] }}</div>
        <NearlyFive content="WWLLW" />?
      </div>
    </div>
    <div class="match-info flex flex-col justify-between items-end text-xs text-gray-400">
      <div class="font-700 text-base text-white">{{ match.st }}</div>
      <div>{{ match.ve || '-' }}?, {{ match.city || '-' }}?</div>
      <div>{{ dateFormatted }}</div>
    </div>
  </div>
</template>
<style lang="postcss">
.match-item {
  @apply flex py-2 border-b border-gray-600;
}

</style>