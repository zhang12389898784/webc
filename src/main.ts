
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "tailwindcss/tailwind.css"
// import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import {withInstallFunction} from "@/uitils/install"
import {getUser} from 'npm-zcx-test'
import jjj from "npm-zcx-test/111/src/components/jj.js"
console.log(getUser())
const int=withInstallFunction(()=>{console.log("saafs")},'$in')
const app = createApp(App)
app.use(jjj)
console.log(jjj,55)
app.use(createPinia())
app.use(int)
app.use(router)
app.use(Antd);
app.mount('#app')
