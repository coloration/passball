<script lang="ts" setup>

</script>

<template>
  <RoundBoard class="match-calender" gradient="linear-gradient(174deg, rgba(89, 94, 136, 0.75) 0%, rgba(139, 139, 139, 0.00) 100%)">
    <!-- -->

    match calender

    <div class="flex">
      <div>
        <WeekButton></WeekButton>
        <WeekButton></WeekButton>
        <WeekButton active></WeekButton>
        <WeekButton></WeekButton>
        <WeekButton></WeekButton>
      </div>

      <div>
        <div>
          <TimeRuler />
        </div>

      </div>
       
    </div>
  </RoundBoard>
</template>

<style lang="postcss">
.match-calender {
  @apply h-80 text-white;
}
</style>
