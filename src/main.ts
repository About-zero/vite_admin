import { createApp } from "vue";
import ElementPlus from "element-plus";
import router from "@/router/index";
import "element-plus/dist/index.css";
import { setupStore } from "./store";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
setupStore(app)
app.use(ElementPlus);
app.use(router);
app.mount("#app");
