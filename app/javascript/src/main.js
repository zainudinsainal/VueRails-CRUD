import { createApp } from 'vue'
import router from '@/router'
import store from './store'
import App from '@/App.vue'
import VueSweetalert2 from 'vue-sweetalert2';

import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import './stylesheets/style.scss';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App)
    app.use(VueSweetalert2);
    app.use(store)
    app.use(router)
    app.mount('#vue-app')
  })
}
