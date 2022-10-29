import { createApp } from "vue"
import App from "./App.vue"

// Include these into our main bundle
import "./commands/commands"
import "./functions/functions"

Office.onReady(({ host, platform }) => {
  createApp(App).mount("#app")
})
