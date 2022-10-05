import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import vClickOutside from "click-outside-vue3";

createApp(App).use(vClickOutside).mount("#app");
