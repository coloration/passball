<script lang="ts" setup>
const { data } = await useAsyncData('daily-matches', () => $fetch('/api/daily-match'))
</script>

<template>
  <div class="nearly-match">
    <!-- -->
    <div class="weekday-container mb-8">
      <FlexRow class="gap-6 mb-8">
        <FlexRow horizontal="center" class="w-10 h-10 text-white rounded-full bg-gray-500" v-for="n in 7" :n="n">
          {{ n }}
        </FlexRow>
      </FlexRow>
      <FlexRow class="gap-6">
        <div v-for="m in data?.matches" :key="i" class="bg-gray-300">
          <div> {{ m.lg }} - {{  m.rd }}</div>
          <div class="flex">
            <img class="w-4 h-6" :src="`https://media-1.api-sports.io/football/teams/${m.h}.png`" alt="">
            {{ m.h }} {{ m.hg?.[0] }} : {{  m.ag?.[0] }} {{ m.a }}
            <img class="w-4 h-6" :src="`https://media-1.api-sports.io/football/teams/${m.a}.png`" alt="">
          </div>
          <div> {{  m.dt }}</div>
        </div>
      </FlexRow>
    </div>
  </div>
</template>

<style lang="postcss">
.nearly-match {
  @apply;
}
</style>
