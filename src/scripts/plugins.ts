import { createPinia } from 'pinia'

import * as $const from '@/const'
import router from '@/router'
import * as utils from '@/scripts/utils'
import * as models from '@/models'

import { App } from 'vue'

import ElementTreeVue from '@/components/ElementTree.vue'
import EditElementTreeVue from '@/components/EditElementTree.vue'
import ElementRenderVue from '@/components/ElementRender.vue'

export default {
    install(app: App) {
        app.use(router)

        app.use(createPinia())

        app.component('element-render', ElementRenderVue)
        app.component('element-tree', ElementTreeVue)
        app.component('edit-element-tree', EditElementTreeVue)

        app.config.globalProperties.$utils = utils
        app.config.globalProperties.$const = $const
        app.config.globalProperties.$model = models
    },
}
