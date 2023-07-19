<script lang="ts" setup>
const router = useRouter()
</script>

<template>
  <FlexColumn class="p-empty">
    <slot>敬请期待 ~</slot>

    <button 
      @click="router.back()"
      class="bg-black rounded text-white py-2 px-3 mt-10">

      返回首页
    </button>
  </FlexColumn>
</template>

<style lang="postcss">
.p-empty {
  @apply w-full py-70;
}
</style>
