<script lang="ts" setup>
const slots = useSlots()

</script>

<template>
  <div class="p-content-board">
    <!-- -->
    <div class="pcb-bg">

      <div v-if="slots['left-top']">
        <div class="pcb-deco lt"></div>
        <div class="pcb-deco-cont lt">
          <slot name="left-top"></slot>
        </div>
      </div>
      <div v-if="slots['left-bottom']">
        <div class="pcb-deco lb"></div>

        <div class="pcb-deco-cont lb">
          <slot name="left-bottom">
          </slot>
        </div>

      </div>
      <div v-if="slots['right-bottom']">
        <div class="pcb-deco rb"></div>
        <div class="pcb-deco-cont rb">
          <slot name="right-bottom">
            
          </slot>
        </div>
      </div>
      <div v-if="slots['right-top']">
        <div class="pcb-deco rt"></div>
        <div class="pcb-deco-cont rt">
          <slot name="right-top">
          </slot>
        </div>
      </div>

      <div class="pcb-content">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<style lang="postcss">
.p-content-board {
  @apply relative overflow-hidden;
}

.pcb-bg {
  @apply w-full flex flex-col bg-amber p-6 rounded-12;
}

.pcb-content {
  @apply relative z-2;
}

.pcb-deco,
.pcb-deco {
  @apply absolute w-15 h-15 bg-white z-1;
  border-radius: 0 0 0 1.25rem;
}

.pcb-deco.rt {
  @apply right-0 top-0;
}

.pcb-deco.rb {
  @apply right-0 bottom-0 transform rotate-90;
}

.pcb-deco.lt {
  @apply left-0 top-0 transform -rotate-90;
}

.pcb-deco.lb {
  @apply left-0 bottom-0 transform rotate-180;
}

.pcb-deco::before,
.pcb-deco::after {
  @apply w-5 h-5 bg-transparent absolute;
  content: "";
  border-radius: 0 1.25rem 0 0;
  box-shadow: 1.25rem -1.25rem 0 1.25rem #fff;

}

.pcb-deco::before {
  @apply -left-5 top-0;
}

.pcb-deco::after {
  @apply -bottom-5 right-0;
}

.pcb-deco-cont {
  @apply relative z-3 absolute w-11 h-11 bg-amber rounded-full flex justify-center items-center cursor-pointer;
}

.pcb-deco-cont.lt {
  @apply left-2 top-2;
}

.pcb-deco-cont.lb {
  @apply left-2 bottom-2;
}

.pcb-deco-cont.rt {
  @apply right-2 top-2;
}

.pcb-deco-cont.rb {
  @apply right-2 bottom-2;
}
</style>
