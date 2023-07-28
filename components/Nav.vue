<script lang="ts" setup>
const route = useRoute()

</script>


<template>
  <div class="p-nav">
    <FlexRow horizontal="center" class="w-full">
      <FlexRow class="p-nav-container">
        <NuxtLink
          to="/" 
          class="p-logo mr-12 text-4xl pointer"
        >
          <img src="/logo.png" alt="">
        </NuxtLink>
        <!-- -->
        <!-- <FlexRow class="p-nav-tab">
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
        </FlexRow> -->

      </FlexRow>
    </FlexRow>
  </div>
</template>

<style lang="postcss">
.p-nav {

  @apply bg-violet bg-opacity-10 h-20 relative z-1;
}

.p-nav-container {
  @apply w-full max-w-7xl;
}

.p-logo img {
  @apply h-20;
}
</style>
