<template>
    <element-tree :model-value="modelValue"></element-tree>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

defineProps<{ modelValue: Element }>()

onMounted(() => {
    let mousePosition = [0, 0]
    document.addEventListener('mousemove', (e) => {
        // console.debug(document.elementFromPoint())
        mousePosition[0] = e.clientX
        mousePosition[1] = e.clientY
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'd') {
            const target = document.elementFromPoint(
                mousePosition[0],
                mousePosition[1],
            )
        }
    })
})
</script>
