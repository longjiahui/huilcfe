<template>
    <template v-if="modelValue">
        <element-render
            :model-value="modelValue"
            @update:model-value="handleUpdateElement"
        >
            <template
                v-if="modelValue.children && modelValue.children.length > 0"
            >
                <child-element
                    v-for="e in modelValue.children"
                    :key="e.id"
                    :model-value="e"
                    @update:model-value="handleUpdateElement"
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
import { ELEMENT_CHILDREN_KEY, type HuiElement } from '@/models'
import { traverse } from '@/scripts/utils'
import extend from 'extend'

const props = defineProps<{
    modelValue: HuiElement
}>()
const emit = defineEmits<{
    (e: 'update:model-value', val: HuiElement): void
}>()
function handleUpdateElement(el: HuiElement) {
    console.debug(el)
    let element = extend(true, {}, props.modelValue)
    traverse([element], ELEMENT_CHILDREN_KEY, (d, i, ds) => {
        if (d.id === el.id) {
            ds[i] = d
            return d
        }
    })
    console.debug(element)
    emit('update:model-value', element)
}
</script>
