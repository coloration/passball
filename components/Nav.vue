<script lang="ts" setup>
const route = useRoute()

const props = withDefaults(defineProps<{
  current: string
}>(), {
  current: ''
})



</script>


<template>
  <div class="p-nav">
    <FlexRow horizontal="center" class="w-full">
      <FlexRow class="p-nav-container">
        <NuxtLink to="/" class="p-logo mr-12 text-4xl pointer" i-emojione-monotone:dashing-away />
        <!-- -->
        <FlexRow class="p-nav-tab">
          <NuxtLink to="/" class="">
            <NavTabButton :active="route.path === '/'">
              <template #icon>
                <div i-emojione-monotone:soccer-ball></div>
              </template>
              赛事
              <small>Match</small>
            </NavTabButton>
          </NuxtLink>
          <NuxtLink to="/wiki">
            <NavTabButton :active="route.path.startsWith('/wiki')">
              <template #icon>
                <div i-emojione-monotone:orange-book></div>
              </template>
              百科
              <small>Wiki</small>
              
            </NavTabButton>
          </NuxtLink>
          <NuxtLink to="/analysis">
            <NavTabButton :active="route.path.startsWith('/analysis')">
              <template #icon>
                <div i-emojione-monotone:bar-chart></div>
              </template>
              分析
              <small>Analysis</small>
            </NavTabButton>
          </NuxtLink>
          <NuxtLink to="/mine">
            <NavTabButton :active="route.path.startsWith('/mine')">
              <template #icon>
                <div i-emojione-monotone:bust-in-silhouette></div>
              </template>
              我的
              <small>Mine</small>
            </NavTabButton>
          </NuxtLink>
        </FlexRow>

      </FlexRow>
    </FlexRow>
  </div>
</template>

<style lang="postcss">
.p-nav {
  @apply bg-black text-white overflow-hidden;
}
.p-nav-container {
  @apply h-16 w-7xl;
}

.p-nav-tabbtn {
  @apply bg-blue-500 h-full;

  &.active {
    @apply bg-indigo-200;
  }
}

.p-nav-tab {
  @apply relative z-2 h-full gap-6;

  & a {
    @apply h-full pt-4;
  }
}
</style>
