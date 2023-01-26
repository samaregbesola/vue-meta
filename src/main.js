import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router";
import { store } from "./store";
import App from "./App.vue";
import { createHead } from "unhead";
const app = createApp(App);

const head = createHead();

app.use(createStore(store));
app.use(router);
app.use(head);

app.mount("#app");
