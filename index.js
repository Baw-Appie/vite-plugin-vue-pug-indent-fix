module.exports = function vitePluginVuePugIndentFix() {
  return {
    name: 'vite-plugin-vue-pug-indent-fix',
    transform(src, id) {
      if(/\.(vue)/.test(id)) {
        if(src.includes("<template")) { // Vue3 setup component
          const contentTemp = src.match(/<template(?:.+?)>(.*?)<\/template>/s)
          let content = contentTemp && contentTemp[1]
          const oldContent = content
          const indentTemp = content.match(/^\r?\n?(\s+)/)
          const indent = indentTemp && indentTemp[1]
          if(content && indent) content = content.split('\n').map(str => str.replace(indent, '')).join('\n')
          return src.replace(oldContent, content)
        }
        const temp = src.match(/^\r?\n?(\s+)/)
        const indent = temp && temp[1]
        if (indent) return src.split('\n').map(str => str.replace(indent, '')).join('\n')
        return src
      }
    }
  }
}
