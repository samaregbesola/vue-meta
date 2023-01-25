import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router";
import { store } from "./store";
import App from "./App.vue";
import { createMetaManager } from "vue-meta";

const app = createApp(App);

app.use(createStore(store));
app.use(router);
app.use(createMetaManager());

app.mount("#app");
