<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
  /* @apply inter; */

  


}

html {
  background: #1D1A2D;
}

html.dark {
  background: #1D1A2D;
  color: white;
}
</style>
