import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiTrash2, HiPlus } from "oh-vue-icons/icons";

addIcons(BiTrash2, HiPlus  );

createApp(App).use(store).component("v-icon", OhVueIcon).mount('#app')
