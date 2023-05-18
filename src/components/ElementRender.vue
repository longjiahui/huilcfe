<template>
    <div ref="container" :class="[finalLayoutClass, hoverClass]">
        <component :is="modelValue.component" :class="finalClass">
            <slot></slot>
        </component>
    </div>
</template>

<script setup lang="ts">
import { ELEMENT_CHILDREN_KEY, type HuiElement } from '@/models'
import { computed, onMounted, ref } from 'vue'
import extend from 'extend'

const props = defineProps<{
    modelValue: HuiElement
}>()
const emit = defineEmits<{
    (e: 'update:model-value', val: HuiElement): void
}>()

const container = ref<HTMLDivElement>()
const isMouseIn = ref(false)

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

onMounted(() => {
    container.value?.addEventListener('mousemove', (e) => {
        isMouseIn.value = true
        e.stopPropagation()
    })
    container.value?.addEventListener('mouseleave', (e) => {
        isMouseIn.value = false
        e.stopPropagation()
    })
    document.addEventListener('keydown', (e) => {
        extend
        if (e.key === 'd' && isMouseIn.value) {
            let element: HuiElement = extend(true, {}, props.modelValue)
            if (
                element[ELEMENT_CHILDREN_KEY] &&
                element[ELEMENT_CHILDREN_KEY]?.length > 0
            ) {
                element[ELEMENT_CHILDREN_KEY].push({
                    id: Math.random() + '',
                    component: 'div',
                })
            } else {
                element[ELEMENT_CHILDREN_KEY] = [
                    {
                        id: Math.random() + '',
                        component: 'div',
                    },
                ]
            }
            emit('update:model-value', element)
        }
    })
})
</script>
