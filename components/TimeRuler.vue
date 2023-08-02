<script lang="ts" setup>
const dbl = (n: number) => n > 9 ? `${n}` : `0${n}`
const props = withDefaults(
  defineProps<{
    timezone?: number
    isToday: boolean
  }>(),
  {
    timezone: 0,
    isToday: true
  }
)

const leftOffset = ref('0%')
const timezoneOffset = new Date().getTimezoneOffset()

const localHalfClock = Array.from({ length: 60 }).map((_, i) => i * 30).map((utcDayMinute) => {
  return (utcDayMinute - timezoneOffset) % (24 * 60)
})


let timer: number = 0
function updateMask() {
  const d = new Date()
  const h = d.getUTCHours() + d.getUTCMinutes() / 60
  leftOffset.value = `${(h / 30 * 100).toFixed(2)}%`
}

onMounted(() => {
  updateMask()
  timer = window.setTimeout(updateMask, 30 * 1000)
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})

function formatTimeStr(localMinute: number) {
  const localHour = (Math.floor(localMinute / 60) + 24) % 24 
  const localRestMin = localMinute % 60
  return `${dbl(Math.abs(localHour))}:${dbl(localRestMin)}`
}

</script>

<template>
  <div class="time-ruler">
    <!-- -->
    <div v-if="isToday" class="clock-mask" :style="{ left: leftOffset }"></div>
    <div class="h-full relative z-2 flex flex-col">
      <div class="flex border-b-2 pt-6">
        <div class="clock-divider" v-for="i in localHalfClock" :key="i" :class="{ bold: i % 360 === 0 }">
          <div class="absolute -top-6 -left-1 font-700 whitespace-nowrap" v-if="i % 360 === 0">{{ formatTimeStr(i) }}</div>
        </div>
      </div>
      <div class="slot-content">
        <slot>
          <div class="h-full w-full relative z-3 text-shadow pt-40 flex justify-center items-center uppercase font-700 text-lg">no matches.</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.time-ruler {
  @apply min-h-110 flex-1 relative h-full;
}

.time-ruler .clock-mask {
  @apply absolute z-1 h-full border-l-2 border-dashed top-0 right-0 bottom-0 left-0;
  background: linear-gradient(100deg, rgba(209, 212, 242, 0.37) 0%, rgba(0, 0, 0, 0.00) 60%);

}

.time-ruler .clock-divider {
  @apply h-1 border-l-2 flex-1 opacity-70 relative;
}

.time-ruler .clock-divider.bold {
  @apply border-l-3 h-1 opacity-100;
}

.time-ruler .slot-content {
  @apply flex-1 pt-2 h-100;
}
</style>
