<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    timezone?: number
  }>(),
  {
    timezone: 0
  }
)

const leftOffset = ref('0%')
let timer: number = 0
function updateMask() {
  const d = new Date()
  const h = d.getHours()
  leftOffset.value = `${(h / 30 * 100).toFixed(2)}%`
}

onMounted(() => {
  updateMask()
  timer = window.setTimeout(updateMask, 30 * 1000)
})

</script>

<template>
  <div class="time-ruler">
    <!-- -->
    <div class="clock-mask" :style="{ left: leftOffset }"></div>
    <div class="h-full relative z-2 flex flex-col">
      <div class="flex border-b-2">
        <div class="clock">
          <div class="clock-text">0:00</div>
          <div class="clock-ruler">
            <div class="clock-divider" :class="{ bold: i === 1 }" v-for="i in 6" :key="i"></div>
          </div>
        </div>
        <div class="clock">
          <div class="clock-text">6:00</div>
          <div class="clock-ruler">
            <div class="clock-divider" :class="{ bold: i === 1 }" v-for="i in 6" :key="i"></div>
          </div>
        </div>
        <div class="clock">
          <div class="clock-text">12:00</div>
          <div class="clock-ruler">
            <div class="clock-divider" :class="{ bold: i === 1 }" v-for="i in 6" :key="i"></div>
          </div>
        </div>
        <div class="clock">
          <div class="clock-text">18:00</div>
          <div class="clock-ruler">
            <div class="clock-divider" :class="{ bold: i === 1 }" v-for="i in 6" :key="i"></div>
          </div>
        </div>
        <div class="clock">
          <div class="clock-text">24:00 + 1</div>
          <div class="clock-ruler">
            <div class="clock-divider" :class="{ bold: i === 1 }" v-for="i in 6" :key="i"></div>
          </div>
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

.time-ruler .clock {
  @apply flex-1 flex flex-col gap-1;
}

.time-ruler .clock-text {
  @apply font-700;
}

.time-ruler .clock-ruler {
  @apply flex items-end;
}

.time-ruler .clock-divider {
  @apply h-1 border-l-2 flex-1 opacity-70;
}

.time-ruler .clock-divider.bold {
  @apply border-l-3 h-1 opacity-100;
}

.time-ruler .slot-content {
  @apply flex-1 pt-2;
}
</style>
