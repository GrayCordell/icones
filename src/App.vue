<script setup lang='ts'>
import { themeColor } from './store'

onMounted(() => {
})

const style = computed<any>(() => ({
  '--theme-color': themeColor.value,
}))
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden bg-base icones-application" :style="style">
    <div class="h-full flex-auto overflow-overlay">
      <RouterView />
    </div>
    <Progress />
  </div>
</template>

<style lang="scss">
//@import './main.css';
//@import '@unocss/reset/tailwind.css';
// moved above to below
@import './mainCSSPlusSomeCSSResetScopedTo_icones-applicaton.scss';
</style>
