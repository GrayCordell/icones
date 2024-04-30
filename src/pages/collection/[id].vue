<script setup lang='ts'>
import { pushRecentCollection, setCurrentCollection, useCurrentCollection } from '../../store'

const props = defineProps<{
  id?: string
}>()
const route = useRoute()
const id = computed<string>(() => props?.id || route?.params?.id as string)

watch(
  () => props.id,
  () => setCurrentCollection(id.value),
  { immediate: true },
)

onUnmounted(() => setCurrentCollection(''))

const collection = useCurrentCollection()

onMounted(() => {
  pushRecentCollection(id.value)
})
</script>

<template>
  <WithNavbar v-if="!collection">
    <div class="py-8 px-4 text-gray-700 text-center dark:text-dark-700">
      Loading...
    </div>
  </WithNavbar>
  <IconSet v-else />
</template>
