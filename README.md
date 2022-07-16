# vite-plugin-vue-pug-indent-fix
This plugin is resolve the Unexpected token "indent" error in Vue 3.

# How to use this plugin
## Nuxt
nuxt.config.js  
```
import vitePluginVuePugIndentFix from "vue-plugin-vue-pug-indent-fix"

export default defineNuxtConfig({
  vite: {
    plugins: [vitePluginVuePugIndentFix()]
  }
})
```