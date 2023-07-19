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
      <FlexRow
        horizontal="center"
        class="icon">
        <slot name="icon"></slot>
      </FlexRow>

      <div>
        <slot></slot>
      </div>
    </FlexRow>
  </FlexRow>
</template>

<style lang="postcss">
.p-nav-tab-button {
  @apply h-full pl-2 pr-4;

  &.active {
    @apply bg-white text-black relative;
    border-radius: 1.5rem 1.5rem 0 0;

    &:before, &:after {
      @apply absolute w-5 h-5 bottom-0;
      content: "";
    }

    &:before {
      @apply -left-5;
      box-shadow: 1rem 1rem 0 1rem #fff;
      border-radius: 0 0 1rem 0;
    }
    
    &:after {
      @apply -right-5;

      box-shadow: -1rem 1rem 0 1rem #fff;
      border-radius: 0 0 0 1rem;
    }
  }
  
  & .icon {
    @apply w-8 h-8 rounded-full overflow-hidden bg-black text-white mr-2;
  }
}
</style>
