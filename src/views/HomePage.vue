<template>
    <div class="p-4 w-full h-full flex flex-col items-stretch">
        <div>home</div>
        <div class="flex-1 flex">
            <edit-element-tree
                v-model="element"
                @update:model-value="handle"
            ></edit-element-tree>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'

const element = ref({
    id: 'ts',
    component: 'div',
    class: 'shadow bg-gray-100 rounded-lg',
    children: [
        {
            id: 'dts1',
            component: () => h('span', 'hello'),
        },
        {
            id: 'dts',
            component: () => h('span', ' world'),
        },
    ],
})

function handle(val) {
    console.debug('hello', val)
}
</script>
