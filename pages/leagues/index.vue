<script setup lang="ts">
import { LeagueView } from '../../containers'


</script>

<template>
  <div>
    
    <Suspense>
      <ClientOnly>
        <LeagueView />
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
<style></style>
