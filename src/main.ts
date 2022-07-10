import { createApp } from "vue"
import App from "./App.vue"

Office.onReady(({ host, platform }) => {
  createApp(App).mount("#app")
})
