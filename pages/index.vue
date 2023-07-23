<script setup lang="ts">
import { MatchView } from '../containers'

const online = useOnline()
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <MatchView />
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
