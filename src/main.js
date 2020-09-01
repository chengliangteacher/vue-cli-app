import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directive from "./directive/index"
import "./scss/index.scss"

const app = createApp(App);
directive(app);
app
    .use(store)
    .use(router)
    .mount("#app")
