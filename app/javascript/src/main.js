import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import instance from '@/utils/axios.js';
import VueSweetalert2 from 'vue-sweetalert2';

import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import "font-awesome/css/font-awesome.min.css";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import './stylesheets/style.scss';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App);
    app.use(store)
    app.use(router)
    app.use(VueSweetalert2);
    app.provide('$axios', instance)
    app.mount('#vue-app')
  })
}
