<template>
    <div :class="[finalLayoutClass, hoverClass]">
        <component :is="modelValue.component" :class="finalClass">
            <slot></slot>
        </component>
    </div>
</template>

<script setup lang="ts">
import type { HuiElement } from '@/models'
import { computed } from 'vue'

const props = defineProps<{
    modelValue: HuiElement
}>()

const hoverClass = 'hover:bg-[rgba(224,242,254,.5)] transition-all duration-500'

const horizontalClass = 'flex'
const verticalClass = 'flex flex-col'

const finalLayoutClass = computed(() => {
    let classes = ['flex-1']
    if (props.modelValue.layoutClass) {
        if (props.modelValue.layoutClass instanceof Array) {
            classes.push(props.modelValue.layoutClass.join(' '))
        } else {
            classes.push(props.modelValue.layoutClass)
        }
    }

    return [
        ...new Set(
            classes
                .join(' ')
                .split(' ')
                .filter((d) => !!d),
        ),
    ].join(' ')
})

const finalClass = computed(() => {
    let classes = ['w-full', 'h-full', 'items-stretch']

    let directionClass =
        props.modelValue.direction === 'horizontal'
            ? horizontalClass
            : verticalClass
    classes.push(directionClass)

    if (props.modelValue.class) {
        if (props.modelValue.class instanceof Array) {
            classes.push(props.modelValue.class.join(' '))
        } else {
            classes.push(props.modelValue.class)
        }
    }
    return [
        ...new Set(
            classes
                .join(' ')
                .split(' ')
                .filter((d) => !!d),
        ),
    ].join(' ')
})
</script>
