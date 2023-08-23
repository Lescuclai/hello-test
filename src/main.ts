import './assets/main.css'
import { useMediaQuery } from '@vueuse/core'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

const isLargeScreen = useMediaQuery('(min-width:500px)')

const app = createApp(App)

app.provide('isLargeScreen', isLargeScreen)

app.use(router)

app.use(Antd).mount('#app')
