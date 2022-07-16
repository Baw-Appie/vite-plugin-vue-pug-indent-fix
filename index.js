export default function vitePluginVuePugIndentFix() {
  return {
    name: 'vite-plugin-vue-pug-indent-fix',
    transform(src, id) {
      if(/\.(vue)/.test(id)) {
        const temp = src.match(/^\n?(\s+)/)
        const indent = temp && temp[1]
        if (indent) return src.split('\n').map(str => str.replace(indent, '')).join('\n')
        return src
      }
    }
  }
}
