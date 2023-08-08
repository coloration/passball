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
        <FlexRow class="p-nav-tab">
          <NuxtLink to="/" class="">
            <NavTabButton :active="route.path === '/'">
              Fixtures
            </NavTabButton>
          </NuxtLink>
          <!-- <NuxtLink to="/wiki">
            <NavTabButton :active="route.path.startsWith('/wiki')">
              百科
            </NavTabButton>
          </NuxtLink> -->
          <NuxtLink to="/leagues">
            <NavTabButton :active="route.path.startsWith('/leagues')">
              Leagues
            </NavTabButton>
          </NuxtLink>
          <!-- <NuxtLink to="/mine">
            <NavTabButton :active="route.path.startsWith('/mine')">
              <template #icon>
                <div i-emojione-monotone:bust-in-silhouette></div>
              </template>
              我的
              <small>Mine</small>
            </NavTabButton>
          </NuxtLink> -->
        </FlexRow>

      </FlexRow>
    </FlexRow>
  </div>
</template>

<style lang="postcss">
.p-nav {

  @apply h-20 relative z-1;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%,  rgba(89, 94, 136, 0.50) 34%, rgba(89, 94, 136, 0.50) 35%);

}

.p-nav-container {
  @apply w-full max-w-7xl h-full;
}

.p-logo img {
  @apply h-20;
}

.p-nav-tab {
  @apply h-20;
}
</style>
