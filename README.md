# vite-plugin-vue-pug-indent-fix
This plugin is resolve the Unexpected token "indent" error in Vue 3.

# How to use this plugin
## Vite
vite.config.js  
```
import vue from '@vitejs/plugin-vue'
import vitePluginVuePugIndentFix from "vite-plugin-vue-pug-indent-fix"

export default defineConfig({
  plugins: [vitePluginVuePugIndentFix(), vue()],
})
```

## Nuxt
nuxt.config.js  
```
import vitePluginVuePugIndentFix from "vite-plugin-vue-pug-indent-fix"

export default defineNuxtConfig({
  vite: {
    plugins: [vitePluginVuePugIndentFix()]
  }
})
```