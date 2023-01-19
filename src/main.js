import { createApp } from 'vue'
import App from './App.vue'
import {VueToastr} from 'vue-toastr'
import "vue-toastr/dist/style.css";

createApp(App).use(VueToastr, {
    defaultTimeout: 3000,
    defaultProgressBar: true,
    defaultPosition: "toast-top-center",
}).mount('#app')
