// /* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/css/main.scss'

createApp(App)
  .use(router)
  .mount('#app')
// router.isReady().then(() => App.mount('#app'))
