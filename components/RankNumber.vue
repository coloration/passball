<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    order: number
  }>(),
  {
    order: 10
  }
)
</script>

<template>
  <div class="rn">
    <!-- -->
    <div class="rn-main" :class="`n` + order">{{ order }}</div>
    <div class="rn-shadow" v-if="order <= 3" :class="`n` + order">{{ order }}</div>
  </div>
</template>

<style lang="postcss">

.rn {
  @apply relative;
}

.rn-main {
  @apply relative z-1 w-5 flex justify-center items-center text-white text-base font-700;
}

.rn-shadow {
  @apply absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center font-700;
  text-indent: -1px;
}




.rn-shadow.n1 {
  text-shadow: 
      #F8B756 1px 0 0, 
      #F8B756 1px 0 0;
}
.rn-shadow.n2 {
  text-shadow: 
      #D7D7D7 1px 0 0, 
      #D7D7D7 1px 0 0;
}

.rn-shadow.n3 {
  text-shadow: 
      #FF6813 1px 0 0, 
      #FF6813 1px 0 0;
}

.rn-main.n1,
.rn-main.n2,
.rn-main.n3 {
  background: var(--rankgrad, linear-gradient(180deg, #FF00F5 0%, #408290 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.rn-shadow.n1,
.rn-shadow.n2,
.rn-shadow.n3,
.rn-main.n1,
.rn-main.n2,
.rn-main.n3,
.rn-main.n4,
.rn-main.n5,
.rn-main.n6,
.rn-main.n7,
.rn-main.n8,
.rn-main.n9 {
  @apply text-2xl;
}

</style>
