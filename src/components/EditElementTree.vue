<template>
    <element-tree
        :model-value="modelValue"
        @update:model-value="(val: HuiElement)=>emit('update:model-value', val)"
    ></element-tree>
</template>

<script setup lang="ts">
import { HuiElement } from '@/models'

defineProps<{ modelValue: Element }>()

const emit = defineEmits<{
    (e: 'update:model-value', val: HuiElement): void
}>()
</script>
