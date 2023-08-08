<script lang="ts" setup>

const props = withDefaults(defineProps<{
  active: boolean
  activeColor?: string
}>(), {
  active: false,
})
</script>

<template>
  <FlexRow class="p-nav-tab-button" :class="{ active }">
    <!-- -->
    <FlexRow class="relative z-1">
      <FlexRow horizontal="center" class="icon">
        <slot name="icon"></slot>
      </FlexRow>

      <div class="nav-tab-text">
        <slot></slot>
      </div>
    </FlexRow>
  </FlexRow>
</template>

<style lang="postcss">
.p-nav-tab-button {
  @apply relative h-20 px-4 font-700 text-2xl;

  
}

.nav-tab-text {
  @apply relative bg-clip-text;
  background-image: linear-gradient(153deg, #DEC5FF 0%, #FFDFFE 100%);
  -webkit-text-fill-color: transparent;
}


.active .nav-tab-text {
  background-image: linear-gradient(158deg, #CFF6FF 40.28%, #FEFFFE 100%);
  
}

.active .nav-tab-text::after {
  @apply absolute bottom-0 left-0 right-0 h-2px;
  background-image: linear-gradient(158deg, #CFF6FF 40.28%, #FEFFFE 100%);
  content: "";
  
}

</style>
