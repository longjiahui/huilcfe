<template>
    <template v-if="modelValue">
        <element-render :model-value="modelValue">
            <template
                v-if="modelValue.children && modelValue.children.length > 0"
            >
                <child-element
                    v-for="e in modelValue.children"
                    :key="e.id"
                    :model-value="e"
                ></child-element>
            </template>
        </element-render>
    </template>
</template>

<script lang="ts">
export default {
    name: 'child-element',
}
</script>
<script setup lang="ts">
import type { HuiElement } from '@/models'

defineProps<{
    modelValue: HuiElement
}>()
</script>
